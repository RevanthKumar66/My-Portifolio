import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.warn("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

let cached = (global as unknown as { mongoose: MongooseCache | undefined }).mongoose;

if (!cached) {
    cached = (global as unknown as { mongoose: MongooseCache }).mongoose = { conn: null, promise: null };
}

const mongooseCache = cached;

async function dbConnect() {
    if (!MONGODB_URI) return null;

    if (mongooseCache.conn) {
        return mongooseCache.conn;
    }

    if (!mongooseCache.promise) {
        const opts = {
            bufferCommands: false,
        };

        mongooseCache.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    mongooseCache.conn = await mongooseCache.promise;
    return mongooseCache.conn;
}

export default dbConnect;
