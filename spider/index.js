// const https = require('https');
// const fs = require('fs');
// const path = require('path');
const request = require('request')
const cheerid = require('cheerio')
// const url = 'https://umall.vip.qq.com/v2/?adtag=share&_wv=1025&_wvx=10&_wwv=4&path=/home&hasRedDot=false&query=adtag2%253Dfl_zp&_nav_alpha=0#/home?adtag2=fl_zp';
const url ='https://umall.vip.qq.com/v2/?adtag=share&_wv=1025&_wvx=10&_wwv=4&path=/product/38715&hasRedDot=false&query=adtag2%253Dsy_goodsjxtjV5&_nav_alpha=0#/product/38715?adtag2=sy_goodsjxtjV5'
// const imageDir = './images/'
request(url,(err,res)=>{
    if(!err){
        console.log(res.body)
    }
})