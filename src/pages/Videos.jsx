import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import axios from "axios";

export default function Videos() {
  const { keyword } = useParams();
  const temp = useQuery(["videos", keyword], async () => {
    const data = await axios
      .get(`/videos/${keyword ? "search" : "popular"}.json`)
      .then((res) => res.data.items);
    console.log("🚀 --------------🚀");
    console.log("🚀 ~ data", data);
    console.log("🚀 --------------🚀");

    return data;
  });

  // axios
  //   .get(`/videos/${keyword ? "search" : "popular"}.json`)
  //   .then((res) => console.log(res.data.items));

  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : "🔥"}</div>
      {temp.isLoading && <p>Loading...</p>}

      {temp.error && <p>Something is wrong 😖</p>}
      {temp.videos && (
        <ul>
          {temp.videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
