//logs.js
import {
  Api,
  Network
} from '../../utils/index'
Page({
  data: {
    newsList: [],
  },
  onLoad: function () {

    let _this= this;
    this.getNewsData()
    wx.setNavigationBarTitle({
      title: '鲜闻' 
    })
    //https://wellsmitch.top/bbb/getOuterData 
    Network.get("https://wellsmitch.top/bbb/item/getCovid.action",{}, function (res) {
      console.log(res);
      
    })
    
  },
  getNewsData() {
    var _this = this
    Network.post(Api.wellsmitchUrl+"/getOuterData",{
      params: {
        url: "https://api.readhub.cn/topic",
        lastCursor: '',
        pageSize: 20
      }
    }, function (res) {
      _this.setData({
        newsList: res.data.data
      })
    })
  },
  onPullDownRefresh() {
    var _this = this
    Network.post(Api.wellsmitchUrl+"/getOuterData",{
      params: {
        url: "https://api.readhub.cn/topic",
        lastCursor: '',
        pageSize: 20
      }
    }, function (res) {
      wx.stopPullDownRefresh({
        complete: (res) => {},
      })
      _this.setData({
        newsList: res.data.data
      })
    })
  },
  tap(e) {
    let _this = this;
    wx.navigateTo({
      url: '../infoDetail/index?info=' + e.currentTarget.dataset["value"].summary+"&barTitle=鲜闻信息"
    })
  },
  onReachBottom() {
    var _this = this
    Network.post(Api.wellsmitchUrl+"/getOuterData",{
      params: {
        url: "https://api.readhub.cn/topic",
        lastCursor: _this.data.newsList.slice(-1)[0].order,
        pageSize: 20
      }
    }, function (res) {
      _this.data.newsList.push(...res.data.data)
      _this.setData({
        newsList: _this.data.newsList
      })
    })
  }
})
