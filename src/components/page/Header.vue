
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
   
   padding: 15px 30px;
   position:relative;
   overflow: hidden;

  }

.logo{
 float:left;

}

nav{

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 15px;
 float:right;

}

.search{
  position: relative;
}

.select{
   position: absolute;
    top: 0;
    left: 0;
    margin-left: 5px;
    height: 100%;
    line-height: 24px;
    color: #6a3906;
    border: none;
    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url(../../assets/header/search-arrow.png) no-repeat scroll right center transparent;
    padding-right: 14px;
    font-family: "Microsoft YaHei";
}

.search input{
    padding: 0 30px 0 70px;
    border: 1px solid #6a3906;
    color: #6a3906;
    height: 24px;
    border-radius: 12px;
    display: block;
}

.b{
    display: block;
    position: absolute;
    background: url(../../assets/header/top.png) no-repeat 2px 5px;
    width: 24px;
    height: 24px;
    border: none;
    right: 5px;
    top: 0;
    outline: none;
    cursor: pointer;
}


.nav_ul{
  padding-top: 16px;
  display: flex;
  flex-wrap: wrap;
}

.nav_ul li{
      margin: 0 3px;
}

.nav_ul li a{

    display: block;
    padding: 0 12px;
    height: 25px;
    line-height: 25px;
    white-space: nowrap;
    color: #6a3906;
    border-radius: 4px;
}


.nav_ul li a.active{
     color: #fff;
    background: #6a3906;
}


.header_right{
 float:right;
}

.log_right div:nth-of-type(1){
 margin-bottom:15px;

}


.log_right a{
    width: 90px;
    height: 26px;
    border-radius: 6px;
    border: 1px solid #6a3906;
    font-size: 12px;
    line-height: 26px;
    color: #6a3906;
    text-align: center;
    display: block;
}


.lgo_user{
  display: flex;
}

.header_photo{
    width: 63px;
    height: 63px;
    overflow: hidden;
    border: 1px solid #8E6A46;
    border-radius: 6px;
    margin-right: 10px;
}

.user-box{
    width: 70px;
    height: 65px;
}

.user_name{
    width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    margin-bottom: 15px;
    padding-left: 2px;
    text-align: left;
    color: #B3B3B3;
}


.user_info_box{
    height: 32px;
    border: 1px solid #8E6A46;
    border-radius: 6px;
}

.user_notice_btn{
   background: url(../../assets/header/letter.png) no-repeat 50% 50%;
    background-size: 23px 23px;
    width:34px;
    height:32px;
    float:left;
}


.user_drop_down_btn{
   float: left;
    width: 34px;
    height: 32px;
    position: relative;
}


.ico_profile{
    background: url(../../assets/header/profile.png) no-repeat 50% 50%;
    background-size: 20px 20px;
    display: block;
    width: 34px;
    height: 32px;
}

.user_drop_down{
   position: absolute;
   
  
    right: -8px;
    top: 55px;
    width: 150px;
    height: 210px;
    z-index: 999;
}

.little_arrow{
  z-index: 400;
    background: #fff;
    position: absolute;
    top: -5px;
    right: 17px;
    
    transform: rotate(45deg);
    height: 10px;
    width: 10px;
}

.shadow_arrow{

    z-index: 100;
    position: absolute;
    top: -5px;
    right: 17px;
    
    transform: rotate(45deg);
    box-shadow: 2px -1px 5px #aaaaaa;
    height: 10px;
    width: 10px;
}

.true_list{
  position: relative;
    z-index: 300;
    background-color: #fff;
    width: 150px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #333;
}

.true_list li{
   
    
    padding-top: 2px;
    padding-bottom: 2px;
    color: rgba(0, 0, 0, 0.4);
   
    cursor: pointer;
    display:flex;
    align-items: center;

}

.true_list li:nth-of-type(1){
   line-height: 35px;
    border-bottom: solid 1px #B6B6B6;
}

.true_list li:last-child{
  line-height: 35px;
    border-top: solid 1px #B6B6B6;
}

.true_list li i{
      color: #585858;
}


.ico_img{
    display: block;   
    width: 16px;
    height: 16px;
    margin-left:25px;
    margin-right:17px;
}

.ico_home {
    background: url(../../assets/header/room.png);
    background-size: cover;
}

.ico_class_m {
    background: url(../../assets/header/class-manage.png);
    background-size: cover;
}

.ico_setup {
    background: url(../../assets/header/setup.png);
    background-size: cover;
}

.ico_go_away {
    background: url(../../assets/header/go-away.png);
    background-size: cover;
}


</style>



<template>
  
  <header class="header">
     
     <div class="logo">

          <img src="../../assets/header/logo.png" >

     </div> 

    

    <div class="header_right" v-if="isLogin==0">

              <div class="lgo_user" v-if="role!=''">
                
                  <div class="header_photo" >
                     <img src="../../assets/header/body-header.png" />
                  </div>

                  <div class="user-box">

                        <p class="user_name">tianhailiang50@163.com</p>

                        <div class="user_info_box">
                              <a href="#" class="user_notice_btn"></a>
                              <div class="user_drop_down_btn" >
                                  <span class="ico_profile"></span>
                                  <div class="user_drop_down" >
                                        <div class="little_arrow"></div>
                                        <div class="shadow_arrow"></div>
                                        <ul class="true_list">
                                            <router-link to="/myTimetable" tag="li">
                                                 <span class="ico_img ico_home"></span> 
                                                 <i>我的主页</i>
                                           </router-link>
                                              <li>
                                                <span class="ico_img ico_class_m"></span>
                                                 <i>课程管理</i>
                                              </li>
                                              <li>
                                                <span class="ico_img ico_setup"></span> 
                                                <i>个人设置</i>
                                              </li>
                                              <li>
                                                <span class="ico_img ico_go_away"></span>
                                                <i> 退出登录</i>
                                              </li>
                                        </ul>
                                 </div>

                            </div>  
                          
                          
                          </div>
                           
                  </div>

              </div>
              
              <div class="log_right" v-else>
                
                 
                     <div>
                       
                         <router-link to="/register" >免费注册</router-link>
                     </div>

                      <div>
                           <router-link to="/login"  >用户登陆</router-link>
                      </div>  

                 

              </div>

      </div>

       <nav>
            <div class="search">
                <select class="select">
                    <option value="0">搜教师</option>
                    <option value="1">搜课程</option>
                </select>
                <input type="text" style="font-family:'Microsoft YaHei'" name="" id="" >
                <a href="javascript:;" class="b"></a>
            </div>
            <ul class="nav_ul">
                 <li>
                     <router-link to="/" active-class="active" exact>首页</router-link>
                 </li>    
                <li><a class="nav-classroom" href="./classroom.html">直播课堂</a></li>
                <li><a href="./pages/teacherList/teacherList.html">名师国际</a></li>
                <li><a href="./pages/courseList/courseList.html">一对一家教</a></li>
                <li><a class="nav-quxue" href="./quxue.html">趣学英语</a></li>
                <li>
                     <router-link to="/exquisiteList" active-class="active" exact>精品课堂</router-link>
                </li>
                <li>
                     <router-link to="/smallSchool" active-class="active" exact>微校</router-link>
                </li>
                
                <li><a class="nav-about" href="./about.html">关于优看</a></li>
            </ul>

        </nav>

  </header>
</template>

<script>

export default {
  name: 'top',
   props:{  
       isLogin:{
        type:Number,
        default: 0
      }
    },
  data () {
    return {
      
      role:""
     
    }
  },

   created:function(){

   
       if(sessionStorage.obj){
            var userRole = JSON.parse(sessionStorage.obj);
       }
      
       if(!sessionStorage.obj){

            this.$set(this,'role','');
           

       }else if(userRole.user.groups == "teacher"){
           // 0 是老师 1是学生
           this.$set(this,'role','0');
           
       }else if(userRole.user.groups == "student"){
              
               this.$set(this,'role','1');
               
       }
         
   },

    methods:{
      
    

   }

}

</script>


