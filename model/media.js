import mongoose from "mongoose";


const mediaSchema = new mongoose.Schema({
    id: String,
    title: String,
    img: [
        {
        img: String
    }]
})

const Movies = mongoose.model('series', mediaSchema)

export default Movies