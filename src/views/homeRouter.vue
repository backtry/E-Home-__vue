<template>
    <div>
        <router-view/>
        <navigationBar />
    </div>
</template>
<script>
import navigationBar from '../components/navigationBar.vue'
export default {
    components:{
        navigationBar
    }
}
</script>
<style lang="scss" scoped>

</style>
