import Api from './api'
import Network from './network'
const phoneAuth = {
  // handleObj: null,
  // app: null,
  redrectUrl: '',
  login_code: '',
  authBind: (encryptedData, iv, sucCb) => {
    let _param = {
      encryptedData: encryptedData,
      iv: iv,
      type: 'xcx',
      code: this.login_code
    }
    Network.post(Api.PHONE_NUMBER_GET, {
      params: _param,
      loading: false,
      tokenNone: true
    }, (res) => {
      if (res.code === 200) {
        this.handleObj.setData({
          phoneNumber: res.data.phone,
          openid: res.data.openid,
          showMsgPanel: true,
          msgBtnText: '60s后可重发'
        });
        // this.dowmSms();
      }
    })
  },
  auth: (encryptedData, iv, redrectUrl, success) => {
    wx.checkSession({
      success: () => {
        // this.app.setData({redrectUrl: redrectUrl});
        this.authBind(encryptedData, iv, success);
      },
      fail: () => {
        wx.login({
          success: (res) => {
            this.app.globalData.login_code =  res.code;
            // this.handleObj.setData({login_code: res.code});
            // this.app.setData({redrectUrl: redrectUrl});
            this.authBind(encryptedData, iv, success);
          }
        })
      }
    })
  }
}