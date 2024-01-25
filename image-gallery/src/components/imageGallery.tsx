import React, { useState, useEffect } from "react";
import Image from "next/image";
import useApiRequest from "./apiRequest";

const ImageGallery: React.FC = () => {
  const [likesCount, setLikesCount] = useState<number[]>([]);
  const IMAGE_API_ENDPOINT = "http://localhost:5184";
  const LIKES_API_ENDPOINT = "http://localhost:3000";
  const AUTH_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.FeUFpZtaJaxhEumNP0J5ZmcWSj-lwB3TyMOT1c5HuHk";

  const { images, isLoading, error, incrementLike } = useApiRequest(
    IMAGE_API_ENDPOINT,
    AUTH_TOKEN
  );

  useEffect(() => {
    if (images) {
      setLikesCount(images.map(() => 0));
    }
  }, [images]);

  const LIKE_BUTTON_LABEL = "❤️ Click on the 'Like' button!";

  const handleLike = async (index: number, imageId: number) => {
    try {
      const response = await incrementLike(
        LIKES_API_ENDPOINT,
        AUTH_TOKEN,
        imageId
      );

      if (response) {
        const updatedLikes = [...likesCount];
        updatedLikes[index] = response.likes;
        setLikesCount(updatedLikes);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error incrementing like:", err.message);
      } else {
        console.error("Unknown error:", err);
      }
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          color: "#555",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
          }}
        >
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "1.5rem",
          color: "#D32F2F",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "#f9f9f9",
            textAlign: "center",
          }}
        >
          Error: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="bg-white p-4 shadow-md rounded-lg flex flex-col items-center"
          >
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              width={400}
              height={400}
            />
            <div className="flex justify-between items-center w-full mt-2">
              <span>
                {likesCount[index] === 0 ? (
                  LIKE_BUTTON_LABEL
                ) : (
                  <>
                    <strong>{likesCount[index]} likes</strong>
                    <small style={{ marginLeft: "8px", color: "#888" }}>
                      Total count so far
                    </small>
                  </>
                )}
              </span>
              <button
                onClick={() => handleLike(index, image.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md"
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
