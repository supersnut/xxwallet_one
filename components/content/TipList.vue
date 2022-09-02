<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
    title: {type: String},
});
</script>
<template>
    <section>
        <div class="container mt-4 p-4 is-size-5 has-text-white-ter background-dark">
            <div class="container has-text-centered tips">
                <h1 class="mb-2 title is-size-4 has-text-warning ">
                    {{ title }}
                </h1>
                <slot/>
            </div>
        </div>
    </section>
</template>

<style>
.tips li {
    text-align: left;
    padding-left: 35px;
    margin-bottom: 10px;
}

.tips li::before {
    content: "️🛡";
    width: 20px;
    margin-left: -20px;
    position: relative;
    left: -15px;
}
</style>
