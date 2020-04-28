<template>
    <main-page v-if="episodes && currentEpisode">
        <div v-if="isMobileDevice()">
            <b-img :src="require('../assets/logo.png')" width="90px" height="90px" class="rounded-circle mt-4" style="border: 2px solid white"></b-img>
        </div>
        <div class="content-box pt-5">
            <video-player ref="video-player" :id="currentEpisode.id" :name="currentEpisode.name"></video-player>

            <div class="py-3" :class="{ 'float-right': !isMobileDevice() }">
                <b-button @click="$store.commit('previousEpisode')" class="btn-back" variant="outline-light">
                    <b-icon style="stroke: rgba(255,255,255,0.8)" icon="chevron-left"></b-icon>
                </b-button>
                <b-select class="episode-chooser" v-model="episode">
                    <option v-for="episode in episodes" :key="episode.name">
                        {{ episode.name }}
                    </option>
                </b-select>
                <b-button @click="$store.commit('nextEpisode')" class="btn-forward" variant="outline-light">
                    <b-icon style="stroke: rgba(255,255,255,0.8)" icon="chevron-right"></b-icon>
                </b-button>
            </div>
        </div>
    </main-page>
</template>

<script>
    export default {
        name: "Episodes",
        computed: {
            currentEpisode() {
                return this.$store.getters.currentEpisode;
            },
            episodes() {
                return this.$store.getters.episodes;
            },
            episode: {
                get() {
                    return this.$store.getters.currentEpisode.name;
                },
                set(val) {
                    this.$store.commit('setEpisode', val);
                }
            }
        },
        activated() {
            window.addEventListener('orientationchange', this.onOrientationChange);
        },
        deactivated() {
            window.removeEventListener('orientationchange', this.onOrientationChange);
        },
        methods: {
            onOrientationChange() {
                if (!this.isMobileDevice() || screen.orientation.type !== 'landscape-primary') {
                    this.$refs['video-player'].toggleFullscreen(false);
                    return;
                }
                this.hideStatusBar();
                this.$refs['video-player'].toggleFullscreen(true);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        background: rgba(0, 0, 0, 0.2);
        height: 100%;
        box-shadow: inset 0px 0px 18px -2px rgba(0,0,0,0.75);
    }

    .content-box {
        width: 80%;
        margin: auto;

        @media screen and (max-width: 1000px) {
            width: 100%;
        }
    }

    .episode-chooser {
        width: 80px;
        margin: 0 0.5em;

        @media screen and (max-width: 1000px) {
            margin: 0;
            width: 100px;
        }
    }

    .btn-back {
        @media screen and (max-width: 1000px) {
            float: left;
            margin-left: 0.75em;
        }
    }

    .btn-forward {
        @media screen and (max-width: 1000px) {
            float: right;
            margin-right: 0.75em;
        }
    }
</style>
