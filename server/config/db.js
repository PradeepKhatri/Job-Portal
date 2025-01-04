import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'job-portal'
        });
        console.log('Database Connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

    process.env.MONGODB_URI = 'mongodb://localhost:27017/job-portal';


export default connectDB