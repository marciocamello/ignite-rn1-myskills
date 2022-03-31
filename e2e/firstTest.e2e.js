describe('Home screen', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should have welcome screen', async () => {
        await expect(element(by.id('welcome'))).toBeVisible();
    });

    it('check register a new skill', async () => {

        const inputNewSkill = await element(by.id('input-new'));
        const buttonAdd = await element(by.id('button-add'));
        const listSkills = await element(by.id('list-skills'));

        await inputNewSkill.tap();
        await inputNewSkill.typeText('React Native');
        await buttonAdd.tap();

        await listSkills.tap();

        expect(element(by.id('list-skill'))).toBeVisible();
    });
});
