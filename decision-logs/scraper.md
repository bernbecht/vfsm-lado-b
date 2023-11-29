# 29.11.2023

## Status

Establishing which lib to use for scrapping the data from a website

## Context

Considering two approaches:

- axios (fetching the website);
- cheerio or puppeteer;

## Decision

Decided on favor of axios + cheerio

### Why

The website renders all the urls we need on the first load and without any JS rendering. In this case, we don't need puppeteer to wait or interact with the page

Secondly, on a naive test using date.now(), the same approach is 2x faster using axios + cheerios than puppeteer. I assume that without having to parse, render and other browser activities, axios+cheerios is faster.
