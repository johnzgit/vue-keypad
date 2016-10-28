<template>
    <div class="numinput" @click="$emit('focus')">
        <div class="row-shan">
            <span v-for="item in num.length"><i></i></span>
            <span v-for="item in max-num.length" ></span>
        </div>
    </div>
</template>

<script>
    export default {
            props: {
                num: {
                    type: String,
                    required: true,
                    default: ''
                },
                max: {
                    type: Number,
                    default: 6
                },
            },
    }
</script>

<style>
    .numinput {
        .row-shan {
            height: 3rem;
            border: 1px solid #999;
            margin: 2rem 2rem;
            display: flex;
            span {
                flex: 1;
                border-left: 1px solid #ccc;
                background-color: #eee;
                position: relative;
                &:nth-of-type(1) {
                    border-left: 0;
                }
                i {
                    position: absolute;
                    width: 1.4rem;
                    height: 1.4rem;
                    background-color: #000;
                    top: 50%;
                    left: 50%;
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }
</style>