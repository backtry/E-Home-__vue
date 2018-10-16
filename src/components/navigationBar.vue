<template>
    <div class="bottom-bar">
            <div class="bottom-bar-item">
                <router-link to="/home">
                <div class="bgi-box1 mgl-54">
                </div>
                <div>
                    <span>首页</span>
                </div>
                </router-link>
            </div>
            <div class="bottom-bar-item">
                <router-link to="/notice">
                <div class="bgi-box2 mgl-54">
                </div>
                <div>
                    <span>通知早知道</span>
                </div>
                 </router-link>
            </div>
            <div class="bottom-bar-item">
                <router-link to="/personal">
                <div class="bgi-box3 mgl-54">
                </div>
                <div>
                    <span>我的党建</span>
                </div>
                 </router-link>
            </div>
        </div>    
</template>
<script>
export default {
    
}
</script>
<style  scoped lang="scss">
    .bottom-bar{
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
                        margin-left: 54px;
                    }
                    .bgi-box1{
                        width: 20px;
                        height: 20px;
                        background-image: url('../style/img/index/党_grey.png');
                        background-size: 20px 20px;
                    }
                    .bgi-box2{
                        width: 20px;
                        height: 20px;
                        background-image: url('../style/img/index/消息_grey.png');
                        background-size: 20px 20px;
                    }
                    .bgi-box3{
                        width: 20px;
                        height: 20px;
                        background-image: url('../style/img/index/会员_grey.png');
                        background-size: 20px 20px;
                    }
                }
            }
        
        .bottom-bar-item:hover{
            a{
                color: #ef473a;
            }
            border-top: 0.04rem solid rgb(221, 19, 19);;
            .bgi-box1{
                        width: 20px;
                        height: 20px;
                        background-image: url('../style/img/index/党_red.png');
                        background-size: 20px 20px;
                    }
                    .bgi-box2{
                        width: 20px;
                        height: 20px;
                        background-image: url('../style/img/index/消息_red.png');
                        background-size: 20px 20px;
                    }
                    .bgi-box3{
                        width: 20px;
                        height: 20px;
                        background-image: url('../style/img/index/会员_red.png');
                        background-size: 20px 20px;
                    }
        }
    }
</style>
