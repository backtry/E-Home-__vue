<template>
    <div class="usermassage-p-box">
        <HeaderC :title=' "个人信息" '></HeaderC>
        <span class="btn-editor" @click="handleedit" v-if="isinput">编辑</span>
        <span class="btn-editor" @click="handlesave" v-else>保存</span>
        <div class="usermassage-p-content">
            <div class='item'>
                <span class="item-title">头像</span>
                <div class="avatar-box">
                    <img :src="userData.header" class="avatar">
                </div>
            </div>
            <div class="item">
                <span class="item-title">姓名</span>
                <input type="text" v-model="userData.username" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">身份证</span>
                <input type="text" v-model="userData.idCard" :disabled="true" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">家庭住址</span>
                <input type="text" v-model="userData.hometown" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">工作地址</span>
                <input type="text" v-model="userData.address" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">民族</span>
                <input type="text" v-model="userData.nation" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">微信号</span>
                <input type="text" v-model="userData.wxNum" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">QQ号</span>
                <input type="text" v-model="userData.qqNum" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">性别</span>
                <span class="item-title" v-if="isinput">{{userData.sex==1?'男':'女'}}</span>
                <!-- <input type="text" v-model="userData.sex" :disabled="isinput" class="item-input" > -->
                <div v-else class="input-radio-box">
                    <input type="radio" name="sex" value="1" v-model="userData.sex" >男
                    <input type="radio" name="sex" value="0" v-model="userData.sex" >女
                </div>
            </div> 
            <div class="item">
                <span class="item-title">最高学历</span>
                <input type="text" v-model="userData.education" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">职称</span>
                <input type="text" v-model="userData.jobRank" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">薪资水平</span>
                <input type="text" v-model="userData.salary" :disabled="isinput" class="item-input" >
            </div>
            <div class="item">
                <span class="item-title">入党时间</span>
                <input type="date" v-model="userData.joinPartyTime" :disabled="isinput" class="item-input" v-if="!isinput" >
                <input type="text" v-model="userData.joinPartyTime" :disabled="isinput" class="item-input" v-else >
            </div>
            <div class="item">
                <span class="item-title">党费最后缴纳时间</span>
                <input type="date" v-model="userData.lastPayTime" :disabled="isinput" class="item-input" v-if="!isinput" >
                <input type="text" v-model="userData.lastPayTime" :disabled="isinput" class="item-input" v-else >
            </div>
            <div class="item">
                <span class="item-title">当前身份</span>
                <input type="text" v-model="userData.partyIdentity" :disabled="isinput" class="item-input" v-if="isinput">
                <select name="partyIdentity" id="" v-model="userData.partyStatus" class="partyIdentity-options" v-else>
                    <option value="2">党员</option>
                    <option value="1">预备党员</option>
                    <option value="0">积极分子</option>
                </select>
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
            this.$store.commit('LOADING',true)
            this.$axios.get('/user/userInfo.do' ).then(res=>{
                console.log(res)
                this.userData = res.data
                this.$store.commit('LOADING',false)
            })
        },
        handleedit(){
            this.isinput = !this.isinput
        },
        handlesave(){
            this.isinput = !this.isinput
            delete this.userData.idCard
            delete this.userData.header
            const formData = this.userData
            console.log(formData)
            this.$axios.fetch('post','/user/modifyInfo.do',formData,{headers:{ "Content-Type" : "multipart/form-data; boundary=----WebKitFormBoundaryrO6NICVqsTeL1BGP"}}).then(res=>{
                console.log(res)
                if(res.code==1){
                    console.log('edit success')
                    this.getData()
                }
            })
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
            height: 1rem;
            line-height: 1rem;
            border-bottom: 0.02rem solid #ddd;
            .avatar-box{
                height: 1rem;
                width: 0.96rem;
                display: flex;
                align-items: center;
                .avatar{
                display: block;
                width: 100%;
                }
            }
            .item-title{
                font-size: 0.28rem;
                
            }
            .item-input{
                background-color: #fff;
                color:#000;
                border-color: #fff;
                outline: none;
                border: 0px;
                display: block;
                text-align: right;
                font-size: 0.28rem;
            }
        }
        .input-radio-box{
            font-size: 0.28rem;
        }
        .partyIdentity-options{
            border: none;
            background-color: #fff;
        }
    }
}
</style>
