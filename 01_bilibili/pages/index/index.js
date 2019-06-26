//index.js
//获取应用实例
const app = getApp()

//Page Object
Page({
  // 被点击的首页导航菜单的索引
  data: {
    currentIndexNav:0,
    // 首页导航数据
    navList:['首页','动画','番剧','国创','音乐','舞蹈','科技','游戏','娱乐','鬼畜'],
    navLunbos:[
      'https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp',
      'https://i0.hdslb.com/bfs/archive/8860d7a57a9b1992c112ee56a35444cfc445108b.jpg@480w_300h.webp',
      'https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_300h.webp',
      'https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_300h.webp'
    ],
    videoList:[
      {"id": 0,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 1,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 2,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 3,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 4,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 5,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 6,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 7,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 8,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {"id": 9,
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
    ]
  },
  // 点击首页导航按钮
  activeNav(e){
    this.setData({
      currentIndexNav:e.currentTarget.dataset.index
    })
    console.log(this.data.currentIndexNav)
  },

  // 获取首页导航数据
  getNavList(){
    // 利用小程序内置发送请求方法
    // wx.request({
    //   url:"https://easy-mock.com/mock/5c1dfg98e8bfa547414a5278/bili/navList",
    //   success(res){
    //     console.log(res)
    //   }
    // })
  },

  //options(Object)
  // 生命周期函数--监听页面加载
  onLoad: function(options){
    // 1.获取首页导航数据
    // this.getNavList();
  },
  // 监听页面初次渲染完成
  onReady: function(){
    
  },
  // 监听页面显示
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});
