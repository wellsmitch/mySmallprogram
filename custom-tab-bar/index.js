Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    userInfo: {

    },
    list: [
      {
        "iconPath": "../images/newsun.png",
        "selectedIconPath": "../images/news.png",
        "pagePath": "/pages/index/index",
        "text": "鲜闻"
      },
      {
        "iconPath": "../images/gameun.png",
        "selectedIconPath": "../images/game.png",
        "pagePath": "/pages/game/index",
        "text": "娱乐"
      },
      {
        "iconPath": "../images/mycenterun.png",
        "selectedIconPath": "../images/mycenter.png",
        "pagePath": "/pages/mycenter/index",
        "text": "我的"
      }
  ]
  },
  attached() {
  },

  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      if(data.item.text !== "我的") {
        var _this = this;
        wx.switchTab({
          "url":url
        })
      }
    },
    toCenter: function(e) { // 跳转到个人中心
      let _e = e.detail;
      if (_e.errMsg === 'getUserInfo:ok') { // 授权成功
        wx.switchTab({ url: '/pages/mycenter/index'})
      }else{
         wx.showToast({
           title: '授权失败',
         })
      }
  }
  }
})