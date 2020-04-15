import Vue from 'vue';

Vue.mixin({
    methods: {
        isMobileDevice() {
            return window.innerWidth <= 1000;
        }
    }
});
