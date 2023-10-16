import React from "react";

const ChapterVideo = ({ videoIds, url }) => {
  const videoIdsArray = Array.isArray(videoIds) ? videoIds : [];

  return (
    <>
    <div>
      <p className="text-center text-2xl sm:text-4xl font-semibold w-screen pt-20 uppercase">
        {url}
      </p>
    </div>
      <div className="main-container w-full flex flex-col  md:grid md:grid-cols-2 m-5 mx-auto space-y-7 justify-center items-center mt-12">
        {videoIdsArray.length === 0 ? (
          <p className="text-center w-screen mt-11 text-gray-500">
            No videos are available at the moment. We will update the videos
            soon.
          </p>
        ) : (
          videoIdsArray.map((videoId, index) => (
            <div
              key={index}
              className="container w-full h-fit flex justify-center items-center"
            >
              <div className="video-container h-[320px] flex justify-center items-start relative rounded-xl w-[420px] bg-gray-200 p-2 shadow-md hover:shadow-lg cursor-pointer">
                <iframe
                  className="rounded-2xl"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allowFullScreen
                  preload="auto"
                ></iframe>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ChapterVideo;
