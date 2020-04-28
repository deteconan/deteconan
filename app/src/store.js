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
        episode: 0,
        episodes: null
    },
    getters: {
        currentEpisode(state) {
            if (!state.episodes)
                return null;
            if (state.episode < 0 || state.episodes > state.episodes.length-1)
                state.episode = 0;
            return state.episodes[state.episode];
        },
        episodes(state) {
            return state.episodes;
        }
    },
    mutations: {
        setEpisode(state, episodeName) {
            state.episode = state.episodes.map(e => e.name).indexOf(episodeName);
        },
        nextEpisode(state) {
            if (state.episode < state.episodes.length-1)
                state.episode++;
        },
        previousEpisode(state) {
            if (state.episode > 1)
                state.episode--;
        }
    },
    actions: {
        loadEpisodes({ state }) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.VUE_APP_API_URL + '/api/drive/list').then(res => {
                    state.episodes = res.data.sort((a, b) => parseInt(a.name) - parseInt(b.name));
                    resolve();
                }).catch(err => {
                    reject(err);
                });
            });
        }
    },
    plugins: [vuexLocal.plugin]
});
