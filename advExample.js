// import { Selector } from 'testcafe';

// fixture `My fixture`
//     .page `http://devexpress.github.io/testcafe/example/`;

// test('Assertion with Selector', async t => {
//     const developerNameInput = Selector('#developer-name');

//     await t.typeText(developerNameInput, 'Peter');

//     //the selector prefixed with the "await" operator doesn't update and produces unstable test results. Avoid it.
//     const developerName = await Selector('#developer-name').value;

//     await t
//             .expect(developerName).eql('Peter')
//             .typeText(developerNameInput, 'Jack')
//             .expect(developerName).notEql('Jack'); // fails
// });

// import { Selector } from 'testcafe';

// fixture `My fixture`
//     .page `http://devexpress.github.io/testcafe/example/`;

// test('Assertion with Selector', async t => {
//     const developerNameInput = Selector('#developer-name');

//     await t.typeText(developerNameInput, 'Peter');

//     const developerName = Selector('#developer-name').value;

//     await t
//             .expect(developerName).eql('Peter')
//             .typeText(developerNameInput, 'Jack')
//             .expect(developerName).eql('Jack'); // passes
// });


import { Selector } from 'testcafe';

fixture `Example`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Drag test', async t => {
    const triedCheckbox = Selector('label').withText('I have tried TestCafe');

    await t
        .click(triedCheckbox)
        .drag('#slider', 360, 0, { offsetX: 10, offsetY: 10 })
        .takeScreenshot()
});
