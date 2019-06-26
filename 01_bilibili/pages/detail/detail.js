// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 视频详情
    videoinfo: {
      "id": 0,
      "author": "牧草君1",
      "videoTitle": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
      "playCount": "24.9万",
      "commentCount": "1345",
      "videoSrc": "http://files.ak48.xyz/2018120195458.mp4",
      "date": "12-15"
      },
    // 推荐视频
    otherList: [
      {
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "title": "世界上最小的网站！小到只有0.4KB，你信么！【暗物质#1】",
      "duration": "00:06:28",
      "commentCount": "·556",
      "playMsg": "20.6"
      },
      {
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "title": "世界上最小的网站！小到只有0.4KB，你信么！【暗物质#1】",
      "duration": "00:06:28",
      "commentCount": "·556",
      "playMsg": "20.6"
      },
      {
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "title": "世界上最小的网站！小到只有0.4KB，你信么！【暗物质#1】",
      "duration": "00:06:28",
      "commentCount": "·556",
      "playMsg": "20.6"
      },
      {
      "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@480w_300h.webp",
      "title": "世界上最小的网站！小到只有0.4KB，你信么！【暗物质#1】",
      "duration": "00:06:28",
      "commentCount": "·556",
      "playMsg": "20.6"
      }
    ],
    // 视频评论
    commentData:{
      "commentTotalCount": "454",
      "commentList": [
        {
          "userIconSrc": "https://i2.hdslb.com/bfs/face/fe81d93c5beb92557474f48551d3b4966eadeeef.jpg@60w_60h.webp",
          "username": "风道大雨",
          "commentInfo": "什么！居然不是某些网站的澳门皇家赌场？",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i2.hdslb.com/bfs/face/fe81d93c5beb92557474f48551d3b4966eadeeef.jpg@60w_60h.webp",
          "username": "风道大雨",
          "commentInfo": "什么！居然不是某些网站的澳门皇家赌场？",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i2.hdslb.com/bfs/face/fe81d93c5beb92557474f48551d3b4966eadeeef.jpg@60w_60h.webp",
          "username": "风道大雨",
          "commentInfo": "什么！居然不是某些网站的澳门皇家赌场？",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i2.hdslb.com/bfs/face/fe81d93c5beb92557474f48551d3b4966eadeeef.jpg@60w_60h.webp",
          "username": "风道大雨",
          "commentInfo": "什么！居然不是某些网站的澳门皇家赌场？",
          "commentDate": "12-15"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    // let videoID= options.id;
    // getCurrentVideo(videoID)
  },

  // 获取视频详情ID对应的视频信息
  // getCurrentVideo(videoID){
  //   let that=this
  //   wx.request({
  //     url:""+videoID,
  //     success(res){
  //       if(res.data.code===0){
  //         that.setData({
  //           videoinfo:res.data.data.videoinfo
  //         })
  //       }
  //     }
  //   })
  // },
  

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