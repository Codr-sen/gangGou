// pages/project/project.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arrayCategory: ['全部类别', '类别1', '类别2', '类别3'],
    objectArrayCategory: [
      {
        id: 0,
        name: '全部类别'
      },
      {
        id: 1,
        name: '类别1'
      },
      {
        id: 2,
        name: '类别2'
      },
      {
        id: 3,
        name: '类别3'
      }
    ],
    indexCategory: 0,

    arraySchedule: ['全部进度', '进度2', '进度3', '进度4'],
    objectArraySchedule: [
      {
        id: 0,
        name: '全部进度'
      },
      {
        id: 1,
        name: '进度2'
      },
      {
        id: 2,
        name: '进度3'
      },
      {
        id: 3,
        name: '进度4'
      }
    ],
    indexSchedule: 0,
    arrayScale: ['全部规模', '规模2', '规模3', '规模4'],
    objectArrayScale: [
      {
        id: 0,
        name: '全部规模'
      },
      {
        id: 1,
        name: '规模2'
      },
      {
        id: 2,
        name: '规模3'
      },
      {
        id: 3,
        name: '规模4'
      }
    ],
    indexScale: 0,
    arraySort: ['智能排序', '最新', '最热', '排序'],
    objectArraySort: [
      {
        id: 0,
        name: '智能排序'
      },
      {
        id: 1,
        name: '最新'
      },
      {
        id: 2,
        name: '最热'
      },
      {
        id: 3,
        name: '排序'
      }
    ],
    indexSort: 0,

    region: ['广东省', '广州市'],
    customItem: '全部',
  arrayProject:[
    
      {
        id: 1,
        title: '正在进行的项目aaa',
        address:'河南省新乡市红旗区',
        Category: '全部类别',
        Schedule:'正在进行时',
        introduction:'此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
        Scale: '规模不大不小',
        Contacts: '张先生',
        conNumber: '15137311953'
      },
      {
        id: 2,
        title: '正在进行的项目bb',
        address: '河南省新乡市红旗区',
        Category: '全部类别',
        Schedule: '正在进行时',
        introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
        Scale: '规模不大不小',
        Contacts: '张先生',
        conNumber: '15137311953'
      }, {
        id: 3,
        title: '正在进行的项目ccc',
        address: '河南省新乡市红旗区',
        Category: '全部类别',
        Schedule: '正在进行时',
        introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
        Scale: '规模不大不小',
        Contacts: '张先生',
        conNumber: '15137311953'
    }, {
      id: 4,
      title: '正在进行的项目444',
      address: '河南省新乡市红旗区',
      Category: '全部类别',
      Schedule: '正在进行时',
      introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
      Scale: '规模不大不小',
      Contacts: '张先生',
      conNumber: '15137311953'
    },
    {
      id: 5,
      title: '正在进行的项目55555',
      address: '河南省新乡市红旗区',
      Category: '全部类别',
      Schedule: '正在进行时',
      introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
      Scale: '规模不大不小',
      Contacts: '张先生',
      conNumber: '15137311953'
    }, {
      id: 6,
      title: '正在进行的项目66666',
      address: '河南省新乡市红旗区',
      Category: '全部类别',
      Schedule: '正在进行时',
      introduction: '此项目是一个微信小程序项目，主要功能是展示关于钢构方面的信息',
      Scale: '规模不大不小',
      Contacts: '张先生',
      conNumber: '15137311953'
    }
    
  ]
  },
  bindPickerChangeCategory: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexCategory: e.detail.value
    })
  },
  bindPickerChangeSchedule: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexSchedule: e.detail.value
    })
  },
  bindPickerChangeScale: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexScale: e.detail.value
    })
  },
  bindPickerChangeSort: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexSort: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})




// Page({
//   data: {
//     array: ['美国', '中国', '巴西', '日本'],
//     objectArray: [
//       {
//         id: 0,
//         name: '美国'
//       },
//       {
//         id: 1,
//         name: '中国'
//       },
//       {
//         id: 2,
//         name: '巴西'
//       },
//       {
//         id: 3,
//         name: '日本'
//       }
//     ],
//     index: 0,
//     multiArray: [['无脊柱动物', '脊柱动物'], ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'], ['猪肉绦虫', '吸血虫']],
//     objectMultiArray: [
//       [
//         {
//           id: 0,
//           name: '无脊柱动物'
//         },
//         {
//           id: 1,
//           name: '脊柱动物'
//         }
//       ], [
//         {
//           id: 0,
//           name: '扁性动物'
//         },
//         {
//           id: 1,
//           name: '线形动物'
//         },
//         {
//           id: 2,
//           name: '环节动物'
//         },
//         {
//           id: 3,
//           name: '软体动物'
//         },
//         {
//           id: 3,
//           name: '节肢动物'
//         }
//       ], [
//         {
//           id: 0,
//           name: '猪肉绦虫'
//         },
//         {
//           id: 1,
//           name: '吸血虫'
//         }
//       ]
//     ],
//     multiIndex: [0, 0, 0],
//     date: '2016-09-01',
//     time: '12:01',
//     region: ['广东省', '广州市'],
//     customItem: '全部'
//   },
//   bindPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       index: e.detail.value
//     })
//   },
//   bindMultiPickerChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       multiIndex: e.detail.value
//     })
//   },
//   bindMultiPickerColumnChange: function (e) {
//     console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
//     var data = {
//       multiArray: this.data.multiArray,
//       multiIndex: this.data.multiIndex
//     };
//     data.multiIndex[e.detail.column] = e.detail.value;
//     switch (e.detail.column) {
//       case 0:
//         switch (data.multiIndex[0]) {
//           case 0:
//             data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
//             data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
//             break;
//           case 1:
//             data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
//             data.multiArray[2] = ['鲫鱼', '带鱼'];
//             break;
//         }
//         data.multiIndex[1] = 0;
//         data.multiIndex[2] = 0;
//         break;
//       case 1:
//         switch (data.multiIndex[0]) {
//           case 0:
//             switch (data.multiIndex[1]) {
//               case 0:
//                 data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
//                 break;
//               case 1:
//                 data.multiArray[2] = ['蛔虫'];
//                 break;
//               case 2:
//                 data.multiArray[2] = ['蚂蚁', '蚂蟥'];
//                 break;
//               case 3:
//                 data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
//                 break;
//               case 4:
//                 data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
//                 break;
//             }
//             break;
//           case 1:
//             switch (data.multiIndex[1]) {
//               case 0:
//                 data.multiArray[2] = ['鲫鱼', '带鱼'];
//                 break;
//               case 1:
//                 data.multiArray[2] = ['青蛙', '娃娃鱼'];
//                 break;
//               case 2:
//                 data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
//                 break;
//             }
//             break;
//         }
//         data.multiIndex[2] = 0;
//         console.log(data.multiIndex);
//         break;
//     }
//     this.setData(data);
//   },
//   bindDateChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       date: e.detail.value
//     })
//   },
//   bindTimeChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       time: e.detail.value
//     })
//   },
//   bindRegionChange: function (e) {
//     console.log('picker发送选择改变，携带值为', e.detail.value)
//     this.setData({
//       region: e.detail.value
//     })
//   }
// })