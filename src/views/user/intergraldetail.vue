<template>
    <div class="intergraldetail-box">
        <HeaderC title="积分明细"></HeaderC>
        <div class="item" v-for="(item,index) in integralData" :key="index">
            <div class="intergral-title-box">
                <span class="title">{{item.typeName}}</span>
                <span class="date">{{item.timeFormat}}</span>
            </div>
            <span class="intergral">+{{item.singleDesc}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            formData:{
                page:1,
                rows:10
            },
            integralData:[]
        }
    },
    methods:{
        getData(){
            this.$axios.get('/integral/integralList.do',this.formData).then(res=>{
                console.log(res)
                this.integralData = res.rows
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>
<style lang="scss" scoped>
.intergraldetail-box{

    .item{
        display: flex;
        justify-content: space-between;
        padding: 0.32rem;
        border: 0.02rem solid #ddd;
       
        .intergral-title-box{
            font-size: 0.3rem;
            color: #444;
            .title{
                display: block;
                font-size: 18px;
                color: #333;
            }
            .date{
                font-size: 14px;
                color: #444;
            }
        }
        .intergral{
            font-size: 14px;
            color: red;
        }
    }
}
</style>
