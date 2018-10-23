<template>
    <div class="change-password-box">
        <HeaderC title="修改密码"></HeaderC>
        <form class="change-password-container">
            旧密码：
            <input type="text" class="input-item">
            新密码：
            <input type="text" class="input-item">
            确认密码：
            <input type="text" class="input-item">
            <button class="change-btn">确定</button>
        </form>
            
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.change-password-box{
    .change-password-container{
        padding: 1rem 0.75rem 0 0.75rem ;
        font-size: 14px;
        margin: 0 auto;
        color: #666;
        .input-item{
            width: 5.5rem;
            margin-bottom: 10px;
            border-radius: 5px;
            color: #666!important;
            height: 0.8rem;
            outline: none;
            border: 0.02rem solid #999;
            margin-top: 0.2rem;
            font-size: 14px;
            padding: 0 0.1rem;
        }
    }
    .change-btn{
        outline: none;
        border: none;
        width: 5.78rem;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        display: block;
        background-color: #c50206;
        color: #fff;
        border-radius: 0.08rem;
    }
}
</style>
