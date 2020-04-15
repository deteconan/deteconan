import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import * as axios from "axios";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
});

export default new Vuex.Store({
    state: {
        episode: 1,
        episodes: []
    },
    getters: {
        currentEpisode(state) {
            return state.episode;
        },
        episodes(state) {
            return state.episodes;
        }
    },
    mutations: {
        setEpisode(state, episode) {
            state.episode = episode;
        },
        loadEpisodes(state) {
            axios.get(process.env.VUE_APP_API_URL + '/api/drive/list').then(res => {
                state.episodes = res.data.sort((a, b) => parseInt(a.name) - parseInt(b.name));
            }).catch(err => {
                console.log(err);
            });
        }
    },
    plugins: [vuexLocal.plugin]
});
