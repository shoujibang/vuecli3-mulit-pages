import * as types from '../types';


console.log(types)
export default {
  [types.SET_USER_INFO_COOKIE](state,userInfo){

    state.userInfor = userInfo;
  }
  
 


}