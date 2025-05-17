const mongoose=require('mongoose')

async function connecttomongodb(url){
    return mongoose.connect(url)
}
module.exports={
    connecttomongodb,
}
