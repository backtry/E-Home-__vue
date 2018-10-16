<template>
    <div class="message-edital-box">
       <HeaderC :title='title1'></HeaderC>
        <div class="item" v-for="(item,index) in NewsData" :key="index">
            <div class="img-box">
                <img :src="item.pic" class="img">
            </div>
            <router-link to='/' class="text-box">
                <span class="title">{{item.title}}</span>
                <div class="date">
                    <span>{{item.currentTime}}</span>
                    <div class="count">
                        <div class="icon"></div>
                        <!-- <img src="../style/img/drawable-hdpi/12-eye.png" class="icon"> -->
                        <span>{{item.count}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            title1:'信工新闻眼',
            NewsData:[]
        }
    },
    methods:{
      getDate(){
          this.$axios.fetch('get','/news/newsList.do').then(res=>{
            this.NewsData = res.rows
            console.log(this.NewsData)
          })
      }
    },
    created(){
        this.getDate()
    }
}
</script>
<style lang="scss" scoped>
    .message-edital-box{
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
        .item{
            display: flex;
            border-bottom: 0.01rem solid #ccc;
            span,a{
                display:block ;
            }
            .img-box{
                margin: 0.2rem;
                width: 1.6rem;
                height: 1.6rem;
                .img{
                    width: 1.6rem;
                    height: 1.6rem;
                }
            }
            .text-box{
                font-size: 0.3rem;
                margin-top: 0.2rem;
                color: #000;
                flex: 1;
                .title{
                    width: 100%;
                }
                .date{
                    font-size: 0.1rem;
                    color:#666;
                    display: flex;
                    justify-content: space-between;
                    .count{
                        display: flex;
                        .icon{
                            width: 1rem;
                            height: 1rem;
                            background-color: #f00;
                        }
                    }
                }
            }
        }
    }
</style>
