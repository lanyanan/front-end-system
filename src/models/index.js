
export default {

  namespace: 'home',

  state: {
     secondChildren: 0,
     showIndex:0,
     secondChildrenShow:0
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      console.log(payload)
    },
  },

  reducers: {
    save(state, action) {
      return Object.assign({},state, {secondChildren:action.secondChildren});
    },
    changesildBar(state, action) {
      return Object.assign({}, state, {showIndex:action.showIndex})
    },
    changeSecondSildBar(state, action) {
      return Object.assign({}, state, {secondChildren:action.secondChildren})
    }
  },

};
