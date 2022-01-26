import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../../Constants/SideBar/SideBarType';

export const sideBarOpen = open => ({ type: SIDEBAR_OPEN, payload: open });
export const sideBarClose = close => ({ type: SIDEBAR_CLOSE, payload: close });
