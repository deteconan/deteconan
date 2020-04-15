<template>
    <b-container>
        <div style="width: 300px; margin: auto">
            <b-img class="img-thumbnail my-3" src="https://images7.alphacoders.com/482/thumb-1920-482681.jpg"></b-img>

            <file-drop v-model="file" @input="parse" file-type=".json" class="mb-3"></file-drop>

            <b-input v-model="password" type="password" placeholder="Password" trim></b-input>
        </div>

        <form @submit.prevent="upload" class="my-4">
            <b-button type="submit" class="upload-btn" variant="primary" :disabled="!flux || loading">
                <b-icon v-if="!loading" icon="cloud-upload"></b-icon>
                <b-spinner v-else></b-spinner>
            </b-button>
        </form>

        <div v-if="file" class="pb-3">
            <b-list-group class="text-left">
                <b-list-group-item v-for="f in flux" :key="f.src" class="d-flex text-white">
                    <span class="filename">{{ f.ep }}</span>
                    <a @click="reach(f.src)" href="#" class="source text-white">{{ f.src }}</a>
                </b-list-group-item>
            </b-list-group>
        </div>
    </b-container>
</template>

<script>
    import * as axios from 'axios';

    export default {
        data() {
            return {
                file: null,
                flux: null,
                loading: false,
                jwToken: null,
                drive: null,
                interval: null,
                password: ''
            }
        },
        mounted() {
            this.updateUploading();

            this.interval = setInterval(() => {
                this.updateUploading();
            }, 10000);
        },
        methods: {
            parse() {
                if (!this.file)
                    return;
                let reader = new FileReader();
                reader.onload = event => {
                    let text = event.target.result;
                    this.flux = JSON.parse(text);
                };
                reader.readAsText(this.file);
            },
            upload() {
                if (!this.flux)
                    return;
                axios.post(process.env.VUE_APP_API_URL + '/api/drive/upload', {
                    flux: this.flux,
                    password: this.password
                }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.error(err.response.data);
                }).finally(() => {
                    this.updateUploading();
                });
            },
            list() {
                axios.get(process.env.VUE_APP_API_URL + '/api/drive/list').then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err.response.data);
                });
            },
            reach(url) {
                window.open(url);
            },
            updateUploading() {
                axios.get(process.env.VUE_APP_API_URL + '/api/drive/uploading').then(res => {
                    this.loading = res.data;
                }).catch(err => {
                    this.loading = false;
                    console.log(err);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .custom-file {
        background: rgba(0, 0, 0, 0.3);
        padding: 1em;

        .custom-file-input {
            display: none !important;
        }
    }

    .upload-btn {
        border-radius: 50%;
        width: 75px;
        height: 75px;
        line-height: 15px;
        font-size: 20pt;
    }

    .filename {
        width: 10%;
    }

    .source {
        width: 90%;
        overflow: hidden;
        padding-left: 30px;
        text-align: right;
    }
</style>
