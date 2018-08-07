const Session = require('../../../../../common/auth/session')
const Api = require('../../../../../config/method');
const tips = require('../../../../../common/tips');
const app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: options.id
        });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {},
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {},
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        wx.stopPullDownRefresh();
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {},
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {},
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  
    // skipPage:app.skipPage,
    skipPage: app.skipPage,
    getContent: function (e) {
        this.setData({
            content: e.detail.value
        });
    },
    handleData: function (e) {
        let session=Session.get();
        Api.MemoryDiscuz({
            openid: session.openid,
            mid: this.data.id,
            content: this.data.content,
        }).then((data) => {
            tips.showSuccess("添加成功!");
            resolve();
        }).catch(err => reject(err));
        setTimeout(()=>{
            wx.navigateTo({url: '/pages/index/recall/detail/index?id='+this.data.id});
        },1000);
    }
});