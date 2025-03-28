import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [detailData, setDetailData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/destinasi/${id}`
        );
        setDetailData(response.data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!detailData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>{detailData.name}</h1>
      <img
        src={`/imagesDestinations/${detailData.images[0]}`}
        alt={detailData.name}
        style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }}
      />
      <p>{detailData.description}</p>
    </div>
  );
};

export default Details;
