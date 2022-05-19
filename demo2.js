import { ClientFunction } from 'testcafe';

const getWindowLocation = ClientFunction(() => window.location);

fixture`ClientFunction`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Check location', async t => {
    // const location = await getWindowLocation();
    console.log(getWindowLocation)

    // await t.expect(location.href).eql('https://devexpress.github.io/testcafe/example/');
});