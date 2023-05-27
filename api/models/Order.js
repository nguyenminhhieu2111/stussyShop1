const mongoos=require("mongoose")
const OrderSchema = new mongoos.Schema(
    {
        userId:{type:String,required:true},
        products:[
            {
                productsId:{
                    type:String
                },
                nameProduct:{
                    type:String
                },
                img:{
                     type:String
                },
                quantum:{
                    type:Number,
                    default:1,
                },
                price:{
                    type:String
                },
                total:{
                    type:String
                },
                size:{
                    type:String
                }
            }
        ],
       
       total:{type:Number,required:true},
       status:{type:String,default:"pending"},
       quantity:{type:Number,
        default:1,}
       

    },{timestamps:true}
);
module.exports=mongoos.model("Order",OrderSchema)