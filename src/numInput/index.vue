<template>
    <div class="numinput">
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            span {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                -webkit-flex: 1;
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
                    -webkit-transform: translate(-50%, -50%);
                    -o-transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                }
            }
        }
    }
</style>