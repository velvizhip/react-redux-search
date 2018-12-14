import {SEARCH} from '../actions/actions';
import CustomerList from '../components/helper'

const data = CustomerList();
const initialState = {customerList: data, value: '', filterData: []};

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH: {      
      const {value} = action;
      console.log("action", {value}, state);
      const filterData = state.customerList.filter(record => 
      {
        return Object.keys(record).some(key => record[key].toString().search(value) !== -1);
      });
      console.log("filterData", {...state, value, filterData});
      return {...state, value, filterData};
    }
    default:
      return state;
  }
}
export default rootReducer;