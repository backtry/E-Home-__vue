<template>
    <div class="usermassage-box">
        <HeaderC :title=' "个人信息" '></HeaderC>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        getData(){
            this.$axios.get('/user/userInfo.do' ).then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style lang="scss" scoped>

</style>
