import { all, takeEvery } from 'redux-saga/effects';
import { actionTypes } from './action';
import datas from './reducer'

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.PRODUCT_SLUG_VARIENT,datas)]);

}
