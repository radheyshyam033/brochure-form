import { Selector,RequestLogger } from "testcafe";

fixture `Fill form of GL website`
.page `https://www.mygreatlearning.com/pg-program-data-science-online-course`

test('Filling form ',async t=>{
    const downloadBrochure=Selector('#top-banner-button-section > div.lc-btn-section > a')
    const brochureFormPopup=Selector('#brochure_form')
    const nameSelector=Selector('#modal_form_section #name')
    const emailSelector=Selector('#modal_form_section #email')

    const logger= new RequestLogger({logRequestHeaders:true,
        logResponseHeaders:true })

    await t.addRequestHooks(logger)

    await t.click(downloadBrochure)
    await t.expect(brochureFormPopup.exists).ok()
    await t.expect(brochureFormPopup.visible).ok()

    .typeText(nameSelector,'Radhey')
    .typeText(emailSelector,"radhey@gmail.com")

    const mobNoSelector=Selector('.lead_capture_modal .international-tel-section input[type="tel"]')
    await t.typeText(mobNoSelector,'1234567890')

    const experiance=Selector('#modal_form_section #experience')
    const experianceOption=experiance.find('option')

    await t.click(experiance)
    .click(experianceOption.withText('1-2 Years'))
    .expect(experiance.value).eql('1-2 Years')

    const downloadBrochureButton=Selector("#submit_lead_capture_form_modal[data-title='Top Banner']")
    const leadCaptureFormUrl='https://www.mygreatlearning.com/lead_capture_form'

    await t.click(downloadBrochureButton)
    .wait(5000)
    .expect(logger.contains(r => { 
       return  r.request.url == leadCaptureFormUrl && r.response.statusCode === 200 
    })).ok();
//    let count=logger.requests.length
//    let i=0
//    console.log(count)
//    while(count){
//        console.log(logger.requests[i].request.url)
//        console.log(logger.requests[i].response.statusCode)
//        i++
//        count--;
//    }
})