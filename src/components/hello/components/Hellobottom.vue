<template>
    <div class='hellbot'>
        <div class="sign">
            <div class="toutiao"></div>
            <h3>乡镇公务员</h3>
            <div>
                <el-dropdown>
                <span class="el-dropdown-link">
                    选择报考省份<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>北京</el-dropdown-item>
                    <el-dropdown-item>上海</el-dropdown-item>
                    <el-dropdown-item>广州</el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
            </div>
            <router-link to='/list'>
                    <i class="iconfont icontubiaozhizuo- right"></i>
            </router-link>
        
        </div>
        <ul>
            <li v-for="item of list">o {{item.txt}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Hellobottom',
    data(){
        return{
            list:[
                {txt:'2017年福建选调生考试公告，19日报名'},
                {txt:'2017年福建选调生考试公告，报名31日考试'},
                {txt:'2017广发银行杭州分行校园招聘面试通知'},
                {txt:'2017年福建选调生考试公告，19日报名'}
            ]
        }
    }
}
</script>
<style scoped>
.hellbot{
    width:100%;
    height:4.63rem;
}
.sign{
    display: flex;
    height:0.79rem;
    border-top:0.12rem solid #ccc;
    border-bottom:1px solid #ccc;
}
.toutiao{
    width:0.58rem;
    height:0.39rem;
    background: url('./../../../assets/images/toutiao.jpg') no-repeat;
    background-size:100% 100%;
    margin-left:0.3rem;
    margin-top:0.19rem;
}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  h3{
      font-size: 0.3rem;
      color:#444444;
      margin-left:0.2rem;
      margin-top:0.22rem;
  }
  span{
      display: inline-block;
      border:1px solid #ccc;
      width:2.18rem;
      height:0.38rem;
      border-radius: 5px;
      font-size: 0.23rem;
      text-align: center;
      margin-left:0.3rem;
      margin-top:0.19rem;
      line-height: 0.38rem;
  }
  a{
      margin-left:1.96rem;
      font-size: 0.21rem;
      color:#999999;
      margin-top:0.3rem;
  }
  li{
      height:0.96rem;
      font-size: 0.26rem;
      line-height: 0.9rem;
      color:#565656;
      padding-left:0.3rem;
  }
</style>

