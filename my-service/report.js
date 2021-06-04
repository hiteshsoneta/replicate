const {add}= require('/opt/common/add')
const moment=require('moment')
const _ = require("lodash");
const report=()=>{
 let time=moment().utcOffset(5.5).format("hh:mm a")

 let b= add(4,5)
 let c=[
    {
        name:"abcd",
        city:"xx"
    },
    {
        name:"efgh",
        city:"xx"
    },
    {
        name:"abcd",
        city:"xy"
    }
]
let d= _.groupBy(c,'city')

 console.log('time===',time,'b===',b,"d===",d)




}
exports.handler = report;
//func()