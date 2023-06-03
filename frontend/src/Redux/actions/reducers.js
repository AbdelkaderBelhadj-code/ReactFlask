// Actions
export const uploadImage = (formData) => {
    return {
      type: 'UPLOAD_IMAGE',
      payload: formData
    }
  }
  
  export const getImages = () => {
    return {
      type: 'GET_IMAGES'
    } 
  }
  
  export const setImages = (images) => {
    return {
      type: 'SET_IMAGES',
      payload: images
    }
  }
  
  // Reducer
  const initialState = {
    uploading: false,
    images: []
  };
  
  function imageReducer(state = initialState, action) {
    switch (action.type) {
      case 'UPLOAD_IMAGE':
        return {
          ...state,
          uploading: true
        };
      case 'GET_IMAGES':
        return {
          ...state,
          uploading: false
        };
      case 'SET_IMAGES':
        return {
          ...state,
          images: action.payload
        };
      default:
        return state;
    } 
  }
  
  export default imageReducer;