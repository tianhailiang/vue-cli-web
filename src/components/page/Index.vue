
<style scoped> 

   
</style>


<template>
  
  <div >

    <Top></Top>

    <Banner></Banner>

  </div>

</template>

<script>

import Top from './Header'

import Banner from './Banner'


export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Top, Banner
  }
}

</script>


