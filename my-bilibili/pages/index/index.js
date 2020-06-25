Page({

  /**
   * 页面的初始数据
   */
  data: {
    //选中导航的索引
    currentnavindex:0,
    //推荐视频数据
    videoList:[],
    // 首页导航数据
    navList : [
      {
        "text":"首页",
        "id":"0"
      },
      {
        "text":"推荐",
        "id":"0"
      },
      {
        "text":"直播",
        "id":"1"
      },
      {
        "text":"热门",
        "id":"2"
      },
      {
        "text":"追番",
        "id":"3"
      },
      {
        "text":"影视",
        "id":"4"
      },
      {
        "text":"说唱区",
        "id":"5"
      },
      {
        "text":"618种草",
        "id":"6"
      },   
      {
        "text":"抗击肺炎",
        "id":"7"
      },
      {
        "text":"小康",
        "id":"8"
      }

    ],
    // 轮播图路径
  swiperList : [
    {
      "url":"../../images/swiper1.jpg",
      "id":"0"
    },
    {
      "url":"../../images/swiper2.jpg",
      "id":"1"
    },
    {
      "url":"../../images/swiper3.jpg",
      "id":"2"
    },
  ],
  },


  // 点击首页导航
  activeNav(e){
    //console.log("1");
    this.setData({
      currentnavindex:e.target.dataset.index
    })
  },
//   // 获取导航列表函数，并赋值给navlist
//   getNavList(){
//     let that = this;
//     wx.request({
//       url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
//       success(res){
//         //console(res);
//         if(res.data.code === 0){
//           that.setData({
//             navList:res.data.data.navList
//           })
//         }
//       },
//     })
//   },
// // 获取轮播图函数，并赋值给swiperlist
//   getSwiperList(){
//     let that = this;
//     wx.request({
//       url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/swiper',
//       success(res){
//         console.log(res);
//         if(res.data.data.code === 0){
//           that.dataset({
//             swiperList:res.data.data.swiperList
//           })
//         }
//       }
//     })
//   },

  // 获取视频连接函数，并赋值给videolist
  getVideoList(){
    let that = this;
    wx.request({
      url: 'https://www.bilibili.com/index/ding.json',
      success(res){
        //console.log(res);
        if(res.data.code === 0){
          that.setData({
            videolist:res.data.kichiku
          })
        }
      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //调用获取视频数据函数
    this.getVideoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})