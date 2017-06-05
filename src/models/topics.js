import * as Topics from '../services/topics';
export default {
  namespace: 'topics',
  state: {
    data: [],
  },
  reducers: {
    save(state, action) {
      console.log(action)
      console.log(state)
      console.log({...state, ...action.payload})
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
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const { data } = yield call(Topics.query);
      if (data.success === true) {
        yield put({
          type: 'save',
          payload:{data: data.data}
        });
      }
    },
  }
};
