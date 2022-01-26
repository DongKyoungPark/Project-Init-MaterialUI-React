import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../../Constants/SideBar/SideBarType';

const initialState = {
  open: false,
};

const SideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return {
        ...state,
        open: action.payload,
      };

    case SIDEBAR_CLOSE:
      return {
        ...state,
        open: action.payload,
      };

    default:
      return state;
  }
};

export default SideBarReducer;
