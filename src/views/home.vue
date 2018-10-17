<template>
    <div class="home-box">
        <div class="header">
            <img src="../style/img/logo.png"  class="header-img">
            <router-link to="/login">登录</router-link>    
        </div>
        <div class="container">
            <swiper :options="swiperOption" class="swiper" >
                
                    <swiper-slide class="swiper-slide"   v-for="(item,index) in swiperData" :key="index">
                        <router-link :to="{path:'/newsfile',query:{title:'哪里来的',id:item.url}}">
                            <img :src="item.imgUrl" class="swiper-img">
                            <span class="swiper-text">{{item.title}}</span>
                        </router-link>
                    </swiper-slide>
                
                <!-- <swiper-slide class="swiper-slide">
                    <img src="../style/img/swiper/swiper2.png" class="swiper-img">
                    <span class="swiper-text">113253152</span></swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../style/img/swiper/swiper3.png" class="swiper-img">
                    <span class="swiper-text">113253152</span></swiper-slide>
                <swiper-slide class="swiper-slide">
                    <img src="../style/img/swiper/swiper4.png" class="swiper-img">
                    <span class="swiper-text">113253152</span></swiper-slide> -->

                <div class="swiper-pagination" slot="pagination"></div>
            </swiper> 
            <div class="table-cell-box">
                <div class="table-cell-top clear-fix">
                    <router-link :to="{path:'/newedital',query:{title:'信工新闻眼',id:'123',type:'0'}}">
                        <img src="../style/img/icon_01.png" class="table-cell-img">
                        <div>
                            <span>信工新闻眼</span>
                        </div>
                    </router-link>
                    <router-link :to="{path:'/organiztionlife'}">
                        <img src="../style/img/icon_03.png" class="table-cell-img">
                        <div>
                            <span>掌上组织生活</span>
                        </div>
                    </router-link>        
                    <router-link to="/cloudinteractive">
                        <img src="../style/img/icon_05.png" class="table-cell-img">
                        <div>
                            <span>党员云互动</span>
                        </div>
                    </router-link>    
                </div>
                <div class="table-cell-top clearfix">
                    <router-link :to="{path:'/newedital',query:{title:'党建一点通',id:'123',type:'3'}}" >
                        <img src="../style/img/icon_04.png" class="table-cell-img">
                        <div >
                            <span>党建一点通</span>
                        </div>
                    </router-link>
                    <router-link :to="{path:'/newedital',query:{title:'党员亮身份',id:'123',type:'5'}}" > <!-- type:5 --> 
                        <img src="../style/img/icon_06.png" class="table-cell-img">
                        <div>
                            <span>党员亮身份</span>
                        </div>
                    </router-link>        
                    <router-link to="/">
                        <img src="../style/img/icon_02.png" class="table-cell-img">
                        <div>
                            <span>党史上的今天</span>
                        </div>
                    </router-link>    
                </div>    
            </div>
            <div class="banner"> 
                <img src="../style/img/banner001.png" class="banner-img">
            </div>
            <div class="bottom-link">
                <div class="left"></div>
                <div class="right">
                    <div class="item">
                        <router-link :to="{path:'/newedital',query:{title:'制度建设',id:'123',type:'4'}}"></router-link>
                        <router-link :to="{path:'/newedital',query:{title:'特色活动',id:'123',type:'1'}}"></router-link>
                    </div>
                    <div class="item">
                        <router-link :to="{path:'/newedital',query:{title:'随时随地学',id:'123',type:'6'}}"></router-link>
                        <router-link :to="{path:'/everpicture',query:{title:'随时随地拍',id:'123',type:'7'}}"></router-link>
                    </div>
                </div>
            </div>      
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    components:{
        swiper,
        swiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            // dynamicBullets: true,
          },
            autoplay:true,
        },
        swiperForm:{
            type:0
        },
        swiperData:[]
      }
    },
    methods:{
        getSwiperData(){
            this.$axios.get('carousel/carouselList.do',this.swiperForm).then(res=>{
                console.log(res)
                this.swiperData = res.rows
            })
        }
    },
    created(){
        this.getSwiperData()
    }
  }
</script>
<style lang="scss" scoped>
    .home-box{
        .header{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 998;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #c50206;
            height: 34px;
            padding: 5px;
            .header-img{
                display: block;
                margin: 0;
                padding: 0;
                height: 32px;
                padding: 0 2px;
            }
            a{
                color: #fff;
                font-size: 17px;
                padding-right: 2px;
            }
        }
        .container{
            margin-bottom: 46px;
            padding-top: 44px;
            .swiper{
                height: 225px;
                padding-bottom: -1px;
                margin: 0;
                width: 100%;
                position: relative;
                .swiper-img{
                    display: block;
                    width: 100%;
                }
                .swiper-slide{
                    position: relative;
                    .swiper-text{
                        display: block;
                        height: 31px;
                        line-height: 31px;
                        position: absolute;
                        bottom: 0;
                        left: 0px;
                        right: 0;
                        background:rgba(0, 0, 0, 0.3);
                        text-align: center;
                        
                        color: #fff;
                        font-size: 0.3rem;
                    }
                }
                
                .swiper-pagination{
                    position: absolute;
                    bottom: -0.04rem;
                }
            }
            .table-cell-box{
                background-image: url('../style/img/hekeda.png');
                background-size: 100% 100%;
                padding-top: 20px;
                
                .table-cell-img{
                    width: 50px;
                    height: 50px;
                }
                .table-cell-top{
                    height: 98px;
                    display: flex;
                        div{
                            text-align: center;
                            font-size: 0.3rem;
                            color: #999;
                    }
                    a{
                       flex: 1;
                       text-align: center;
                       align-items: center;
                    }
                }
            }
        }
        .banner{
            height: 90.1px;
            .banner-img{
                width: 100%;
                height: 90.1px;
            }
        }
        .bottom-link{
            display: flex;
            height: 165px;
            width: 100%;
            background-image: url('../style/img/tese.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            .left{
                flex: 1;
            }
            .right{
                flex:2;
                display: flex;
                flex-direction: column-reverse;
                .item{
                    flex-grow: 1;
                    display:flex;
                     a{  
                        display: block;
                        text-decoration: none;
                        flex-grow: 1;
                    }   
                }
            }
        }
    }    
</style>
