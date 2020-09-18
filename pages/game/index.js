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
  },
  getNewsData() {
    var _this = this
    Network.get(Api.newsMsgList+"?lastCursor=&pageSize=20",{}, function (res) {
      _this.setData({
        newsList: res.data.data
      })
    })
  },
  onPullDownRefresh() {
    var _this = this
    Network.get(Api.newsMsgList+"?lastCursor=&pageSize=20",{}, function (res) {
      wx.stopPullDownRefresh({
        complete: (res) => {},
      })
      _this.setData({
        newsList: res.data.data
      })
    })
  },
  onReachBottom() {
    var _this = this
    Network.get(Api.newsMsgList+"?lastCursor="+_this.data.newsList.slice(-1)[0].order+"&pageSize=20",{}, function (res) {
      _this.data.newsList.push(...res.data.data)
      _this.setData({
        newsList: _this.data.newsList
      })
    })
  }
})
