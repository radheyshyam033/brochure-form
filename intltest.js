import { ClientFunction } from "testcafe";

const mockLocationAPI =  ClientFunction(() => {
    navigator.geolocation.getCurrentPosition = success =>  success({ coords: { latitude: 37.0902, longitude: 95.7129, }, timestamp: Date.now() });
});

fixture`RequestMock.constructor`
    .beforeEach(async t =>{
        await mockLocationAPI();
    })
    .page`https://www.mygreatlearning.com`
test('olo', ()=>{
    
})
