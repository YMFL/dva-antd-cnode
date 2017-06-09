import * as Topics from '../services/topics';
import isEmptyObject from '../utils/utils';
export default {
  namespace: 'topics',
  state: {
    data: [],
    item:'all',
    loading:false
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload};
    },
  },
  subscriptions: {
    setup({ dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/app' || pathname === '/') {
          dispatch({type: 'fetch', payload: query});
        }
      });
    }
  },
  effects: {
    *fetch({ payload:values }, { call, put,select }) {  // eslint-disable-line
      const state = yield select(state => state);
      if(values.tab){
        yield put({
          type: 'save',
          payload:{item: values.tab,loading:true}
        });
        const {data}= yield call(Topics.query,values);
        if (data.success === true) {
          yield put({
            type: 'save',
            payload:{data: data.data,loading:false}
          });
        }
      }else {
        if(isEmptyObject(state.topics.data)){
          const {data}= yield call(Topics.query,values);
          if (data.success === true) {
            yield put({
              type: 'save',
              payload:{data: data.data,loading:false}
            });
          }
        }else{
          yield put({
            type: 'save',
            payload:{loading:false}
          });
        }
      }
    },
  }
};
