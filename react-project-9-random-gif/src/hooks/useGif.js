import { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";


const useGif = (tag) => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const errImg = 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTViZXBza2dpbjkyeDNrb2MzeTlmOWE1ZDlheGkyZDdoMjNoZnc3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiN0L7EW5trfOvEk0/giphy.gif'

    const [gif, setGif] = useState("");
    const [loading, setLoading] = useState(false);

    async function getGifUrl() {

        setLoading(true);

        try {
            const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imgSrc = data.data.images.downsized_large.url;
            setGif(imgSrc);
        }
        catch (err){
            setGif(errImg);
            console.log(err);
            console.log(err.response);
            console.log(gif);
        }
        
        setLoading(false);
    }

    useEffect(() => {
        getGifUrl();
    }, [])

    return ({ gif, loading, getGifUrl });


}

export default useGif