import { combineReducers } from 'redux';

import SideBarReducer from '../Redux/Reducers/SideBar/SideBarReducer';
import UserReducer from '../Redux/Reducers/Users/UserReducer';
import AdsReducer from '../Redux/Reducers/Ads/AdsReducer';
import UploadItemReducer from '../Redux/Reducers/UploadItem/UploadItemReducer';

const rootReducer = combineReducers({
  sideBar: SideBarReducer,
  users: UserReducer,
  ads: AdsReducer,
  upload: UploadItemReducer,
});

export default rootReducer;
