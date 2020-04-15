<template>
    <b-navbar class="menu" toggleable="lg" type="dark" :sticky="!isMobileDevice()">
        <b-navbar-brand to="#">Deteconan</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item to="/" class="link">
                    <b-icon icon="house"></b-icon>
                    <span class="ml-2">épisodes</span>
                </b-nav-item>
                <b-nav-item to="/upload" class="link">
                    <b-icon icon="cloud-upload"></b-icon>
                    <span class="ml-2">upload</span>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "Menu",
        methods: {
            reach(url) {
                this.$router.push(url);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        padding: 0.5em 1em;
        background: #0d1850;

        .link {
            margin: 0 1em;

            span {
                text-transform: uppercase;
                letter-spacing: 0.8px;
            }
        }
    }
</style>
