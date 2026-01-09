const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const url = process.env.SCRAPE_URL;

  if (!url) {
    console.error("SCRAPE_URL not provided");
    process.exit(1);
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const data = await page.evaluate(() => {
    return {
      title: document.title,
      firstHeading: document.querySelector('h1')
        ? document.querySelector('h1').innerText
        : "No H1 found"
    };
  });

  fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));
  console.log("Scraping completed");

  await browser.close();
})();
