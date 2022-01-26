import { FETCH_UPLOAD_IMAGE, FETCH_UPLOAD_VIDEO, FETCH_UPLOAD_SEARCH, FETCH_UPLOAD_FAIL } from '../../Constants/UploadItem/UploadItemType';

const initialState = {
  userName: '',
  userEmail: '',
  image: [],
  video: '',
  search: [],
  error: '',
};

const UploadItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPLOAD_IMAGE:
      return {
        ...state,
        userName: action.payload,
        userEmail: action.payload,
        image: action.payload,
        error: '',
      };

    case FETCH_UPLOAD_VIDEO:
      return {
        userName: action.payload,
        userEmail: action.payload,
        video: action.payload,
        error: '',
      };

    case FETCH_UPLOAD_SEARCH:
      return {
        userName: action.payload,
        userEmail: action.payload,
        search: action.payload,
        error: '',
      };

    case FETCH_UPLOAD_FAIL:
      return {
        userName: '',
        userEmail: '',
        error: action.payload,
      };

    default:
      return state;
  }
};

export default UploadItemReducer;
