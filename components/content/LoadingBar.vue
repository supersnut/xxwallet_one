<template>
    <div class="loading-page">
        <div class="loading"></div>
    </div>
</template>
<style scoped>
.loading-page {
    text-align: center;
    font-size: 3rem;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.loading {
    display: inline-block;
    width: 3rem;
    height: 3rem;
    border: 4px solid rgba(0, 128, 255, 0.705);
    border-radius: 50%;
    border-top-color: #002288;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
    }
}
</style>
