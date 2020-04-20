<template>
    <b-navbar v-if="!isMobileDevice()" class="menu" toggleable="lg" type="dark" :sticky="!isMobileDevice()">
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
    <div v-else class="mobile-menu">
        <b-row class="h-100">
            <b-col class="my-auto menu-item" @click="reach('/')">
                <b-icon icon="house"></b-icon>
            </b-col>
            <b-col class="my-auto menu-item" @click="reach('/upload')">
                <b-icon icon="cloud-upload"></b-icon>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style lang="scss" scoped>
    .menu {
        padding: 0.5em 1em;
        background: linear-gradient(#2b2828, #282a2b);

        .link {
            margin: 0 1em;

            span {
                text-transform: uppercase;
                letter-spacing: 0.8px;
            }
        }
    }

    .mobile-menu {
        z-index: 50;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 45px;
        width: 100%;
        background: linear-gradient(#2b2828, #282a2b);

        svg {
            color: white;
            width: 45px;
            height: 45px;
            padding: 10px;
            transition: 250ms ease;
            border-radius: 50%;
        }

        .menu-item {
            &:active {
                svg {
                    padding: 20px;
                    background: rgba(255, 255, 255, 0.1);
                }
            }
        }
    }
</style>
