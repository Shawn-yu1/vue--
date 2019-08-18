<template>
    <div class="big">
        <ul>
            <router-link to='/detail'>
                    <li v-for="item of msg">o {{item.txt}} <i class="iconfont icontubiaozhizuo-"></i></li>
            </router-link>
        </ul>
    </div>
</template>
<script>

export default {
    name:'Big',
    data(){
        return{
              msg:[
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"},
                {txt:"2017福建乡镇公务员考试公告"}
            ]
        }
    }
}
</script>
<style scoped>
li{
    display: flex;
    justify-content: space-between;
    height:0.98rem;
    color:#545454;
    line-height: 0.98rem;
    border-bottom:1px solid #f1f1f1;
    padding-left:0.3rem;

}
i{
    font-size: 0.2rem;
    margin-right: 0.3rem;
}
</style>