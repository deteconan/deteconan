<template>
    <b-container class="content px-0 pt-4 shadow" v-if="episodes">
        <div class="content-box pt-5 pt-lg-3">
            <video-player ref="video-player" v-if="currentEpisode" :id="currentEpisode.id" :name="currentEpisode.name"></video-player>

            <div class="pr-2 pr-lg-0 py-3 float-left">
                <span v-if="!isMobileDevice()" class="text-white" style="font-size: 15pt">Choisir épisode : </span>
                <b-select class="episode-chooser ml-2" v-model="$store.state.episode" @input="$store.commit('setEpisode', currentEpisode.name)">
                    <option v-for="episode in episodes" :key="episode.name">
                        {{ episode.name }}
                    </option>
                </b-select>
            </div>
            <div class="py-3 float-right">
                <b-button @click="$store.commit('previousEpisode')" class="mr-2" variant="outline-light">
                    <b-icon icon="skip-backward-fill"></b-icon>
                </b-button>
                <b-button @click="$store.commit('nextEpisode')" class="mr-2" variant="outline-light">
                    <b-icon icon="skip-forward-fill"></b-icon>
                </b-button>
            </div>
        </div>
    </b-container>
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
        background: rgba(255, 255, 255, 0.1);
        height: 100%;

        .content-box {
            width: 80%;
            margin: auto;

            @media screen and (max-width: 1000px) {
                width: 100%;
            }
        }
    }

    .episode-chooser {
        width: 100px;
    }
</style>
