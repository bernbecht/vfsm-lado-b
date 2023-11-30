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

function getEpUrls(html) {
  const $ = cheerio.load(html);
  const epUrls = $("a")
    .map((i, el) => $(el).attr("href"))
    .get()
    .filter((href) => href && href.includes("/lado-b"));

  console.log(`Finished in: `, Date.now() - start);
  return Array.from(new Set(epUrls));
}

const url = "https://vamosfalarsobremusica.com.br/eps-4-0/";

getHtml(url)
  .then((html) => {
    const epUrls = getEpUrls(html);
    const requests = epUrls.map(async (url) => {
      const res = await getHtml(url);
      const $ = cheerio.load(res);
      return {
        url,
        title: $(".elementor-heading-title.elementor-size-medium")
          .first()
          .text(),
        date: $(".elementor-post-info__item--type-date").prop("innerText"),
        cover_img_url: $(
          ".elementor-widget-theme-post-featured-image img"
        ).get()[0],
      };
    });
    Promise.all(requests).then((data) => console.log(data));
  })
  .catch((error) => console.error(error));

console.log("hi");
