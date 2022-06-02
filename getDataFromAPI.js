import createTestCafe, { Selector,RequestLogger } from "testcafe";
import zlib from "zlib";
import util from "util";

fixture("Cash Conversion App").page("https://cash-conversion.dev-tester.com/");

   test( "User can convert between two currencies",
  async t => {
    const baseAmountInput = Selector("#base_amount");
    const fromCurrencySelect = Selector("#from_currency");
    const fromCurrencyOptions = fromCurrencySelect.find("option");
    const toCurrencySelect = Selector("#to_currency");
    const toCurrencyOptions = toCurrencySelect.find("option");
    const convertButton = Selector("#convert_btn");
    const conversionResponse = Selector(".conversion-response");

    const URL = 'https://cash-conversion-api.dev-tester.com/exchange_rates/convert';
    const logger= new RequestLogger(URL,{
        // logRequestHeaders: true,
        logRequestBody: true,
        stringifyRequestBody: true,
        logResponseBody: true,
        })

    // const url=await createTestCafe.createBrowser

    await t
        .addRequestHooks(logger)
      .typeText(baseAmountInput, "100")
      .click(fromCurrencySelect)
      .click(fromCurrencyOptions.withText("Euro"))
      .click(toCurrencySelect)
      .click(toCurrencyOptions.withText("Japanese Yen"))
      .click(convertButton);
      

    await t.expect(conversionResponse.exists).ok();
    await t
      .expect(conversionResponse.innerText)
      .eql("100 Euro is about 12085.58 Japanese Yen");
         
      const requestPayload  = logger.requests[1].request.body
      console.log("request data : ", requestPayload)
      
      const GunZip = util.promisify(zlib.gunzip);
      const unGzippedBody = await GunZip(logger.requests[1].response.body);
      const responseData = JSON.parse(unGzippedBody.toString());
      console.log("response data : ", responseData)
  }
);
