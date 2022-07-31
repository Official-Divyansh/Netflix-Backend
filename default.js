import Movies from "./model/media.js";

const DefaultData = async ()=>{
    try{
        await Movies.create({
            id: '1',
            title: 'Trending',
            img: [
                { img:'https://wallpapercave.com/wp/wp1854629.png'},
            ]
        })
        console.log("data imported")
    } catch(err){
        console.log(err)
    }
}

export default DefaultData