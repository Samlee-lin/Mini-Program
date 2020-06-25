// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情数据
    detail:{},
    //推荐视频
    othervideo:[],
    videoreply:[],
  },

  // 获取当前视频详细信息
  // getCurrentVideoInfo(videoid){
  //   let that = this;
  //   wx.request({
  //     url: 'https://www.bilibili.com/index/ding.json',
  //     success(res){
  //       //console.log(res);
  //       if(res.data.code === 0){
          
  //         let kichiku = res.data.kichiku;
  //         let keys = Object.keys(kichiku);
  //         for (let i = 0; i < keys.length; i++) {
  //           if(kichiku[i].aid === parseInt(videoid)){
  //             console.log("1111"+kichiku[i].aid);
  //             that.setData({
  //               detail:kichiku[i]
  //             })
  //           }         
  //         } 
  //       }
  //     }
  //   })
  // },

  // 获取当前视频详细信息（新接口）
  getCurrentVideoInfo(bvid){
    let that = this;
    wx.request({
      url: 'https://api.bilibili.com/x/web-interface/view?bvid='+bvid,
      success(res){
        //console.log(res);
        if(res.data.code === 0){
          that.setData({
            detail:res.data.data
          })
          
        }
      }
    })
  },

  // 获取推荐视频
  // getOtherVideoList(){
  //   let that = this;
  //   wx.request({
  //     url: 'https://www.bilibili.com/index/catalogy/5-3day.json',
  //     success(res){
  //     //console.log(res);
  //     if(res.data.hot.code === 0){
  //       that.setData({
  //         othervideo:res.data.hot.list
  //       })
  //     }
  //     }
  //   })
  // },

  // 获取推荐视频(新接口)
  getOtherVideoList(videoid){
    let that = this;
    wx.request({
      url: 'http://api.bilibili.com/x/web-interface/archive/related?aid='+videoid,
      success(res){
      // console.log(videoid);
      // console.log(res);
       if(res.data.code === 0){
         that.setData({
           othervideo:res.data.data
         })
       }
      }
    })
  },

  // 获取评论数据
  getVideoReply(videoid){
    let that = this;
    wx.request({   
      url:'http://api.bilibili.com/x/v2/reply?jsonp=jsonp&pn=1&type=1&oid='+videoid,
      success(res){
        if(res.data.code === 0){
          that.setData({
            videoreply:res.data.data
          })
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    let videoid = this.options.id;
    let bvid = this.options.bvid;
    //this.getCurrentVideoInfo(videoid);
    this.getCurrentVideoInfo(bvid);
    // this.getOtherVideoList();
    this.getOtherVideoList(videoid);
    this.getVideoReply(videoid);
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