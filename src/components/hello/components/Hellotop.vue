<template>
    <div class="hellotop">
        <div class="boxtop">
            <div class="navbox">
                   <div class="leftbox">
                        <i class="iconfont iconxinhao01 loading"></i>
                        <span class="Strokei">Strokei</span>
                        <i class="iconfont iconwifi"></i>
                    </div>
                    <span class="clock">1:43 pm</span>
                    <div class="rightbox">
                        <b class="eight">80%</b>
                        <i class="iconfont icondianliangbuzu dianchi"></i>
                    </div>
            </div>
            <div class="logo">
                <i class="zg-logo"></i>
                <b class="sign">中公乡镇公务员</b>
                <i class="three el-icon-more-outline"></i>
            </div>
        </div>
        <div class="boxbot">
              <el-carousel height="3.02rem" direction="vertical" :autoplay="true">
                <el-carousel-item v-for="item in 3" :key="item">
                <img src="./../../../assets/images/lunbo_01.jpg"/>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
    name:'Hellotop',
}
</script>
<style scoped>
.hellotop{
    width:100%;
    height:4.30rem;
}
.boxbot{
    width:100%;
    height:3.02rem;
}
.navbox{
    display:flex;
    justify-content: space-between;
    padding-top:0.1rem;
}
.loading{
    margin-left:0.11rem;
}
.el-carousel__item img{
    width:100%;
    height:100%;
}
.boxtop{
    width:100%;
    height:1.28rem;
    background:url('./../../../assets/images/back.png') no-repeat;
    background-size:100% 100%;
    color:#fff;
}

.dianchi{
    margin-right:0.11rem;
}
.logo{
    height:0.47rem;
    line-height:0.47rem;
    margin-top:0.2rem;
    }
.logo::after{
    content:"";
    display:inline-block;
    clear: both;
}
.zg-logo{
    display: inline-block;
    width:0.95rem;
    height:0.47rem;
    background:url('./../../../assets/images/logo.jpg') no-repeat;
    background-size:100% 100%;
    margin-left:0.3rem;
    
}
.sign{
    display: inline-block;
    font-size:0.3rem;
    vertical-align:top;
    margin-top:7px;
}
.three{
    float:right;
    display: inline-block;
    margin-right:0.3rem;
    margin-top:0.1rem;
    font-size: 20px;
}
</style>
