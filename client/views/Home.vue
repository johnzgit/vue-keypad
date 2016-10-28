<template>
  <div class="page page-home" @click="show=false">
    <num-input :num="passcode" @focus="show=true"></num-input>
    <num-pad :show="show" :num="passcode"></num-pad>
  </div>
</template>

<script>
import {numInput,numPad} from '../../src'

export default {
  data(){
    return {
        show:false,
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
<style>
.page-home{
	a{
	    font-size: 1rem;
	}
}
</style>
