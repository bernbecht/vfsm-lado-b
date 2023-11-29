const cheerio = require("cheerio");
const axios = require("axios");

let start = Date.now();

async function getHtml(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching HTML:", error);
    return null;
  }
}
const url = "https://vamosfalarsobremusica.com.br/eps-4-0/";

getHtml(url)
  .then((html) => {
    const $ = cheerio.load(html);
    const epUrls = $("a")
      .map((i, el) => $(el).attr("href"))
      .get()
      .filter((href) => href && href.includes("/lado-b"));

    console.log(`Finished in: `, Date.now() - start);
    console.log(Array.from(new Set(epUrls)));
  })

  .catch((error) => console.error(error));

console.log("hi");
