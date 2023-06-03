import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { uploadImage, getImages, setImages } from '../actions/imageActions';
import axios from 'axios';

function ImageUpload({ uploadImage, getImages, setImages, image }) {
  const [file, setFile] = useState('');

  useEffect(() => {
    getImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    uploadImage(formData);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const { uploading, images } = image;
  
  axios.get('/images')
    .then(res => {
      setImages(res.data.images);
    })
    .catch(err => console.log(err));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {images.map(image => (
        <div key={image}>
          <img src={`/images/${image}`} alt={image} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  image: state.image
});

const mapDispatchToProps = {
  uploadImage, 
  getImages,
  setImages
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);