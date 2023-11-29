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

    await browser.close();
    console.log(urls);
    console.log(`Finished in: `, Date.now() - start);
  } catch (error) {
    console.error("Error opening URL:", error);
  }
}
