import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true); // Start loading
      try {
        const channelData = await fetchFromAPI(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(channelData?.items[0] || null); // Safely access items

        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet,id&order=date`
        );
        setVideos(videosData?.items || []); // Default to empty array if no items
      } catch (err) {
        setError(err); // Capture any errors
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchResults();
  }, [id]);

  if (loading) return <CircularProgress />; // Loading spinner

  if (error)
    return <Typography color="error">Error: {error.message}</Typography>; // Error message

  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          sx={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
