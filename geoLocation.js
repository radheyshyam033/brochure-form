
const mockGeolocationScript = 'navigator.geolocation.getCurrentPosition = success =>  success({ coords: { latitude: 96, longitude: 37, }, timestamp: Date.now() });';

fixture `Mock geolocation`
    .page('https://www.mygreatlearning.com/')
    
    
test('Check geolocation', async t => {
    console.log(mockGeolocationScript)
    // await t.openWindow('https://www.mygreatlearning.com/')
}).clientScripts({ 
    page: 'https://www.mygreatlearning.com/',
    content: mockGeolocationScript })