import mongoose from "mongoose";

const connectDB = async (DATABASE_URL)=>{
    try {
        const DBoption = {
            dbName : 'school',
        };
        await mongoose.connect(DATABASE_URL,DBoption)
        console.log('Conneted successfully');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB