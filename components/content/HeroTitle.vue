<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    title: {type: String},
    subtitle: {type: String}
});
</script>

<template>
    <section class="hero">
        <div class="hero-body title is-size-2 has-text-white has-text-centered has-text-shadow-6">
            <slot/>
        </div>
    </section>
</template>
<style>
.has-text-shadow-6 {
    text-shadow: 0px 0px 2px #000, 0px 0px 4px #000, 0px 0px 6px #000;
}
</style>
