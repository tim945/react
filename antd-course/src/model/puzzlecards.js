/*
 * @Author: tim
 * @Date: 2020-04-09 10:41:14
 * @LastEditors: tim
 * @LastEditTime: 2020-04-16 18:28:07
 * @Description: 
 */
import request from '../util/request'; 

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    cardList: [
      { id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: 'What happens to a frog\'s car when it breaks down?',
        punchline: 'It gets toad away',
      },
    ],
    counter: 2
  },
  // 异步
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      // const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/random_joke';
      const endPointURI = '/dev/random_joke';
      console.log(_, sagaEffects, arguments)

      const puzzle = yield call(request, endPointURI);
      debugger
      console.log('---------', puzzle)
      yield put({ type: 'addNewCard', payload: puzzle });

      // yield call(delay, 3000);

      // const puzzle2 = yield call(request, endPointURI);
      // yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  // 同步  
  reducers: {
    addNewCard(state, { payload: newCard }) {
    // addNewCard(state, { data: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.cardList.concat(newCardWithId);
      // 返回值必须是一个新构造对象，绝不能把旧 state 的引用返回
      return {
        cardList: nextData,
        counter: nextCounter,
      };
    },
    delCard(state, { payload: id }) {      
      const cardList = state.cardList.filter(v => v.id != id)
      return {
        cardList,
        counter: state.counter
      }
    }    
  }
};