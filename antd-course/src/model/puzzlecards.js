/*
 * @Author: tim
 * @Date: 2020-04-09 10:41:14
 * @LastEditors: tim
 * @LastEditTime: 2020-04-09 18:17:08
 * @Description: 
 */

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
  reducers: {
    addNewCard(state, { payload: newCard }) {
    // addNewCard(state, { data: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.cardList.concat(newCardWithId);
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
  },
};