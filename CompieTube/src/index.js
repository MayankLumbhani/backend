import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config(); 

connectDb()

.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runnung on port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!! ", err)
})