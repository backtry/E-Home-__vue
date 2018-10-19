<template>
  <div id="app">
    <LoadingM v-if="this.$store.state.isLoading" ></LoadingM>
    <router-view/> 
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
</style>
