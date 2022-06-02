// import { ClientFunction } from 'testcafe';

// const getWindowLocation = ClientFunction(() => window.location);

// fixture`ClientFunction`
//     .page`https://devexpress.   github.io/testcafe/example/`;

// test('Check location', async t => {
//     const location = await getWindowLocation();

//     await t.expect(location.href).eql('https://devexpress.github.io/testcafe/example/');
// });

import fs from 'fs';
import { ClientFunction } from 'testcafe';

fixture `My fixture`
    .page `http://www.example.com/`;

const getDataFromClient = ClientFunction(() => getSomeData());

test('Check client data', async t => {
    const boundGetDataFromClient = getDataFromClient//.with({ boundTestRun: t });

    // console.log(getDataFromClient)
    // console.log(boundGetDataFromClient)
    boundGetDataFromClient().then(clientData => {
        console.log(clientData)
        console.log(JSON.stringify(clientData))
    });

    // const equal = await new Promise(resolve => {
    //     fs.readFile('/home/user/tests/reference/clientData.json', (err, data) => {
    //         boundGetDataFromClient().then(clientData => {
    //             resolve(JSON.stringify(clientData) === data);
    //         });
    //     });
    // });

    // await t.expect(equal).ok();
});