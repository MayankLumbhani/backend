import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name : {
            Type : String,
            required : true
        },
        description : {
            Type : String,
            required : true
        },
        productImage : {
            Type : String,
            required : true
        },
        price : {
            Type : Number,
            default : 0,
        },
        stock : {
            Type : Number,
            default : true
        },
        category : {
            Type : mongoose.Schema.Types.ObjectId,
            ref : "Category",
            required : true
        },
        owner : {
            Type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {
        timestamps : true
    }
)

export const Product = mongoose.model("Product",productSchema)