<template>
    <div class="home-p-box">
        <div class="header">
            <img src="../style/img/logo.png"  class="header-img">
            <router-link to="/login">登录</router-link>    
        </div>
        <div class="container-box">
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
                    <router-link :to=" this.$store.state.userData.username ? '/cloudinteractive' : '/login' ">
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
                    <router-link :to="{path:computedPath,query:{title:'党员亮身份',id:'123',type:'5'}}" > <!-- type:5 --> 
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
            this.$store.commit('LOADING',true)
            this.$axios.get('carousel/carouselList.do',this.swiperForm).then(res=>{
                console.log(res)
                this.$store.commit('LOADING',false)
                this.swiperData = res.rows
            })
        },
        linkPath(){
            if(this.$store.state.userData.username){
                return('/newedital')
            }else{
                return('/login')
            }
        }
    },
    created(){
        this.getSwiperData()
    },
    computed:{
        computedPath() {
            return this.$store.state.userData.username ? '/newedital' : '/login'
        }
    }
  }
</script>
<style lang="scss" scoped>
    .home-p-box{
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
            height: 0.68rem;
            padding: 0.1rem;
            .header-img{
                display: block;
                margin: 0;
                padding: 0;
                height: 0.64rem;
                padding: 0 0.04rem;
            }
            a{
                color: #fff;
                font-size: 0.3rem;
                padding-right: 0.04rem;
            }
        }
        .container-box{
            
            padding-top: 0.88rem;
            .swiper{
                height: 4.5rem;
                
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
                        height: 0.62rem;
                        line-height: 0.62rem;
                        position: absolute;
                        bottom: 0;
                        left: 0;
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
                padding-top: 0.4rem;
                
                .table-cell-img{
                    width: 1rem;
                    height: 1rem;
                }
                .table-cell-top{
                    height: 1.96rem;
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
            height: 1.8rem;
            .banner-img{
                width: 100%;
                height: 1.8rem;
            }
        }
        .bottom-link{
            display: flex;
            height: 3.3rem;
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
