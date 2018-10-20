<template>
    <div class="usermassage-p-box">
        <HeaderC :title=' "个人信息" '></HeaderC>
        <span class="btn-editor" @click="handleedit">编辑</span>
        <div class="usermassage-p-content">
            <div class='item'>
                <span class="item-title">头像</span>
                <img src="" >
            </div>
            <div class="item">
                <span class="item-title">姓名</span>
                <input type="text" :placeholder="userData.username" :disabled="isinput" class="item-input" >
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isinput:true,
            userData:{}
        }
    },
    methods:{
        getData(){
            this.$axios.get('/user/userInfo.do' ).then(res=>{
                console.log(res)
                this.userData = res.data
            })
        },
        handleedit(){
            this.isinput = !this.isinput
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
.usermassage-p-box{
    .btn-editor{
        position: fixed;
        top: 0.2rem;
        right: 0.2rem;
        font-size: 0.4rem;
        display: block;
        color: #fff;
        background-color: #c50206;
        
    }
    .usermassage-p-content{
        .item{
            display: flex;
            justify-content: space-between;
            padding: 0 0.2rem;
            .item-title{
                font-size: 0.28rem;
                
            }
            .item-input{
                text-decoration: none;
                background-color: #fff;
                color:#000;
                border-color: #fff;
            }
        }
    }
}
</style>
