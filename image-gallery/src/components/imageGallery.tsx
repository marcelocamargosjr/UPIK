import React, { useState } from "react";
import Image from "next/image";

const ImageGallery: React.FC = () => {
  const [likes, setLikes] = useState<number[]>(Array(10).fill(0));

  const handleLikeClick = (index: number) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center"
          >
            <Image
              src={`https://placehold.co/400x400.png?text=Image+${
                index + 1
              }\nHello+World`}
              alt={`Image ${index + 1}`}
              width={400}
              height={400}
            />
            <div className="flex justify-between items-center w-full mt-2">
              <span>{likes[index]} curtidas</span>
              <button
                onClick={() => handleLikeClick(index)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Curtir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
