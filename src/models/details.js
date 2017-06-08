import * as Topics from '../services/topics';
export default {
  namespace: 'details',
  state: {
    data:{},
    loading:false
  },

  subscriptions: {
    setup({ dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname.substring(0,7)==='/topic/') {
          dispatch({type: 'fetch', payload: pathname});
        }
      });
    }
  },

  effects: {
    *fetch({ payload:values}, { call, put }) {  // eslint-disable-line
      yield put({
        type: 'save',
        payload:{loading:true}
      });
      const {data}= yield call(Topics.details,values);
      if (data.success === true) {
        yield put({
          type: 'save',
          payload:{data:data.data,loading:false}
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
