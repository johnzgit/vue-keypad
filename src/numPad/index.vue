<template>
    <div class="keynumer" v-show="show" transition="numpad" style="height:auto" @touchstart="toch($event)" @touchend="toched($event)">
        <aside v-for="line in 3">
            <span v-for="num in 3" v-on:click="add((line-1)*3+num, $event)">{{(line-1)*3+num}}</span>
        </aside>
        <aside>
            <i v-if="decimal" v-on:click="add('.', $event)">.</i>
            <i v-else></i>
            <span v-on:click="add(0, $event)">0</span>
            <i class="cut" v-on:click="cut"></i>
        </aside>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                twoWay: true,
                default: true
            },
            num: {
                type: String,
                required: true,
                default: '',
            },
            max: {
                type: Number,
                default: 6
            },
            cursor: {
                type: String,
                default: ''
            },
            decimal: {
                type: Boolean,
                default: false
            }
        },
        ready() {
            setInterval(() => {
                if(this.num)
                    this.cursor = '';
                else if(this.show)
                    (this.cursor.indexOf('I') > -1) ? (this.cursor = this.cursor.replace('I', '')) : (this.cursor = this.cursor + 'I')
            }, 1000);
        },
        watch: {
            num() {
                if(this.num) this.cursor = '';
            },
            show() {
                if(!this.show) this.cursor = '';
            }
        },
        methods: {
            add(val, e) {
                if(this.num.length < this.max)
                    this.$store.commit('updatePasscode', this.num + val)
            },
            cut(e) {
                this.$store.commit('updatePasscode', this.num.slice(0, this.num.length - 1))
            },
            toch(e) {
                if(e.target.tagName == 'SPAN')
                    e.target.style.backgroundColor = '#d4d8db'
                else
                    e.target.style.backgroundColor = '#fff'
            },
            toched(e) {
                if(e.target.tagName == 'SPAN')
                    e.target.style.backgroundColor = '#fff'
                else
                    e.target.style.backgroundColor = '#d4d8db'
            },
        }
    }
</script>

<style>
    .numpad-enter {
        transform: translate3d(0, 100%, 0);
    }
    
    .numpad-leave {
        transform: translate3d(0, 100%, 0);
    }
    
    .keynumer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background: #eee;
        z-index: 10100;
        transition-property: transform;
        transition-duration: 300ms;
        width: 100%;
        height: 15.416rem;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        aside {
            height: 25%;
            width: 100%;
            border-bottom: 1px solid #ccc;
            display: flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            span {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                -webkit-flex: 1;
                border-right: 1px solid #ccc;
                font-size: 1.875rem;
                text-align: center;
                line-height: 200%;
                position: relative;
                background-color: #fff;
                &:nth-of-type(3) {
                    border-right: 0;
                }
            }
            i {
                -webkit-box-flex: 1;
                -ms-flex: 1;
                flex: 1;
                -webkit-flex: 1;
                border-right: 1px solid #ccc;
                font-size: 1.875rem;
                text-align: center;
                line-height: 200%;
                position: relative;
                background-color: #d4d8db;
                font-style: normal;
            }
            .class-a.active-state {
                background-color: #fff;
            }
        }
        aside:nth-of-type(1) {
            border-top: 1px solid #ccc;
        }
        aside:nth-of-type(4) {
            border-bottom: 0;
        }
        aside:nth-of-type(4) i:nth-of-type(2) {
            background-color: #d4d8db;
            font-family: "iconfont" !important;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -webkit-text-stroke-width: 0.2px;
            -moz-osx-font-smoothing: grayscale;
            border-right: 0;
        }
        aside:nth-of-type(4) {
            span:nth-of-type(3).active-state {
                background-color: #fff;
            }
        }
        .cut {
            background-image: url(cut.svg);
            background-size: 50% 50%;
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }
    }
</style>