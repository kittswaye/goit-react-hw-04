import { useState } from 'react'
import { getImagesByTopic } from "./images-api.js";
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

function App() {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setError(false);
      setLoading(true);
      const data = await getImagesByTopic(topic);
      setImages(data.data.results);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      <LoadMoreBtn />
    </>
  )
}

export default App
