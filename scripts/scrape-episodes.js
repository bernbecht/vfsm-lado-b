const puppeteer = require("puppeteer");
const fs = require("fs");

const start = Date.now();
const url = "https://vamosfalarsobremusica.com.br/eps-4-0/";
const outputFile = "../app/data/episodes.json";

async function openUrl(url) {
  console.log("👀 Fetching data...");

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    const urls = await page.evaluate(() => {
      const anchorEls = document.querySelectorAll("a");
      const epUrls = Array.from(anchorEls)
        .map((ep) => ep.href)
        .filter((href) => href.includes("/lado-b"));

      // removes duplicated urls
      return Array.from(new Set(epUrls));
    });

    const epsData = await Promise.all(
      urls.map(async (url) => {
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForSelector(
          ".elementor-widget-theme-post-featured-image"
        );

        const epData = await page.evaluate(() => {
          const titleEl = document.querySelector(
            ".elementor-heading-title.elementor-size-medium"
          );
          const title = titleEl.innerText;

          const releaseDateEl = document.querySelector(
            ".elementor-post-info__item--type-date"
          );
          const release_date = releaseDateEl.innerText;

          const imgEl = document.querySelector(
            ".elementor-widget-theme-post-featured-image img"
          );
          const img = imgEl.src;

          const spotifyEl = document.querySelector("iframe");
          const spotify_url = spotifyEl.src;

          return { title, release_date, img, spotify_url };
        });

        return epData;
      })
    );

    await browser.close();
    console.log(`⏱️ Fetch finished in: `, Date.now() - start);

    // write in file
    console.log("📝 Writing data to file...");
    const data = JSON.stringify(epsData);
    fs.writeFileSync(outputFile, data);
  } catch (error) {
    console.error("Error opening URL:", error);
  }
}

openUrl(url);
