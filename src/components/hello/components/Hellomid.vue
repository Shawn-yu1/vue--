<template>
    <div class='hellomid'>
        <ul>
            <li><img src="./../../../assets/images/tu1.jpg"/><p>面授课程</p></li>
            <li><img src="./../../../assets/images/tu2.jpg"/><p>网校课程</p></li>
            <li><img src="./../../../assets/images/tu3.jpg"/><p>图书材料</p></li>
            <li><img src="./../../../assets/images/tu4.jpg"/><p>在线讲座</p></li>
            <li><img src="./../../../assets/images/tu5.jpg"/><p>各地校区</p></li>
        </ul>
        <div class="midbox">
                <div class="left"></div>
                <div class="mid">
                    <p>2017甘肃乡镇公务员考试备考免费讲座</p>
                    <h1>陕西乡镇公务员考试模考活动</h1>
                </div>
                <div class="right"></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Hellomid'
}
</script>
<style scoped>
.hellomid{
    width:100%;
    height:3.69rem;
}
.hellomid ul{
    display:flex;
    justify-content: space-around;
    height:2.2rem;
    border-bottom:1px solid #eeeeee;
}
.hellomid ul li{
    margin-top:0.3rem;
}
.hellomid ul li img{
    width:0.98rem;
    height:0.98rem;
}
.hellomid ul li  p{
    text-align: center;
    font-size: 0.24rem;
    color:#666666;
    margin-top:0.2rem;
}
.midbox{
    display:flex;
    height:1.48rem;
    justify-content: space-between;
}
.midbox .left{
    width:0.83rem;
    height:0.74rem;
    background:url('./../../../assets/images/huodong.jpg') no-repeat;
    background-size:100% 100%;
    margin-top:0.37rem;
    margin-left:0.3rem;
}
.midbox .mid{
    font-size:0.22rem;
}
.midbox .mid p{
    margin-top:0.42rem;
    margin-bottom: 0.2rem;
}
.midbox .right{
    width:0.8rem;
    height:0.8rem;
    background:url('./../../../assets/images/new.png');
    background-size:100% 100%;
}
</style>

