### Puppeteer

Goes to the pages listed in the `contants.ts` and extracts data from those pages.
_Fuse.js_ indexes the extracted data.
It puts them in a json file inside the `cloudfare/src` folder.

When `process.env.NODE_ENV` is **PRODUCTION**, puppeteer will extract from **https://dsckiit.tech**.

### Cloudfare

[Fuse.js](https://github.com/krisk/Fuse) is make dependency being used which makes use of the _indexed_ json and _extracted_ json files.

It is deployed to [cloudfare workers](workers.cloudflare.com/).
