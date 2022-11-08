const mongoose = require("mongoose")

const ethereumAddressSchema = new mongoose.Schema({
    address: {
        type:String,
    },    
    blockNumber:{
        type:Number
    },
    blockTimeStamp:{
        type:Number
    },
    transactionHash:{
        type:String
    },
    transactionIndex:{
        type:String
    }
})

ethereumAddressSchema.index({address:1,blockNumber:-1,transactionIndex:-1})
module.exports = mongoose.connection.useDb("address").model("ethereum", ethereumAddressSchema)