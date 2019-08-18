<template>
    <div>
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
                <div class="sign">
                    <router-link to="/list">
                        <i class="iconfont iconzuo"></i>
                    </router-link>  
                    <h1>2017福建乡镇公务员</h1>
                </div>
            </div>
            <article>
                <h2>乡镇公务员行测常识：灾害逃生常识</h2>
                <p class="time">中公教育公务员考试网 2017-02-03 11：18 <b class="red">中公教育</b></p>
                <header>
                    开头：选择，最重要的就是选择。从我们生下来的那一天起，除了我们的父母不能选择，因为那在我们生下来之前就已经存在的。之外，所有的一切都可以选择，选择一个好的幼儿园、小学、漂亮的小学同桌、初中、高中、选择好的大学、选择好的工作、选择好的电视机、电脑、台灯、音响、选择不同牌子的化妆品、汽车；选择男人、女人，男人选择女人，女人选择男人，男人选择男人，女人选择女人。终其一生，我们的人生充满了各种选择，而这其中对男人来说最重要的是选择一个智商徘徊在及格线上的美女，还是选择一个随手能写出几千字散文的才女；对一个女人来说是选择一个对她好但是没有钱的穷光蛋，还是选择一个有钱但是对她不好的王八蛋。
                </header>
                <h3>一.地震逃生</h3>
                <footer>结尾：我们总是在不断的选择，衡量不同的指标。选择有钱的，选择身高一米八的 选择胸围 选择学历 选择进攻的方向 选择逃跑的路线。因为这个时间没有尽善尽美，我们只能选择对自己最有利的，选择成为我们不被淘汰的理由，成了我们活下去的法宝。男人徘徊在女人的美貌给我们的震撼和能谈笑风生的才女带给我们的愉悦中。女人唯一记得的是那个对你不好的。有钱的男人曾经是用钱这样地对你好过。我们无法选择，因为我们早已经忘了，当我们内心有真正想要的时候，我们其实是不用选择的。</footer>
            </article>
            <p class="end">5分钟快速了解乡镇公务员</p>
             <b class="look">点击查看更多</b>

         </div>
    </div>
</template>
<script>
export default {
    name:'Detail'
}
</script>
<style scoped>
.boxtop{
    width:100%;
    height:1.28rem;
    background:url('./../../assets/images/back.png') no-repeat;
    background-size:100% 100%;
    color:#fff;
}
.navbox{
    display:flex;
    justify-content: space-between;
    padding-top:0.1rem;
}
.loading{
    margin-left:0.11rem;
}
.dianchi{
    margin-right:0.11rem;
}
.sign{
    display: flex;
}
a{
    font-size:0.21rem;
    margin-left:0.3rem;
    margin-top:0.46rem;
    color:#fff;
}
h1{
    margin-left:1.75rem;
    margin-top:0.4rem;
    font-size: 0.32rem;
}
article{
    width:6.9rem;
    margin:0 auto;
}
h2{
    height:0.96rem;
    text-align: center;
    line-height: 0.96rem;
    font-size: 0.3rem;
    font-weight:bolder;
    color:#444444;
}
.time{
    font-size: 0.22rem;
    color:#a1a1a1;
    padding-left:0.53rem;
    margin-bottom: 0.66rem;
}
.red{
    color:#f26f6f;
    margin-left:0.3rem;
}
header{
    line-height: 0.6rem;
    text-indent: 2em;
    color:#666666;
}
h3{
    color:#444444;
    font-weight:bolder;
    line-height: 0.7rem;
}
footer{
    line-height: 0.6rem;
    text-indent: 2em;
    color:#666666;
}
.end{
    margin-left:1.2rem;
    color:#888888;
}
.look{
    display: inline-block;
    width:100%;
    text-align: center;
    color:#b5b5b5;
    height:0.8rem;
    line-height: 0.8rem;
}
</style>


