<template>
    <b-container class="content px-0 pt-4 shadow" v-if="episodes">
        <div class="content-box pt-3">
            <video-player :class="{'landscape-video' : landscapeOriented()}" :id="currentEpisode.id" :name="landscapeOriented() ? null : currentEpisode.name"></video-player>

            <div class="pr-2 pr-lg-0 pt-3 float-right">
                <span class="text-white" style="font-size: 15pt">Choisir épisode : </span>
                <b-select class="episode-chooser" v-model="$store.state.episode" @input="$store.commit('setEpisode', currentEpisode.name)">
                    <option v-for="episode in episodes" :key="episode.name">
                        {{ episode.name }}
                    </option>
                </b-select>
            </div>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "Episodes",
        computed: {
            currentEpisode() {
                return this.episodes.filter(e => e.name === this.$store.getters.currentEpisode.toString()).pop();
            },
            episodes() {
                return this.$store.getters.episodes;
            }
        },
        created() {
            let vm = this;
            window.addEventListener("orientationchange", function() {
                vm.$forceUpdate();
            });
        },
        methods: {
            landscapeOriented() {
                return this.isMobileDevice() && screen.orientation.type === 'landscape-primary';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        background: rgba(255, 255, 255, 0.1);
        height: calc(100% - 56px);

        .content-box {
            width: 80%;
            margin: auto;

            @media screen and (max-width: 1000px) {
                width: 100%;
            }

            .landscape-video {
                z-index: 5;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
        }
    }

    .episode-chooser {
        width: 100px;
    }
</style>
