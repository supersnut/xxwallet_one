<a href="https://scan.coverity.com/projects/xxwallet_one">
  <img alt="Coverity Scan Build Status"
       src="https://img.shields.io/coverity/scan/27208.svg"/>
</a>

## XX Wallet One

* Tested with [Node.js](https://nodejs.org/) v16.16
* Built with [NuxtJS 3](https://content.nuxtjs.org/)
* official website: [xxwallet.one](https://xxwallet.one/)

### Dependencies:

```bash
npm install
```

### Development Server
runs on http://localhost:3000

```bash
npm run dev
```

### Production

[NuxtJS deployment documentation](https://v3.nuxtjs.org/docs/deployment).

Generate the static website for production:

```bash
npm run generate
```

Test the generated website:
```bash
npx serve -s .output/public
```

