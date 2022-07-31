import express from 'express'
import Movies from '../model/media.js'

const getMovies = async (req,res)=>{
    try{
        const movie = await Movies.find({})
        console.log(movie)
        res.json(movie)
    } catch(err){
        console.log(err, "routes")
    }
}
const router = express.Router()

router.get('/movie', getMovies)

export default router