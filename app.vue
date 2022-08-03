<script setup>
useHead(
{
  // HTML Meta Tags
  meta: [
    { title: 'XX Wallet One - Generate a XX wallet directly from your browser.'},
    // { charset: 'utf-8'}, already applied by default, it seems
    { 'http-equiv': 'X-UA-Compatible', content:'IE=edge'},
    { 'http-equiv': 'Content-Type', content:'text/html; charset=utf-8'},
    { 'http-equiv': 'Cache-Control', content:'no-cache, no-store, must-revalidate'},
    { 'http-equiv': 'Pragma', content:'no-cache'},
    { 'http-equiv': 'Expires', content:'0'},
    { name:'viewport', content:'width=device-width, initial-scale=1'},
    { name:'application-name', content:'XX Wallet One'},
    { name:'keywords', content:'XX Wallet, XX Coin Wallet, Crypto Wallet, Cryptocurrency Wallet, Secure wallet, XX Wallet One, Wallet One, Offline Wallet Creator, Offline Wallet Generator, XX Network, XX Coin'},
    { name:'robots', content:'index'},
    { name:'googlebot-news', content:'noindex'},

    // HTML Meta Tags
    { name:'description', property:'description',
      content:'An offline tool to generate XX wallets for the XX network. XX coin is a privacy-focused cryptocurrency intended to be uses as digital cash and to replace Bitcoin.'},

    // Twitter Meta Tags
    { name:'twitter:url', property:'twitter:url', content:'https://xxwallet.one'},
    { name:'twitter:domain', property:'twitter:domain', content:'xxwallet.one'},
    { name:'twitter:card', property:'twitter:card', content:'summary_large_image'},
    { name:'twitter:image', property:'twitter:image', content:'/android-chrome-512x512.png'},
    { name:'twitter:title', property:'twitter:title', content:'XX Wallet One - Generate a XX wallet directly from your browser.'},
    { name:'twitter:description', property:'twitter:description', content: 'An offline tool to generate XX wallets for the XX network. XX coin is a privacy-focused cryptocurrency intended to be uses as digital cash and to replace Bitcoin.'},

    // Facebook Meta Tags
    { name:'og:type', property:'og:type', content:'website'},
    { name:'og:locale', property:'og:locale', content:'en'},
    { name:'og:url', property:'og:url', content:'https://xxwallet.one'},
    { name:'og:image', property:'og:image', content:'/android-chrome-512x512.png'},
    { name:'og:title', property:'og:title', content:'XX Wallet One - Generate a XX wallet directly from your browser.'},
    { name:'og:description', property:'og:description', content: 'An offline tool to generate XX wallets for the XX network. XX coin is a privacy-focused cryptocurrency intended to be uses as digital cash and to replace Bitcoin.'},
  ],
  script: [
    // https://www.polonel.com/snackbar/
    { type: 'text/javascript', src: 'https://cdn.jsdelivr.net/npm/node-snackbar@latest/src/js/snackbar.min.js' },
    { type: 'text/javascript', src: '/wasm_exec.js' }
  ],
  link: [
    // https://bulma.io/documentation/helpers/typography-helpers/
    { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/bulma@0.9.4/css/bulma.min.css'},
    // https://www.polonel.com/snackbar/
    { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/node-snackbar@latest/dist/snackbar.min.css'},
    { rel: 'shortcut icon', type: 'image/ico', href: '/favicon.ico'},
    { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png'},
    { rel: 'icon', type: 'image/png', size: '192x192', href: '/android-chrome-192x192.png'},
    { rel: 'apple-touch-icon', type: 'image/png', size: '180x180', href: '/apple-touch-icon.png'},
    // manifest requires a FQ name otherwise it causes issues when nuxt generates content
    { rel: 'manifest', href: 'https://xxwallet.one/manifest.json'},
    { rel: 'canonical', href: 'https://xxwallet.one'}
  ]
}
)
</script>
<style>
/* Disable display: flex; causing the navbar to be left aligned when w >= 1024  */
@media screen and (min-width: 1024px) {
  .navbar, .navbar-end, .navbar-menu, .navbar-start {
    display: block;
  }
}
</style>
<template>
  <div>
    <NuxtPage/>
  </div>
</template>
