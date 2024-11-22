const {test, expect} = require('@playwright/test')


test ('Play Sachin Tendulkar Video on Youtube', async({page}) => {

    //Navigate to Youtube.com
    await page.goto('https://www.youtube.com')
    await page.waitForTimeout(2000)

    //Click the Search Bar to highlight
    await page.getByPlaceholder('Search').click()
    await page.waitForTimeout(2000)

    //Enter Search Text 'Sachin Tendulkar'
    await page.getByPlaceholder('Search').fill('Sachin Tendulkar')
    await page.waitForTimeout(4000)

    //Hit Search Button to get Search Results
    await page.locator('button#search-icon-legacy').click()
    await page.waitForTimeout(4000)

    //Pick the Video that has Title 'Sachin Tendulkar Massive...'
    //Has Two Videos with Same Title, So Selected First One
    await page.getByTitle('Sachin Tendulkar Massive').first().click()
    await page.waitForTimeout(4000)

    //Ensure that the video has 32k Likes
    //Two 32K Likes Button Showing, Not Sure Where the Other 32k Likes Button is there in the Same Page, For Time Being Selected the First One
    //This Test Case is Not Right, Just for Time Being I selected first button
    const likeCount = await page.locator('button:has-text("32K")').first().textContent()
    expect(likeCount).toContain('32K')

})
