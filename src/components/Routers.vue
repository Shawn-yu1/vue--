<template>
     <nav class="router-nav">
       <div>
         <router-link to='/'>
              <i class="iconfont iconshezhizaixianzixun  zixun"></i>
              <p>在线咨询</p>
          </router-link>
       </div>
      <div>
        <router-link to='/'>
              <i class="iconfont iconweixin"></i>
              <p>官方微信</p>
      </router-link>
      </div>
      <div>
        <router-link to='/'>
              <i class="iconfont iconkechenggailan"></i>
              <p>课程辅导</p>
      </router-link>
      </div>
      <div>
        <router-link to='/'>
              <i class="iconfont iconlianxiren"></i>
              <p>交流群</p>
      </router-link>
      </div>
      
    </nav>
</template>
<script>
export default {
    name:'Routers'
}
</script>
<style scoped>
.router-nav{
  width:100%;
  display: flex;
  justify-content: space-around;
  border-top:1px solid #ccc;
}
.router-nav div{
  width:1rem;
  text-align: center;
  padding-top:0.18rem;
  padding-bottom: 0.14rem;
}
.router-nav div a:hover{
  color:#16ccaf;
  cursor: pointer;
}
.router-nav div a{
  color:#6e6e6e;
}
p{
  margin-top:0.16rem;
  font-size: 0.17rem;
}
i{
  font-size: 0.37rem;
}
</style>

