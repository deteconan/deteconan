<template>
    <div>
        <h3 v-if="title" class="title">{{ title }}</h3>
        <b-embed id="video" :src="url" aspect="16by9" type="iframe" allowfullscreen></b-embed>
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
        computed: {
            url() {
                return 'https://drive.google.com/file/d/' + this.id + '/preview';
            },
            title() {
                if (this.name)
                    return 'Détective Conan épisode ' + this.name + ' VOSTFR';
                else
                    return null;
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
</style>
