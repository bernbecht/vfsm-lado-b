const puppeteer = require("puppeteer");

let start = Date.now();

const url = "https://vamosfalarsobremusica.com.br/eps-4-0/";

async function openUrl(url) {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({ path: "1.png" });

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

          console.log({ title, releaseDate, img, spotifyUrl });
          return { title, release_date, img, spotify_url };
        });

        return epData;
      })
    );

    await browser.close();
    console.log(epsData);
    console.log(`Finished in: `, Date.now() - start);
  } catch (error) {
    console.error("Error opening URL:", error);
  }
}

openUrl(url);
console.log("Fetching data...");
