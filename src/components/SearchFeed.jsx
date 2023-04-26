import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { fetchAPI } from '../utils/fetchAPI';


const SearchFeed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for: <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
        </Typography>

        <Videos videos={videos}></Videos>
      </Box>
  )
}

export default SearchFeed