<template>
  <LinkNavbar current='index'/>
  <div>
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
<style>
html {
  font-size: 14px;
  background: rgb(90, 70, 219);
  background: linear-gradient(90deg, rgba(90, 70, 219, 1) 0%, rgba(91, 41, 166, 1) 25%, rgba(86, 14, 87, 1) 50%, rgba(119, 28, 123, 1) 75%, rgba(243, 110, 202, 1) 100%);
  height: 100%;
}

.navbar-brand .brand-text {
  font-size: 1.11rem;
  font-weight: bold;
}

.has-text-shadow {
  text-shadow: 0px 0px 1px #000, 0px 0px 2px #000;
}

.background-dark {
  background: rgba(0, 0, 0, 0.65);
  background: linear-gradient(90deg, rgba(48, 20, 84, 0.75), rgba(60, 14, 64, 0.75));
}
</style>
