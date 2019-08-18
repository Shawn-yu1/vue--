<template>
    <div>
        <div class="boxtop">
            <i class="iconfont iconzuo zuo"></i>
            <h1>考试资讯</h1>
            <div class="quanguo">全国 <i class="iconfont iconxia xia"></i></div>
        </div>
        <h2>当前是全国公告考试列表，点击全国查看具体省份</h2>
        <div class="table">
            <router-link exact to='/list'>公告大纲</router-link>
            <b>|</b>
            <router-link exact to='/list/news'>考试新闻</router-link>
            <b>|</b>
            <router-link exact to='/list/test'>报考指导</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'Listhead'    
}
</script>
<style scoped>
.boxtop{
    width:100%;
    height:0.88rem;
    background:url('./../../../assets/images/back.png') no-repeat;
    background-size:100% 100%;
    color:#fff;
    display: flex;
    justify-content: space-between;
}
h1{
    font-size: 0.32rem;
    margin-top:0.28rem;
}
.zuo{
    font-size:22px;
    margin-left:0.3rem;
    margin-top:0.33rem;
}
.quanguo{
    margin-top:0.3rem;
    margin-right:0.3rem;
}
b{
    margin-top:0.3rem;
    color:#efefef;
}
.xia{
    font-size: 0.18rem;
}
h2{
    height:0.4rem;
    font-size:0.2rem;
    color:#ef4433;
    text-align: center;
    line-height: 0.4rem;
    background: #eeeeee;
}
.table{
    display: flex;
}
a{
    display: inline-block;
    width:2.18rem;
    height:0.88rem;
    text-align: center;
    line-height: 0.88rem;
    font-size: 0.3rem;
    color:#919191;
}
a:nth-of-type(1){
    margin-left:0.48rem;
}
.router-link-active{
    border-bottom:1px solid #15ccae;
    color:#15ccae;
}
</style>
