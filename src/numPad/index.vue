<template>
    <transition name="numpad">
        <div class="keynumer" v-if="show" @click="$event.stopPropagation()" @touchstart="toch($event)" @touchend="toched($event)">
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
    </transition>
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
    .numpad-enter-active,
    .numpad-leave-active {
        transform: translate3d(0, 100%, 0);
    }
    
    .numpad-enter,
    .numpad-leave-active {
        transform: translate3d(0, 100%, 0);
    }
    
    .keynumer {
        transition-property: transform;
        transition-duration: 300ms;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 10100;
        width: 100%;
        height: auto;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        aside {
            height: 25%;
            width: 100%;
            border-bottom: 1px solid #ccc;
            display: flex;
            span {
                flex: 1;
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
                flex: 1;
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
        .cut {
            background-image: url(cut.svg);
            background-size: 50% 50%;
            background-position: 50% 50%;
            background-repeat: no-repeat;
        }
    }
</style>