<template>
    <div @click="handleFileInput" class="file-drop">
        <div class="py-2">
            <div v-if="!value">
                <b-icon class="icon" icon="file-plus"></b-icon>
                <div class="text">Add a file</div>
            </div>
            <div v-else>
                <b-icon class="icon" icon="file-earmark-text"></b-icon>
                <div class="text">{{ value.name }}</div>
            </div>
        </div>
        <b-form-file @input="$emit('input', $event)" ref="file-input" :accept="fileType" class="hidden-form"></b-form-file>
    </div>
</template>

<script>
    export default {
        name: "FileDrop",
        props: {
            value: {
                required: true
            },
            fileType: {
                type: String,
                default: '*'
            }
        },
        methods: {
            handleFileInput() {
                this.$refs['file-input'].$refs.input.click();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .file-drop {
        border: 3px dotted rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        cursor: pointer;

        .icon {
            color: rgba(255, 255, 255, 0.9);
            width: 2em;
            height: 2em;
        }

        .text {
            color: rgba(255, 255, 255, 0.9);
        }

        .hidden-form {
            visibility: hidden;
            position: absolute;
            width: 0;
            height: 0;
        }
    }
</style>
