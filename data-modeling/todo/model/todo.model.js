import mongoose from "mongoose";
import { subTodo } from "./sub-todo.model";

const todoSchema = newmongoose.model(
    {

        content : {
            type : String,
            required : true
        },
        complete : {
            type : Boolean,
            default : false
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        },
        subTodos : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "subTodo"
            }
        ]

    },
    {
        timestamps : true
    }
)

export const todo = mongoose.model('Todo',todoSchema);