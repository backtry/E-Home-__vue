<template>
    <div class="organiztion-life-box">
        <div class="header">
            <div class="return-icon" @click="this.returnLastPage">
                <img src="../style/img/drawable-hdpi/返回_btn.png">
            </div>
            <span>掌上组织生活</span>
        </div>
        <div class="banner">
            <img src="../style/img/timg.jpg" class="banner-img">
        </div>
        <div class="link-list">
            <div class="item">
                <img src="../style/img/icon1.png">
                <span>政治学习</span>
            </div>
            <div class="item">
                <img src="../style/img/icon2.png">
                <span>思想汇报</span>
            </div>
            <div class="item">
                <img src="../style/img/icon3.png">
                <span>心得总结</span>
            </div>
            <div class="item">
                <img src="../style/img/icon4.png">
                <span>民主评议</span>
            </div>
            <div class="item">
                <img src="../style/img/icon5.png">
                <span>流动党员找组织</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {


methods:{
       returnLastPage(){
           history.go(-1)
       }
   } 
}
</script>
<style lang="scss" scoped>
.organiztion-life-box{
    .header{
        background-color: #c50206;
        display: flex;
        height: 0.9rem;
        align-items: center;
        .return-icon{
            padding-left: 0.2rem;
            img{
                display: block;
                height: 0.5rem;
            }
        }
        span{
            flex: 1;
            text-align: center;
            padding-right: 0.4rem;
            display: block;
            font-size: 0.4rem;
            color: #ffffff;
        }
    }
    .banner-img{
        width: 100%;
        display: block;
    }
    .link-list{
        display: flex;
        flex-wrap: wrap;
        padding-top: 0.2rem;
        .item{
            width: 2rem;
            padding: 0.25rem;
            img{
                display: block;
                width: 1.7rem;
                margin: 0 auto;
            }
            span{
                padding-top: 0.2rem;
                display: block;
                text-align: center;
                font-size: 0.3rem;
                color: #666
            }
        }
    }    
}
</style>
