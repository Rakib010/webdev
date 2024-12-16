import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { data: news } = useLoaderData();
 /*  console.log(news); */

  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <h1 className="text-sm text-gray-400">
        {news.length} Found in this category
      </h1>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews.title} news={singleNews}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
