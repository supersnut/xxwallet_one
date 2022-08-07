<script setup>
const props = defineProps({
  current: {type: String},
});
</script>

<template>
  <nav class="navbar">
      <div class="navbar-brand">
        <!--
        <nuxt-link v-if="props.current !== 'index'" to="/" class="navbar-item">
          Home
        </nuxt-link>
        <nuxt-link v-if="props.current !== 'translate'" to="/translate" class="navbar-item">
          🇺🇸
        </nuxt-link>
        -->
        <nuxt-link to="https://github.com/supersnut/xxwallet_one" class="navbar-item">
          <img alt="GitHub source" class="source_icon" src="/github.png"/>
          <p class="navbar-text-extra">&nbsp;Source</p>
        </nuxt-link>
        <nuxt-link to="https://explorer.xx.network/" class="navbar-item navbar-xx-icon">
          <img alt="XX Explorer" class="social_icon xx-icon" src="/xx.svg"/>
          &nbsp;Explorer
        </nuxt-link>
        <nuxt-link to="https://wallet.xx.network/" class="navbar-item navbar-xx-icon">
          <img alt="XX Wallet" class="social_icon xx-icon" src="/xx.svg"/>
          &nbsp;Wallet
        </nuxt-link>
        <nuxt-link to="https://xx.network/" class="navbar-item navbar-xx-icon">
          <img alt="XX.Network" class="social_icon xx-icon" src="/xx.svg"/>
          &nbsp;Network
        </nuxt-link>
        <nuxt-link to="https://dashboard.xx.network/" class="navbar-item navbar-xx-icon">
          <img alt="XX Node Dashboard" class="social_icon xx-icon" src="/xx.svg"/>
          &nbsp;Dashboard
        </nuxt-link>
        <nuxt-link to="https://xxnetwork.wiki" class="navbar-item">
          <img alt="XX Wiki" class="social_icon xx-icon" src="/xx.svg"/>
          &nbsp;Wiki
        </nuxt-link>
      </div>
    <div class="navbar-brand">
      <nuxt-link to="https://discord.com/invite/Y8pCkbK" class="navbar-item navbar-text-discord">
        <img alt="XX Discord" class="social_icon" src="/discord.svg"/>
        <p class="navbar-text-extra">&nbsp;Discord</p>
      </nuxt-link>
      <nuxt-link to="https://t.me/xxnetwork" class="navbar-item navbar-text-telegram">
        <img alt="XX Telegram" class="social_icon" src="/telegram.svg"/>
        <p class="navbar-text-extra">&nbsp;Telegram</p>
      </nuxt-link>
      <nuxt-link to="https://twitter.com/xx_network" class="navbar-item navbar-text-twitter">
        <img alt="XX Twitter" class="social_icon" src="/twitter.svg"/>
        <p class="navbar-text-extra">&nbsp;Twitter</p>
      </nuxt-link>
      <nuxt-link to="https://coinmarketcap.com/currencies/xx-network/" class="navbar-item">
        <img alt="CoinMarketCap" class="social_icon" src="/coinmarketcap.png"/>&nbsp;Market
        </nuxt-link>
      <nuxt-link to="https://www.mexc.com/exchange/XX_USDT" class="navbar-item navbar-text">
        MEXC
      </nuxt-link>
      <nuxt-link to="https://forum.xxnetwork" class="navbar-item">
        <img alt="XX Forum" class="social_icon xx-icon" src="/xx.svg"/>
        Forum
      </nuxt-link>
      <nuxt-link to="https://xxnetwork.wiki/How_to_Nominate" class="navbar-item">
        <img alt="XX Staking" class="social_icon xx-icon" src="/xx.svg"/>
        Staking
      </nuxt-link>
    </div>
  </nav>
</template>

<style>
.source_icon {
  width: 24px;
  height: 24px;
}
.social_icon {
  width: 20px;
  height: 20px;
}
.navbar {
  background: rgba(255,255,255,0.85);
  min-height: 2.5rem;
}
.navbar-brand {
  justify-content: center;
  min-height: 2.5rem;
}
@media (max-width: 319px) {
  .navbar {
    display: none;
  }
}
@media (min-width: 320px) {
  .navbar-item {
    font-size: 0.7rem;
  }
}
@media (max-width: 499px) {
  .xx-icon {
    display: none;
  }
  .navbar-text-extra {
    display: none;
  }
}

@media (min-width: 500px) {
  .navbar-text::before {
    content: "🔗 ";
  }
  .navbar-text-extra {
    display: inline;
  }
  .xx-icon {
    display: inline;
  }
}
@media (min-width: 600px) {
  .navbar-item {
    font-size: 1rem;
  }
}
</style>
