// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */ 
  properties: {
    key: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    currentLength: 0,
    textareaMaxLength: 200,
    img: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    // 隐藏弹层
    closePopup() {
      this.popupCloseAnimate()
      setTimeout(() => {
        this.setData({
          show: false
        })
      }, 500);
    },

    // 显示弹层
    openPopup() {
      this.setData({
        show: true
      })
      this.popupOpenAnimate()

    },

    // 弹层打开动画
    popupOpenAnimate() {
      this.animate('.wall', [{
          opacity: 0,
          backgroundColor: '#CCCCCC'
        },
        {
          opacity: 0.3,
          backgroundColor: '#DDDDDD'
        },
        {
          opacity: 0.6,
          backgroundColor: '#EEEEEE'
        },
        {
          opacity: 1.0,
          backgroundColor: '#FFFFFF'
        }
      ], 500)
    },

    // 弹层关闭动画
    popupCloseAnimate() {
      this.animate('.wall', [{
          opacity: 1.0,
          backgroundColor: '#FFFFFF'
        },
        {
          opacity: 0.6,
          backgroundColor: '#EEEEEE'
        },
        {
          opacity: 0.3,
          backgroundColor: '#DDDDDD'
        },
        {
          opacity: 0,
          backgroundColor: '#CCCCCC'
        }
      ], 500)
    },

    textareaInput(e) {
      console.log(e)
      const length = e.detail.value.length
      this.setData({
        currentLength: length
      })

    },

    chooseImg(e) {
      const that = this
      wx.chooseImage({
        count: 1,
        success(res) {
          that.setData({
            img: res.tempFilePaths[0]
          })
        },
        fail(err) {
          console.log('选择失败', err)
        } 
      })
    },

    submit(e) {
      const obj = {
        name: e.detail.value.name,
        introduce: e.detail.value.introduce,
        img: this.data.img
      }
      this.closePopup()
      this.triggerEvent("itemChange", obj)

    },

  }
})