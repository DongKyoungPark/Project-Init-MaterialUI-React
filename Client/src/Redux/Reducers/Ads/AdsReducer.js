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

const initialState = {
  // 광고주
  newsFeedAdvertiser: [],

  // 마케터
  // Google CSV Data
  CustomerData: [],
  CampaignData: [],
  AdGroupData: [],
  AdGroupAdData: [],
  KeywordViewData: [],
  SearchTermViewData: [],
  GeographicViewData: [],
  DynamicAdsSearchViewData: [],
  ShoppingPerformanceViewData: [],
  ProductGroupViewData: [],
  BiddingStrategyData: [],
  AudienceViewData: [],

  // Campaign, Ads Data
  adsData: [],
  campaignData: [],
  campaignSelect: [],
  campaignLineChart: [],
  campaignCandleChart: [],
  campaignPurchaseFlowChart: [],
  campaignAdsSetTable: [],
  campaignAdsSetDropdownTable: [],
  campaignAdTable: [],
  campaignAdDropdownTable: [],
  campaignAgeChart: [],
  campaignGenderChart: [],
  campaignAgeGenderChart: [],
  campaignLocation: [],

  // Account Data
  facebookLoginInfo: [],
  googleLoginInfo: [],
  accountId: '',
  userId: '',
  totalSpend: 0,
  percentage: 0,

  // News Feed
  newsFeed: [],

  // Ad Send
  adSendInfo: [],
  adSend: [],

  // My Ad
  myAd: [],
};

const AdsReducer = (state = initialState, action) => {
  switch (action.type) {
    // 광고주
    case FETCH_GET_NEWS_FEED_ADVERTISER:
      return {
        ...state,
        newsFeedAdvertiser: action.payload,
      };

    // 마케터
    case FETCH_GET_GOOGLE_CSV_DOWNLOAD:
      return {
        ...state,
        CustomerData: action.payload.CustomerData,
        CampaignData: action.payload.CampaignData,
        AdGroupData: action.payload.AdGroupData,
        AdGroupAdData: action.payload.AdGroupAdData,
        KeywordViewData: action.payload.KeywordViewData,
        SearchTermViewData: action.payload.SearchTermViewData,
        GeographicViewData: action.payload.GeographicViewData,
        DynamicAdsSearchViewData: action.payload.DynamicAdsSearchViewData,
        ShoppingPerformanceViewData: action.payload.ShoppingPerformanceViewData,
        ProductGroupViewData: action.payload.ProductGroupViewData,
        BiddingStrategyData: action.payload.BiddingStrategyData,
        AudienceViewData: action.payload.AudienceViewData,
      };

    case FETCH_GET_ADS:
      return {
        ...state,
        adsData: action.payload.adAccountDetails,
        facebookLoginInfo: action.payload.facebookLoginInfo,
        googleLoginInfo: action.payload.googleLoginInfo,
      };

    case FETCH_SELECT_ACCOUNT_ID:
      return {
        ...state,
        accountId: action.payload.accountId,
        userId: action.payload.userId,
      };

    case FETCH_GET_HORIZONTAL_CHART:
      return {
        ...state,
        totalSpend: action.payload.totalSpend,
        percentage: action.payload.percentage,
      };

    case FETCH_GET_CAMPAIGN:
      return {
        ...state,
        campaignData: action.payload.reportDetails,
      };

    case FETCH_GET_SELECT_CAMPAIGN:
      return {
        ...state,
        campaignSelect: action.payload,
      };

    case FETCH_GET_CAMPAIGN_LINE_CHART:
      return {
        ...state,
        campaignLineChart: action.payload,
      };

    case FETCH_GET_CAMPAIGN_CANDLE_CHART:
      return {
        ...state,
        campaignCandleChart: action.payload,
      };

    case FETCH_GET_CAMPAIGN_PURCHASE_FLOW_CHART:
      return {
        ...state,
        campaignPurchaseFlowChart: action.payload,
      };

    case FETCH_GET_CAMPAIGN_ADS_SET_TABLE:
      return {
        ...state,
        campaignAdsSetTable: action.payload,
      };

    case FETCH_GET_CAMPAIGN_ADS_SET_DROPDOWN_TABLE:
      return {
        ...state,
        campaignAdsSetDropdownTable: action.payload,
      };

    case FETCH_GET_CAMPAIGN_AD_TABLE:
      return {
        ...state,
        campaignAdTable: action.payload,
      };

    case FETCH_GET_CAMPAIGN_AD_DROPDOWN_TABLE:
      return {
        ...state,
        campaignAdDropdownTable: action.payload,
      };

    case FETCH_GET_CAMPAIGN_AGE_CHART:
      return {
        ...state,
        campaignAgeChart: action.payload,
      };

    case FETCH_GET_CAMPAIGN_GENDER_CHART:
      return {
        ...state,
        campaignGenderChart: action.payload,
      };

    case FETCH_GET_CAMPAIGN_AGE_GENDER_CHART:
      return {
        ...state,
        campaignAgeGenderChart: action.payload,
      };

    case FETCH_GET_CAMPAIGN_LOCATION_MAP:
      return {
        ...state,
        campaignLocation: action.payload,
      };

    case FETCH_GET_NEWS_FEED:
      return {
        ...state,
        newsFeed: action.payload,
      };

    case FETCH_GET_AD_SEND:
      return {
        ...state,
        adSendInfo: action.payload.adSendInfo,
        adSend: action.payload.showAdvertisements,
      };

    case FETCH_GET_MY_ADS:
      return {
        ...state,
        myAd: action.payload,
      };

    default:
      return state;
  }
};

export default AdsReducer;
