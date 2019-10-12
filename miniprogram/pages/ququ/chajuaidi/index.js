// pages/ququ/chajuaidi/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    warnSize: 'mini',
    disabled: false,
    plain: false,
    loading: false,
    val:'',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
   /**
   * 搜索框聚焦事件
   */
  getFocus:function(e){
    e.target.value = this.val;
    this.public();
  },
  // 鼠标市失去焦点事件
  blur:function(){
    this.public();
  },
  // 输入事件
  bindKeyInput:function(e){
    if (e.detail.value){
      let select = this.data.isShow_;
      let value = e.detail.value
      this.setData({
        isShow_: true,
        val: value
      });
    }
    // this.searchCode();
  },
  // 搜索
  searchCode:function(e){
    this.data.val == '' ? wx.showToast({
      title: '请输入货单号',
      icon: 'none',
      duration: 2000
    }) : wx.showToast({
      title: '暂无该订单信息',
      icon: 'none',
      duration: 1000
    });
  },
  // 搜索框下方 寄 收 扫码按钮切换
  clickCheck:function(e){
    let param = e.target.dataset;
    switch (param.text){
      case '1':
        wx.showToast({
          title: '我寄得',
          icon: 'success',
          duration: 2000
        });
        break;
      case '2':
        wx.showToast({
          title: '我收得',
          icon: 'success',
          duration: 2000
        });
        break;
      case '3':
        this.saoyisao();
        break;
    };
  },
  // 扫一扫
  saoyisao:function(){
    var _this = this;
    wx.scanCode({
      onlyFromCamera:false,
      success:(res)=>{
        var result = res.result;
        console.log(res);
      }
    })
  },
  //登陆
  login: function (e) {
    wx.switchTab({
      url: '../mine/index',
    })
  },
  /**
   * 自定义公用方法
   */
  public:function(){
    let select = this.data.isShow;
    this.setData({
      isShow: select = !select
    });
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