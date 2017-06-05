import * as Topics from '../services/topics';
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
    *fetch({ payload:values }, { call, put }) {  // eslint-disable-line
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
    },
  }
};
