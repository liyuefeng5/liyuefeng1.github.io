//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[
      { 'apple':'苹果', 'id':'1'},
      { 'apple': '香蕉', 'id':'2'},
      { 'apple': '梨', 'id':'3'},
      { 'apple': '头部', 'id':'4'},
      { 'apple': '底部', 'id':'5'}
    ],
    animationData:{},
    animating:'',
    taName:'',
    shoufenqinName:'',
    animationShoufenqin:'',
    shoufenqinBloo:'',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
  onShow: function(){
   

  },
  //   点击左划
  del(e){
    var cid = e.currentTarget.dataset.cid;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animationHua = animation;
    if (this.data.animating) {
      this.animationHua.translate(0, 0).step();
      this.setData({
        animationData: this.animationHua.export(),
        animating:''
      });
    } else {
      this.animationHua.translate(-100, 0).step();
      this.setData({
        animationData: this.animationHua.export(),
        animating: cid,
        taName:cid,
      });
    }
  },
  alllist(){ 
    if (this.data.animating) {
      this.animationHua.translate(0, 0).step();
      this.setData({
        animationData: this.animationHua.export(),
        animating: ''
      });
    }
  },
  //手风琴    ---------------------------------------
  shoufenqin(e){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    });
    this.animationShou = animation;
    this.animationHua = animation;
    this.animationHua.translate(0, 0).step();
    this.setData({
      animationData: this.animationHua.export(),
      animating:''
    });

    var listid=e.currentTarget.dataset.listid;
    if(this.data.shoufenqinBloo){
      this.animationShou.height(0).step();
      this.setData({
        animationShoufenqin:this.animationShou.export(),
        shoufenqinBloo:'',
      })
    }else{
      this.animationShou.height('auto').step();
      this.setData({
        animationShoufenqin:this.animationShou.export(),
        shoufenqinBloo:listid,
        shoufenqinName:listid,
      })
    }
  }
})
