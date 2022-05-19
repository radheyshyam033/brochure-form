import createTestCafe, { Selector,RequestLogger } from "testcafe";

fixture `Fill form of GL website`
.page `https://www.mygreatlearning.com/pg-program-data-science-online-course`

test('Filling form ',async t=>{
    const downloadBrochure=Selector('#top-banner-button-section > div.lc-btn-section > a')
    const brochureFormPopup=Selector('#brochure_form')
    const name=Selector('#modal_form_section #name')
    const email=Selector('#modal_form_section #email')

    const logger= new RequestLogger({logRequestHeaders:true,
        logResponseHeaders:true })

    await t.addRequestHooks(logger)

    await t.click(downloadBrochure)
    await t.expect(brochureFormPopup.exists).ok()
    await t.expect(brochureFormPopup.visible).ok()

    .typeText(name,'Radhey')
    .typeText(email,"radhey@gmail.com")

    const mobNoSelector=Selector('.lead_capture_modal .international-tel-section input[type="tel"]')
    await t.typeText(mobNoSelector,'1234567890')

    const experiance=Selector('#modal_form_section #experience')
    const experianceOption=experiance.find('option')

    await t.click(experiance)
    .click(experianceOption.withText('1-2 Years'))
    .expect(experiance.value).eql('1-2 Years')

    const downloadBrochureButton=Selector("#submit_lead_capture_form_modal[data-title='Top Banner']")
    const lead_capture_formUrl='https://www.mygreatlearning.com/lead_capture_form'

    await t.click(downloadBrochureButton)
    .expect(logger.contains(r => r.response.statusCode === 200 && r.request.url == lead_capture_formUrl)).ok();
    
})