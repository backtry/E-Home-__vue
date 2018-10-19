<template>
    <div class="height-46">
        <div class="bottom-bar">
            <div class="bottom-bar-item" :class="{active: this.$route.path=='/home'}">
                <router-link to="/home">
                    <div class="bgi-box1 mgl-54">
                    </div>
                    <div>
                        <span>首页</span>
                    </div>
                </router-link>
            </div>
            <div class="bottom-bar-item" :class="{active: this.$route.name=='notice'}">
                <router-link :to="{path:'/notice',query:{title:'通知早知道',id:'123',type:'2'}}">
                    <div class="bgi-box2 mgl-54">
                    </div>
                    <div>
                        <span>通知早知道</span>
                    </div>
                 </router-link>
            </div>
            <div class="bottom-bar-item" :class="{active: this.$route.name=='personal'}">
                <router-link to="/personal">
                    <div class="bgi-box3 mgl-54">
                    </div>
                    <div>
                        <span>我的党建</span>
                    </div>
                 </router-link>
            </div>
        </div>
    </div>        
</template>
<script>
export default {
    data() {
        return {
           
        }
    }
}
</script>
<style  scoped lang="scss">
.height-46{
    height: 0.92rem;
}
    .bottom-bar{
        height: 0.92rem;
        position:fixed ;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content:space-between;
        background-color: #fff;
        font-size: 0.3rem;
        font-weight: 400;
        padding-bottom: 0.04rem;

        .bottom-bar-item{
            padding-top: 0.04rem;
            flex-grow: 1;
            text-align: center;
            width: 1rem;
            border-top: 0.04rem solid #fff;
                a{
                    color: #999;
                    .mgl-54{
                        margin-left: 1.08rem;
                    }
                    .bgi-box1{
                        width: 0.4rem;
                        height: 0.4rem;
                        background-image: url('../style/img/index/党_grey.png');
                        background-size: 0.4rem 0.4rem;
                    }
                    .bgi-box2{
                        width: 0.4rem;
                        height: 0.4rem;
                        background-image: url('../style/img/index/消息_grey.png');
                        background-size: 0.4rem 0.4rem;
                    }
                    .bgi-box3{
                        width: 0.4rem;
                        height: 0.4rem;
                        background-image: url('../style/img/index/会员_grey.png');
                        background-size: 0.4rem 0.4rem;
                    }
                }
            }
        
        .active{
            border-top: 0.04rem solid rgb(221, 19, 19);;
            a{
                color: #ef473a;
                    .bgi-box1{
                        width: 0.4rem;
                        height: 0.4rem;
                        background-image: url('../style/img/index/党_red.png');
                        background-size: 0.4rem 0.4rem;
                    }
                    .bgi-box2{
                        width: 0.4rem;
                        height: 0.4rem;
                        background-image: url('../style/img/index/消息_red.png');
                        background-size: 0.4rem 0.4rem;
                    }
                    .bgi-box3{
                        width: 0.4rem;
                        height: 0.4rem;
                        background-image: url('../style/img/index/会员_red.png');
                        background-size: 0.4rem 0.4rem;
                    }
            }
        
        }
    }
    .active {
        a{
            
        }
    }
</style>
