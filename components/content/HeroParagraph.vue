<script setup>
const props = defineProps({
  title: {type: String},
  subtitle: {type: String}
});
</script>

<template>
  <section class="hero">
    <div class="hero-body p-4 is-size-6 subtitle has-text-white background-dark" >
        <slot/>
    </div>
  </section>
</template>
<style>
a {
  color: #3e8ed0;
  transition: color 0.3s ease;
}
a:hover {
  color: #2d628f;
}
</style>
