// import { FETCH_UPLOAD_IMAGE, FETCH_UPLOAD_VIDEO, FETCH_UPLOAD_SEARCH, FETCH_UPLOAD_FAIL } from '../../Constants/UploadItem/UploadItemType';

import * as api from '../../../Api/index';
// import axios from 'axios';

export const fetchUploadImage = (token, image) => async dispatch => {
  try {
    await api.uploadItem(token, image).then(res => {
      // console.log(res.data);
    });
    // await axios({
    //   method: 'post',
    //   url: 'http://52.141.58.31:5000/upload',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: `Bearer ${token}`,
    //   },
    //   data: {
    //     image,
    //   },
    // }).then((res) => {
    //   dispatch({ type: FETCH_UPLOAD_IMAGE, payload: res.data });
    // console.log(res.data);
    // });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchUploadVideo = (token, video) => async dispatch => {
  try {
    await api.uploadItem(token, video).then(res => {
      // console.log(res);
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchUploadSearch = (token, search) => async dispatch => {
  try {
    await api.uploadItem(token, search).then(res => {
      // console.log(res);
    });
  } catch (error) {
    // console.log(error.message);
  }
};
