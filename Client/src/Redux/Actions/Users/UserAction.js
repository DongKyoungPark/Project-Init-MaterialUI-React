import {
  // Advertiser
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
  FETCH_MY_REVENUE,
  FETCH_MY_RANKING,
  FETCH_QNA,
  FETCH_MARKETER_DETAILS,
  FETCH_BUSINESS_DETAILS,
} from '../../Constants/Users/UserType';

import * as api from '../../../Api/index';

// API:광고주 UserAction
export const fetchGetMySettingsAdvertiser = localToken => async dispatch => {
  try {
    await api.getMySettingsAdvertiser(localToken).then(res => {
      // console.log('🚀 - fetchGetMySettingsAdvertiser : res.data \n ', res);
      dispatch({ type: FETCH_ADVERTISER_STATE, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetCreateAdAdvertiser = localToken => async dispatch => {
  try {
    await api.fetchCreateAdAdvertiser(localToken).then(res => {
      // console.log('🚀 - fetchGetCreateAdAdvertiser : res.data \n ', res);
      dispatch({ type: FETCH_GET_CREATE_AD, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetFacebookBusinessIdsAdvertiser = localToken => async dispatch => {
  try {
    await api.getFacebookBusinessIdsAdvertiser(localToken).then(res => {
      // console.log('🚀 - fetchGetFacebookBusinessIdsAdvertiser : res.data \n ', res);
      dispatch({ type: FETCH_FACEBOOK_BUSINESS_INFO, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetFacebookPageAdvertiser = (localToken, businessId) => async dispatch => {
  try {
    await api.getFacebookPageAdvertiser(localToken, businessId).then(res => {
      // console.log('🚀 - fetchGetFacebookPageAdvertiser : res.data \n ', res);
      dispatch({ type: FETCH_FACEBOOK_PAGE_INFO, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetPaymentHistoryAdvertiser = localToken => async dispatch => {
  try {
    await api.paymentHistoryAdvertiser(localToken).then(res => {
      // console.log('🚀 - fetchGetPaymentHistoryAdvertiser : res.data \n ', res);
      dispatch({ type: FETCH_ADVERTISER_PAYMENT_HISTORY, payload: res.data.transaction_list });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

// API:마케터 UserAction
export const fetchGetMySettings = localToken => async dispatch => {
  try {
    await api.getMySettings(localToken).then(res => {
      // console.log('🚀 - fetchGetMySetting : res.data \n ', res);
      dispatch({ type: FETCH_USER_STATE, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetMarketerDetails = localToken => async dispatch => {
  try {
    await api.getMarketerDetails(localToken).then(res => {
      // console.log('🚀 - fetchGetMarketerDetails : res.data \n ', res);
      dispatch({ type: FETCH_MARKETER_DETAILS, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetBusinessDetails = localToken => async dispatch => {
  try {
    await api.getBusinessDetails(localToken).then(res => {
      // console.log('🚀 - fetchGetBusinessDetails : res.data \n ', res);
      dispatch({ type: FETCH_BUSINESS_DETAILS, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchChangeMySettings =
  (localToken, oldPwd, newPwd, bankName, bankAccount, bankHolder, business, sales, newsLetter) => async dispatch => {
    try {
      await api.setMySettings(localToken, oldPwd, newPwd, bankName, bankAccount, bankHolder, business, sales, newsLetter).then(res => {
        // console.log('🚀 - fetchChangeMySettings : res.data \n ', res);
        dispatch({ type: FETCH_USER_STATE, payload: res.data });
      });
    } catch (error) {
      // console.log(error.message);
    }
  };

export const fetchGetPersonalInfo = localToken => async dispatch => {
  try {
    await api.getPersonalInfo(localToken).then(res => {
      // console.log('🚀 - fetchGetPersonalInfo : res.data \n ', res);
      dispatch({ type: FETCH_USER_PERSONAL_INFO, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchUserGoogleLogIn = user => async dispatch => {
  try {
    const userData = user?.profileObj;
    const token = user?.accessToken;

    // Dev
    window.location.href = `https://marketersv.madeplatforms.com:8100/google/login`;

    // window.open(
    //   `https://marketersv.madeplatforms.com:8100/google/login`,
    //   'windowPop',
    //   'width=600, height=720, left=400, top=400, resizable = yes, scrollbars=no, location=no',
    // );

    // public
    // window.location.href = `https://lighthouse-report.com:5443/google/login`;

    dispatch({ type: FETCH_USER_GOOGLE_LOGIN, payload: { userData, token } });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchUserFacebookLogIn = user => async dispatch => {
  try {
    const userData = {
      email: user?.email,
      id: user?.id,
      name: user?.name,
      imageUrl: user?.picture?.data?.url,
      facebookId: user?.userId,
    };
    const token = user?.accessToken;

    // Dev
    window.location.href = `https://marketersv.madeplatforms.com:8100/facebook/login`;
    // window.open(
    //   `https://marketersv.madeplatforms.com:8100/facebook/login`,
    //   'windowPop',
    //   'width=600, height=720, left=400, top=400, resizable=yes, scrollbars=no, location=no',
    // );

    // public
    // window.location.href = `https://lighthouse-report.com:5443/facebook/login`;

    dispatch({ type: FETCH_USER_FACEBOOK_LOGIN, payload: { userData, token } });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchUserNaverLogin = localToken => async dispatch => {
  try {
    await api.saveNaver(localToken).then(res => {
      // console.log('🚀 - fetchUserNaverLogin : res \n ', res);
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetSocialAccount = localToken => async dispatch => {
  try {
    await api.getSocialAccount(localToken).then(res => {
      // console.log('🚀 - fetchGetSocialAccount : res \n ', res);
      dispatch({ type: FETCH_GET_SOCIAL_ACCOUNT, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchUserLogOut = () => async dispatch => {
  try {
    dispatch({ type: FETCH_USER_LOGOUT });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchResetPassword = (email, password) => async dispatch => {
  try {
    await api.resetPassword(email, password).then(res => {
      // console.log('🚀 - fetchResetPassword : res.data \n ', res);
      // dispatch({ type: FETCH_RESET_PASSWORD, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchQNA = (localToken, qnaType, qnaTitle, qnaDesc) => async dispatch => {
  try {
    await api.qna(localToken, qnaType, qnaTitle, qnaDesc).then(res => {
      // console.log('🚀 - fetchQNA : res.data \n ', res);
      dispatch({ type: FETCH_QNA, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetUserRevenue = localToken => async dispatch => {
  try {
    await api.getUserRevenue(localToken).then(res => {
      // console.log('🚀 - fetchGetUserRevenue : res.data \n ', res);
      dispatch({ type: FETCH_MY_REVENUE, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};

export const fetchGetUserRanking = localToken => async dispatch => {
  try {
    await api.getUserRanking(localToken).then(res => {
      // console.log('🚀 - fetchGetUserRanking : res.data \n ', res);
      dispatch({ type: FETCH_MY_RANKING, payload: res.data });
    });
  } catch (error) {
    // console.log(error.message);
  }
};
