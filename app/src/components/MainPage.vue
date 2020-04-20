<template>
    <b-container class="content px-0 px-lg-2">
        <slot></slot>
    </b-container>
</template>

<script>
    export default {
        name: "MainPage"
    }
</script>

<style lang="scss" scoped>
    .content {
        background: rgba(0, 0, 0, 0.2);
        height: auto;
        min-height: 100%;
        box-shadow: inset 0px 0px 18px -2px rgba(0,0,0,0.75);
    }
</style>
