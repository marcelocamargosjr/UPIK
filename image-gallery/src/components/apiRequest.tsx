import { useEffect, useState } from "react";

interface Image {
  id: number;
  url: string;
}

interface LikeUpdate {
  imageId: number;
  likes: number;
}

interface ApiError {
  message: string;
}

async function fetchImages(
  apiEndpoint: string,
  token: string
): Promise<Image[]> {
  try {
    const response = await fetch(apiEndpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    return await response.json();
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error fetching images:", err.message);
      throw err;
    } else {
      console.error("Unknown error:", err);
      throw new Error("Unknown error occurred");
    }
  }
}

async function incrementLike(
  apiEndpoint: string,
  token: string,
  imageId: number
): Promise<LikeUpdate> {
  try {
    const response = await fetch(`${apiEndpoint}/likes/${imageId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to increment like");
    }

    return await response.json();
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error incrementing like:", err.message);
      throw err;
    } else {
      console.error("Unknown error:", err);
      throw new Error("Unknown error occurred");
    }
  }
}

function useApiRequest(apiEndpoint: string, token: string) {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const fetchedImages = await fetchImages(
          `${apiEndpoint}/api/Images`,
          token
        );
        setImages(fetchedImages);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError({ message: err.message || "Unknown error" });
        } else {
          setError({ message: "Unknown error occurred" });
        }
        setLoading(false);
      }
    };

    loadData();
  }, [apiEndpoint, token]);

  return { images, isLoading, error, incrementLike };
}

export default useApiRequest;
