// pages/playvideo/playvideo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    aid:"",
    bvid:"",
    cid:"",
  },

  setVideoid(aid,bvid,cid){
    let that = this;
   console.log(aid+'-'+bvid+'-'+cid);
   that.setData({
    aid:aid
   });
   that.setData({
    bvid:bvid
   });
   that.setData({
    cid:cid
   });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let aid = this.options.aid;
    let bvid = this.options.bvid;
    let cid = this.options.cid;
    this.setVideoid(aid,bvid,cid);

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