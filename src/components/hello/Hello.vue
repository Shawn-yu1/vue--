<template>
  <div class="hello">
     <Hellotop></Hellotop>
     <Hellomid></Hellomid>
     <Hellobottom></Hellobottom>
  </div>
</template>

<script>
import Hellotop from './components/Hellotop';
import Hellomid from './components/Hellomid';
import Hellobottom from './components/Hellobottom'
export default {
  name: 'Hello',
  components:{Hellotop,Hellomid,Hellobottom}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
