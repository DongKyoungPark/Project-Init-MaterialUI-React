import {
  // 광고주
  FETCH_GET_NEWS_FEED_ADVERTISER,
  // 마케터
  FETCH_GET_GOOGLE_CSV_DOWNLOAD,
  FETCH_GET_ADS,
  // FETCH_SELECT_ADS,
  FETCH_SELECT_ACCOUNT_ID,
  FETCH_GET_HORIZONTAL_CHART,
  FETCH_GET_CAMPAIGN,
  FETCH_GET_SELECT_CAMPAIGN,
  FETCH_GET_CAMPAIGN_LINE_CHART,
  FETCH_GET_CAMPAIGN_CANDLE_CHART,
  FETCH_GET_CAMPAIGN_PURCHASE_FLOW_CHART,
  FETCH_GET_CAMPAIGN_ADS_SET_TABLE,
  FETCH_GET_CAMPAIGN_ADS_SET_DROPDOWN_TABLE,
  FETCH_GET_CAMPAIGN_AD_TABLE,
  FETCH_GET_CAMPAIGN_AD_DROPDOWN_TABLE,
  FETCH_GET_CAMPAIGN_AGE_CHART,
  FETCH_GET_CAMPAIGN_GENDER_CHART,
  FETCH_GET_CAMPAIGN_AGE_GENDER_CHART,
  FETCH_GET_CAMPAIGN_LOCATION_MAP,
  FETCH_GET_NEWS_FEED,
  FETCH_GET_AD_SEND,
  FETCH_GET_MY_ADS,
} from '../../Constants/Ads/AdsType.js';

import * as api from '../../../Api/index';

// 광고주
export const fetchGetNewsFeedAdvertiser = localToken => async dispatch => {
  try {
    await api.getNewsFeedAdvertiser(localToken).then(res => {
      // console.log('🚀 - fetchGetNewsFeedAdvertiser : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_NEWS_FEED_ADVERTISER, payload: res.data.newsfeed });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

// 마케터
export const fetchGoogleCSVDownload = localToken => async dispatch => {
  try {
    await api.googleCSVDownload(localToken).then(res => {
      // console.log('🚀 - fetchGoogleCSVDownload : res \n ', res);
      dispatch({
        type: FETCH_GET_GOOGLE_CSV_DOWNLOAD,
        payload: {
          CustomerData: res.data.CustomerData,
          CampaignData: res.data.CampaignData,
          AdGroupData: res.data.AdGroupData,
          AdGroupAdData: res.data.AdGroupAdData,
          KeywordViewData: res.data.KeywordViewData,
          SearchTermViewData: res.data.SearchTermViewData,
          GeographicViewData: res.data.GeographicViewData,
          DynamicAdsSearchViewData: res.data.DynamicAdsSearchViewData,
          ShoppingPerformanceViewData: res.data.ShoppingPerformanceViewData,
          ProductGroupViewData: res.data.ProductGroupViewData,
          BiddingStrategyData: res.data.BiddingStrategyData,
          AudienceViewData: res.data.AudienceViewData,
        },
      });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetAdAccountsDetail = localToken => async dispatch => {
  try {
    await api.getAdAccountsDetail(localToken).then(res => {
      // console.log('🚀 - fetchGetAdAccountsDetail : res \n ', res);
      dispatch({
        type: FETCH_GET_ADS,
        payload: { adAccountDetails: res.data.ad_account_details, facebookLoginInfo: res.data.facebook, googleLoginInfo: res.data.google },
      });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchSaveFacebook = (localToken, facebookUrlToken, facebookExist) => async dispatch => {
  try {
    await api.saveFacebook(localToken, facebookUrlToken, facebookExist).then(res => {
      // console.log('🚀 - fetchSaveFacebook : res \n ', res);
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchSaveGoogle = (localToken, googleUrlToken, googleExist) => async dispatch => {
  try {
    await api.saveGoogle(localToken, googleUrlToken, googleExist).then(res => {
      // console.log('🚀 - fetchSaveGoogle : res \n ', res);
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchSelectAccountId = (accountId, userId) => async dispatch => {
  try {
    await dispatch({ type: FETCH_SELECT_ACCOUNT_ID, payload: accountId, userId });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchSelectCampaign = (localToken, accountId, startDate, endDate) => async dispatch => {
  try {
    await api.getSelectCampaign(localToken, accountId, startDate, endDate).then(res => {
      // console.log('🚀 - getSelectCampaign : res \n ', res.data);
      dispatch({ type: FETCH_GET_SELECT_CAMPAIGN, payload: res.data.campaign_details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignHorizontalChart = (localToken, accountId, userId) => async dispatch => {
  try {
    await api.getCampaignHorizontalChart(localToken, accountId, userId).then(res => {
      // console.log('🚀 - getCampaignHorizontalChart : res.data \n ', res.data.graphDetails);
      dispatch({
        type: FETCH_GET_HORIZONTAL_CHART,
        payload: { totalSpend: res.data.graphDetails[0].spend, percentage: res.data.graphDetails[0].top_perc },
      });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignKPI = (localToken, accountId, campaignId, userId, startDate, endDate, language) => async dispatch => {
  try {
    await api.getCampaignKPI(localToken, accountId, campaignId, userId, startDate, endDate, language).then(res => {
      // console.log('🚀 - fetchGetCampaignKPI : res \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN, payload: { reportDetails: res.data.reportDetails } });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignLineChart = (localToken, campaignId, card, period, startDate, endDate, language) => async dispatch => {
  try {
    await api.getCampaignLineChart(localToken, campaignId, card, period, startDate, endDate, language).then(res => {
      // console.log('🚀 - getCampaignLineChart : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN_LINE_CHART, payload: res.data.graphDetails });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignCandleChart = (localToken, campaignId, card, period, startDate, endDate, language) => async dispatch => {
  try {
    await api.getCampaignCandleChart(localToken, campaignId, card, period, startDate, endDate, language).then(res => {
      // console.log('🚀 - getCampaignCandleChart : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN_CANDLE_CHART, payload: res.data.graphDetails });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignPurchaseFlowChart = (localToken, campaignId, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignPurchaseFlowChart(localToken, campaignId, startDate, endDate).then(res => {
      // console.log('🚀 - getCampaignPurchaseFlowChart : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN_PURCHASE_FLOW_CHART, payload: res.data.graphDetails });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignAdsSetTable = (localToken, campaignIds, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignAdsSetTable(localToken, campaignIds, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignAdsSetTable : res.data \n ', res.data.adset_table_Details);
      dispatch({ type: FETCH_GET_CAMPAIGN_ADS_SET_TABLE, payload: res.data.adset_table_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignAdsSetDropdownTable = (localToken, campaignIds, selAdSetName, selAdSetId, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignAdsSetDropdownTable(localToken, campaignIds, selAdSetName, selAdSetId, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignAdsSetDropdownTable : res.data \n ', res.data.adsetdropdown_table_Details);
      dispatch({ type: FETCH_GET_CAMPAIGN_ADS_SET_DROPDOWN_TABLE, payload: res.data.adsetdropdown_table_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignAdTable = (localToken, campaignIds, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignAdTable(localToken, campaignIds, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignAdTable : res.data \n ', res.data.ad_table_Details);
      dispatch({ type: FETCH_GET_CAMPAIGN_AD_TABLE, payload: res.data.ad_table_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignAdDropdownTable = (localToken, campaignIds, selAdSetName, selAdSetId, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignAdDropdownTable(localToken, campaignIds, selAdSetName, selAdSetId, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignAdDropdownTable : res.data \n ', res.data.addropdown_table_Details);
      dispatch({ type: FETCH_GET_CAMPAIGN_AD_DROPDOWN_TABLE, payload: res.data.addropdown_table_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignAgeChart = (localToken, campaignIds, selection, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignAgeChart(localToken, campaignIds, selection, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignAgeChart : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN_AGE_CHART, payload: res.data.age_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignGenderChart = (localToken, campaignIds, selection, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignGenderChart(localToken, campaignIds, selection, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignGenderChart : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN_GENDER_CHART, payload: res.data.gender_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignAgeGenderChart = (localToken, campaignIds, selection, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignAgeGenderChart(localToken, campaignIds, selection, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignAgeGenderChart : res.data \n ', res.data.gender_age_Details);
      dispatch({ type: FETCH_GET_CAMPAIGN_AGE_GENDER_CHART, payload: res.data.gender_age_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetCampaignLocation = (localToken, campaignIds, selection, startDate, endDate) => async dispatch => {
  try {
    await api.getCampaignLocationMap(localToken, campaignIds, selection, startDate, endDate).then(res => {
      // console.log('🚀 - fetchGetCampaignLocation : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_CAMPAIGN_LOCATION_MAP, payload: res.data.locationmap_Details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetNewsFeed = localToken => async dispatch => {
  try {
    await api.getNewsFeed(localToken).then(res => {
      // console.log('🚀 - fetchGetNewsFeed : res.data \n ', res.data.newsfeed_details);
      dispatch({ type: FETCH_GET_NEWS_FEED, payload: res.data.newsfeed_details });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetAdSend = (localToken, sort, channel) => async dispatch => {
  try {
    await api.getAdSend(localToken, sort, channel).then(res => {
      // console.log('🚀 - fetchGetAdSend : res.data \n ', res.data);
      dispatch({ type: FETCH_GET_AD_SEND, payload: { adSendInfo: res.data.marketerInformation, showAdvertisements: res.data.showAdvertisements } });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};

export const fetchGetMyAds = localToken => async dispatch => {
  try {
    await api.getMyAds(localToken).then(res => {
      // console.log('🚀 - fetchGetMyAds : res.data \n ', res.data.my_advertisements);
      dispatch({ type: FETCH_GET_MY_ADS, payload: res.data.my_advertisements });
    });
  } catch (error) {
    // console.log('🚀 - error.message \n ', error.message);
  }
};
