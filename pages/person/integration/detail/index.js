const tips = require('../../../../common/tips.js');
const Api = require("../../../../config/method.js");
const Session = require('../../../../common/auth/session')
const WxParse = require('../../../../common/component/wxParse/wxParse.js');
const app =getApp()
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
            id:options.id
        });
        this.handleData();
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
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    },
   
    skipPage:app.skipPage,
    handleData:function(){
        let session=Session.get();
        let _this=this;
        Api.Ishow({
            id:_this.data.id
        }).then(({
            data
        }) => {
            let article = data.detail;
            WxParse.wxParse('article', 'html', article, _this, 5);
            _this.setData({
                good:data
            });
            resolve();
        }).catch(err => reject(err));
    },
    handleOrder:function(){
        let session=Session.get();
        Api.IntegralOrder({
            uid:session.uid,
            pid:this.data.id
        }).then((
            data
        ) => {
            tips.showSuccess(data.errdesc);
            setTimeout(() => {
                wx.navigateTo({
                    url: '/pages/person/integration/index'
                });
            }, 1000);
            resolve();
        }).catch(err => reject(err));
    }
});