describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3020');
  });

  it('should display a react logo', async () => {
    // console.log(page)
    const html = await page.$eval('title', e => e.innerHTML);
    await expect(page).toMatch('React');
  });
})
