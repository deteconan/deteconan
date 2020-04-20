import Vue from 'vue';
import {
    Plugins
} from '@capacitor/core';

const { StatusBar } = Plugins;

Vue.mixin({
    methods: {
        isMobileDevice() {
            return window.innerWidth <= 1000;
        },
        reach(url) {
            if (this.$route.path !== url)
                this.$router.push(url);
        },
        hideStatusBar() {
            StatusBar.hide();
        }
    }
});
