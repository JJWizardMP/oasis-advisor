import puppeteer from 'puppeteer'
import { writeFile } from 'fs/promises'

const HOTELS = [
  { id: 1, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d8009670-Reviews-The_Pyramid_Cancun-Cancun_Yucatan_Peninsula.html', route: './' },
  { id: 2, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d154444-Reviews-Grand_Oasis_Cancun-Cancun_Yucatan_Peninsula.html', route: '' },
  { id: 5, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d566509-Reviews-Grand_Oasis_Palm-Cancun_Yucatan_Peninsula.html', route: '' },
  { id: 6, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d17165483-Reviews-Hotel_Oasis_Palm-Cancun_Yucatan_Peninsula.html', route: '' },
  { id: 9, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d154429-Reviews-Smart_Cancun_by_Oasis-Cancun_Yucatan_Peninsula.html', route: '' },
  { id: 10, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d7229684-Reviews-Oh_Cancun_The_Urban_Oasis-Cancun_Yucatan_Peninsula.html', route: '' },
  { id: 41, url: 'https://www.tripadvisor.com.mx/Hotel_Review-g150807-d671741-Reviews-The_Sens_Cancun-Cancun_Yucatan_Peninsula.html', route: '' }
]

// THIS SCRIPT IS NOT WORKING NOW, WE NEED TO VERIFY

const getHTMLSources = async (item) => {
  const browser = await puppeteer.launch({headless: "new"})

  //for (const item of data) {
  const { id, url, route } = item
  const page = await browser.newPage()

  // Navigate to the page
  await page.goto(url)

  await page.click('label[for="LanguageFilter_2"]')
  // Click on the label element with the specified attribute value

  const htmlContent = await page.content()

  // Save the HTML source to a file
  const filename = `${route}/${id}.html`
  await writeFile(filename, htmlContent)

  // Close the page
  await page.close()
  //}

  // Close the browser
  await browser.close()
}

getHTMLSources(HOTELS[0])