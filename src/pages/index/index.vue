<template>
  <div class="index">
    <!-- 顶部的搜索栏 -->
    <div class="header">
      <input
        type="text"
        placeholder="搜索"
      >
      <i class="iconfont icon-sousuo"></i>
    </div>
    <!-- 轮播图 -->
    <swiper
      indicator-dots
      autoplay
      circular
      class="swiper"
    >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
          <image
            model="aspectFill"
            :src="item.image_src"
          />
        </swiper-item>
    </swiper>
    <!-- 分类 -->
    <div class="category">
      <div class="item" v-for="(item, index) in categoryList" :key="index">
        <image
          :src="item.image_src"
          mode="scaleToFill"
          lazy-load="false"/>
          <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // 轮播图数据
      swiperList: [],
      // 分类数据
      categoryList:[]
    };
  },
  created() {
    // 轮播图数据
    wx.request({
      url: "https://autumnfish.cn/wx/api/public/v1/home/swiperdata", //开发者服务器接口地址",
      data: "data", //请求的参数",
      method: "GET",
      success: res => {
        // console.log(res);
        this.swiperList = res.data.message;
        // console.log(this.swiperList);
      }
    });
    // 分类数据
    wx.request({
      url: "https://autumnfish.cn/wx/api/public/v1/home/catitems", //开发者服务器接口地址",
      data: "data", //请求的参数",
      method: "GET",
      success: res => {
        // console.log(res);
        this.categoryList = res.data.message
      }
    });
  }
};
</script>

<style lang="less">
// 头部样式
.header {
  position: relative;
  padding: 20rpx 16rpx;
  background-color: #fe2c4b;
  input {
    height: 60rpx;
    background-color: white;
    text-align: center;
    border-radius: 20rpx;
    font-size: 30rpx;
    color: #bbb;
  }
  .icon-sousuo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-220%, -50%);
    font-size: 32rpx;
    color: #bbb;
  }
}
// 轮播图样式
.swiper {
  image {
    width: 100%;
  }
}
// 分类样式
.category{
  display: flex;
  padding-top: 24rpx;
  padding-bottom: 29rpx;
  .item{
    flex: 1;
    text-align: center;
    image{
      width: 95rpx;
      height: 95rpx;
    }
    span{
      display: block;
      color: #333;
      font-size: 24rpx;
    }
  }
}
</style>

