
<style scoped> 
 
.banner_img{
	width:100%;
	height:400px;
 background:yellow;
}
 

</style>




<template>
 <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
    	<!-- <img :src="slide.bannerUrl" class="banner_img" /> -->
    	<div :style="{background:'url('+slide.bannerUrl+') no-repeat center',backgroundSize:'100%'}" class="banner_img"></div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    
  </swiper>

</template>

<script>
import axios from 'axios';

import { swiper, swiperSlide } from 'vue-awesome-swiper'; 

export default {
  name: 'Banner',
  data () {
    return {
     
      swiperOption: {
          // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          loop : true,
          direction : 'horizontal',
          grabCursor : false,
          setWrapperSize :true,
          width:window.innerWidth,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
           }
           
        },

        swiperSlides:[]

    }
  },
  components: {
    swiper,
    swiperSlide
  },


    computed: {

      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },

   mounted:function(){

   	    var that = this;
       // 后台接口 不允许跨源 跨域http://ucan.bin-go.cc/api/login
      
	       axios.get("http://localhost:7777/static/mock/banner/banner.json",{
	         
	       })
	      .then(function (response) {

	          
	          var result=response.data;
            console.log(result)
	          
	          if(result.code==0){
	          	that.$set(that,'swiperSlides',result.data.banner)

	          }else{

	           console.log(result.msg)
	          } 
	          

	      })
	      .catch(function (error) {
	          console.log(error);
	      });
       
      
     
    
   },

   destroyed:function(){
       this.swiper=null;

   } 

}

</script>

<style type="text/css" >

.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 20px;
   
}

.swiper-pagination-bullet {
    width: 25px;
    height: 25px;
    display: inline-block;
    border-radius: 0;
    background: #000;
    opacity: 0.3;
    text-align:center;
    line-height: 25px;
    color:#fff;
} 

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #007aff;
}
</style>