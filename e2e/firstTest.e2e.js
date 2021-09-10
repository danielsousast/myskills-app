describe('First Test', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('home'))).toBeVisible();
  });

  it('should register a new skill', async () => {
    const input = await element(by.id("input-new"))
    const button = await element(by.id("button-add"))
    const flatlist = await element(by.id("flatlist"))


    await input.tap()
    await input.typeText('Skill')
    await button.tap()
    //await flatlist.tap()

    expect(flatlist).toBeVisible();
  });

});
