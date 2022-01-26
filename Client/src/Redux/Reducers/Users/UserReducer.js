import {
  //Advertiser
  FETCH_ADVERTISER_STATE,
  FETCH_GET_CREATE_AD,
  FETCH_FACEBOOK_BUSINESS_INFO,
  FETCH_FACEBOOK_PAGE_INFO,
  FETCH_ADVERTISER_PAYMENT_HISTORY,

  //Marketer
  FETCH_USER_STATE,
  FETCH_USER_PERSONAL_INFO,
  FETCH_USER_GOOGLE_LOGIN,
  FETCH_USER_FACEBOOK_LOGIN,
  FETCH_GET_SOCIAL_ACCOUNT,
  FETCH_USER_LOGOUT,
  FETCH_RESET_PASSWORD,
  FETCH_QNA,
  FETCH_MY_REVENUE,
  FETCH_MY_RANKING,
  FETCH_MARKETER_DETAILS,
  FETCH_BUSINESS_DETAILS,
} from '../../Constants/Users/UserType';

const initialState = {
  // Advertiser
  advertiserState: [],
  businessDetailsAdvertiser: [],
  createAd: [],
  facebookBusinessInfo: [],
  facebookPageInfo: [],
  advertiserPaymentHistory: [],

  // Marketer
  userState: [],
  userData: [],
  userPersonalInfo: [],
  userRevenue: [],
  userRanking: [],
  marketerDetails: [],
  businessDetails: [],
  facebookToken: '',
  googleToken: '',
  checkSocialAccount: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    // Advertiser
    case FETCH_ADVERTISER_STATE:
      return {
        ...state,
        advertiserState: action.payload,
      };

    case FETCH_GET_CREATE_AD:
      return {
        ...state,
        createAd: action.payload,
      };

    case FETCH_FACEBOOK_BUSINESS_INFO:
      return {
        ...state,
        facebookBusinessInfo: action.payload,
      };

    case FETCH_FACEBOOK_PAGE_INFO:
      return {
        ...state,
        facebookPageInfo: action.payload,
      };

    case FETCH_ADVERTISER_PAYMENT_HISTORY:
      return {
        ...state,
        advertiserPaymentHistory: action.payload,
      };

    // Marketer
    case FETCH_USER_STATE:
      return {
        ...state,
        userState: action.payload,
      };

    case FETCH_USER_PERSONAL_INFO:
      return {
        ...state,
        userPersonalInfo: action.payload,
      };

    case FETCH_USER_GOOGLE_LOGIN:
      sessionStorage.setItem('googleToken', JSON.stringify(action.payload.token));
      localStorage.setItem('googleProfile', JSON.stringify({ ...action?.payload.userData }));
      return {
        ...state,
        googleToken: action.payload.token,
        userData: action.payload.userData,
      };

    case FETCH_USER_FACEBOOK_LOGIN:
      sessionStorage.setItem('facebookToken', JSON.stringify(action.payload.token));
      localStorage.setItem('facebookProfile', JSON.stringify({ ...action?.payload.userData }));
      return {
        ...state,
        facebookToken: action.payload.token,
        userData: action.payload.userData,
      };

    case FETCH_GET_SOCIAL_ACCOUNT:
      return {
        ...state,
        checkSocialAccount: action.payload,
      };

    case FETCH_USER_LOGOUT:
      return {
        ...state,
        userData: null,
      };

    case FETCH_MY_REVENUE:
      return {
        ...state,
        userRevenue: action.payload,
      };

    case FETCH_MY_RANKING:
      return {
        ...state,
        userRanking: action.payload,
      };

    case FETCH_MARKETER_DETAILS:
      return {
        ...state,
        marketerDetails: action.payload,
      };

    case FETCH_BUSINESS_DETAILS:
      return {
        ...state,
        businessDetails: action.payload,
      };

    case FETCH_RESET_PASSWORD:
    case FETCH_QNA:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default UserReducer;
