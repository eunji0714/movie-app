import React, {useEffect, useState} from 'react';
import axios from "axios";

const Newslist = () => {

    const [news, setNews] = useState([])

    const getNews = async () =>{
        try{
            const result = await axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-06-16&sortBy=publishedAt&apiKey=f1c87e2bb86248de9f9492e513f93e1f")
            console.log(result.data.articles)
            setNews(result.data.articles)
        } catch (err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        getNews()
    }, [])

    return (
        <div>
            <h1>news</h1>
            <h1>{news.length}</h1>
            {news && news.map(n => (
                <div>
                    <h1>{n.title}</h1>
                    <h3>{n.content}</h3>
                    <h2>{n.author ? n.author : "작가없음"}</h2>
                </div>
            ))}
        </div>
    );
};

export default Newslist;