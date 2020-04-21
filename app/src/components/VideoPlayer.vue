<template>
    <div :class="{'fullscreen': fullscreen}">
        <h3 v-if="title" class="title">{{ title }}</h3>
        <div class="video-box">
            <b-spinner class="spinner" variant="light"></b-spinner>
            <b-embed :src="url" aspect="16by9" type="iframe" allowfullscreen></b-embed>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VideoPlayer",
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String
            }
        },
        data() {
            return {
                fullscreen: false
            }
        },
        computed: {
            url() {
                return 'https://drive.google.com/file/d/' + this.id + '/preview';
            },
            title() {
                if (!this.name || this.fullscreen)
                    return null;
                else
                    return 'Détective Conan épisode ' + this.name + ' VOSTFR';
            }
        },
        methods: {
            toggleFullscreen(fullscreen) {
                this.fullscreen = fullscreen;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .title {
        color: white;
        font-size: 25pt;
        padding: 0 0.2em 0.3em;
        letter-spacing: 0.5px;

        @media screen and (max-width: 1000px) {
            font-size: 15pt;
        }
    }

    .fullscreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
    }

    .video-box {
        background: black;
        position: relative;

        .spinner {
            position: absolute;
            width: 2.5rem;
            height: 2.5rem;
            left: calc(50% - 1.25rem);
            top: calc(50% - 1.25rem);
        }
    }
</style>
