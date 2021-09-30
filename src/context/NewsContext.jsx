import { createContext, useState, useEffect } from "react";
import newsList from "../components/Home/newsList";
import { v4 as uuidv4 } from "uuid";

export const NewsContext = createContext();

export const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState(newsList);
  const [selectedNewsId, setSelectedNewsId] = useState()

  const selectedNewsinfo = news.find(news => news.id ===  selectedNewsId)


  const handleNewsAdd = () => {
    const newNews = {
      id: uuidv4(),
      title: 'New News Title',
      text: 'New News Text',
      type: 'general',
      published: false
    }
    setNews([...news, newNews])
  }

  const handleNewsDelete = (id) =>{
    setNews(news.filter(news=> news.id !== id))
  }

  const handleNewsSelect = (id) => {
    setSelectedNewsId(id)
  }

  const handleNewsChange = (id, njuz) => {
    const newNews = [...news]
    const index = newNews.findIndex(x => x.id === id)
    newNews[index] = njuz
    setNews(newNews)
  }

  useEffect(() => {
    const data = localStorage.getItem("my-news");
    if (data) {
      setNews(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-news", JSON.stringify(news));
  });

  const newsContextValue = {
    news,
    setNews,
    handleNewsAdd,
    handleNewsDelete,
    handleNewsSelect,
    selectedNewsinfo,
    handleNewsChange
  }

  return (
    <NewsContext.Provider value={newsContextValue}>
      {children}
    </NewsContext.Provider>
  );
};
