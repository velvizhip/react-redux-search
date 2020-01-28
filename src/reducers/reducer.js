import {SEARCH} from '../actions/actions';
import CustomerList from '../components/helper'

const data = CustomerList();
const initialState = {customerList: data, value: '', filterData: []};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    // case SEARCH: {      
    //   return { ...state};      
    // }
    case 'RESULT_RECEIVED': {
      console.log('result', action);
      return {...state, value: action.value, filterData: action.filterData};
    }
    default:
      return state;
  }
}
export default rootReducer;