import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        productId : {
            Type : mongoose.Schema.Types.ObjectId,
            ref : "Product"
        },
        quantity : {
            Type : Number,
            required : true
        }
    }
)

const orderSchema = new mongoose.Schema(
    {

        orderPrice : {
            Type : Number,
            required : true
        },
        customer : {
            Type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        orderItems : {
            Type : [orderItemSchema]
        },
        address : {
            Type : String,
            required : true
        },
        status : {
            Type : String,
            enum : ["PENDING", "CANCELLED", "DELIVERED"],
            default : "PENDING"
        }

    },
    {
        timestamps : true
    }
)

export const Order = mongoose.model("Order", orderSchema)