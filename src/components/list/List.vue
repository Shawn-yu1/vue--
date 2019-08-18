<template>
    <div class="list">
        <Listhead></Listhead>

        <div class="test">
            <div class="ding"></div>
            <h1>2017年山东乡镇公务员考试公告</h1>
            <p>考试公告</p>
        </div>
        <router-view></router-view>
        <b>点击查看更多</b>
    </div>
</template>

<script>
import Listhead from './components/Listhead'
export default {
    name:'List',
    components:{Listhead},
    data(){
        return{
        }
    },
    created(){
    }
}
</script>
<style scoped>
.list{
    width:100%;
    height:100%;
}
.test{
    height:1.1rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.12rem solid #ccc;
}
.ding{
    width:0.48rem;
    height:0.32rem;
    background:url('./../../assets/images/ding.jpg') no-repeat;
    background-size:100% 100%;
    margin-left:0.3rem;
    margin-top:0.39rem;
}
h1{
    font-size: 0.28rem;
    color:#444444;
    margin-top:0.39rem;
}
p{
    width:1.58rem;
    height:0.48rem;
    border:1px solid #15ccb0;
    text-align: center;
    line-height: 0.48rem;
    color: #15ccb0;
    border-radius: 5px;
    margin-top:0.3rem;
    margin-right:0.3rem;
}
b{
    display: inline-block;
    width:100%;
    text-align: center;
    color:#b5b5b5;
    height:0.8rem;
    line-height: 0.8rem;
}
</style>

