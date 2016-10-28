<template>
  <div class="page">
    <num-input :num="passcode" ></num-input>
    <num-pad :show.sync="showNumpad" :num="passcode"></num-pad>
  </div>
</template>

<script>
import {numInput,numPad} from '../../src'

export default {
  data(){
    return {
        showNumpad:false,
    }
  },
  mounted(){
    setTimeout(()=>this.showNumpad=true,1000)
  },
  watch:{
      passcode(){
          console.log(this.passcode)
      }
  },
  computed: {
    passcode() {
      return this.$store.state.passcode
    }
  },
  components: {
    numPad,
    numInput
  }
}
</script>
