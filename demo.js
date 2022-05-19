import { RequestMock, Selector } from 'testcafe';

const mock = RequestMock()
    .onRequestTo(/google.com/)
    .respond('', 404);

fixture`RequestMock.constructor`
    .page`google.com`
    .requestHooks(mock);

test('Should mock requests', async t => {
    await t
        .expect(Selector('body').child().count).eql(0);

    console.log(mock.respond())
});