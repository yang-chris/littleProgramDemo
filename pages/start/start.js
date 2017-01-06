
var allData=require('../../data/data.js');
Page({
    data: {
        
    },
    onLoad: function (options) {
        console.log(allData.getDataList.banner);
        this.setData({
            allDataList:allData.getDataList
        })
    }
})