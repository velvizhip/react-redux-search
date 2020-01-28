import {SEARCH} from '../constants/action_constants';
import { put, takeLatest } from 'redux-saga/effects';

import CustomerList from '../components/helper'

const data = CustomerList();
const initialState = {customerList: data, value: '', filterData: []};

function* searchData(action){
  const {value} = action;
  const filterData = initialState.customerList.filter(record => 
  {
    return Object.keys(record).some(key => record[key].toString().search(value) !== -1);
  });
  yield put({ type: "RESULT_RECEIVED", filterData, value});
}
export default function* search() {
  yield takeLatest(SEARCH, searchData)
}