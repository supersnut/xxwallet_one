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
          <img width="24" height="24" src="/github.png"/>
        </nuxt-link>
        <nuxt-link to="https://explorer.xx.network/" class="navbar-item">
          Explorer
        </nuxt-link>
        <nuxt-link to="https://wallet.xx.network/" class="navbar-item">
          Wallet
        </nuxt-link>
        <nuxt-link to="https://xx.network/" class="navbar-item">
          Network
        </nuxt-link>
        <nuxt-link to="https://dashboard.xx.network/" class="navbar-item">
          Dashboard
        </nuxt-link>
        <nuxt-link to="https://xxnetwork.wiki" class="navbar-item">
          Wiki
        </nuxt-link>
    </div>
  </nav>
</template>

<style>
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
@media (min-width: 600px) {
  .navbar-item {
    font-size: 1rem;
  }
}
</style>
