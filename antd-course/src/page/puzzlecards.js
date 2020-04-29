/*
 * @Author: tim
 * @Date: 2020-04-09 09:38:46
 * @LastEditors: tim
 * @LastEditTime: 2020-04-29 11:20:42
 * @Description: 
 */
import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

const namespace = 'puzzlecards'

const mapStateToProps = (state) => {
  const cardList = state[namespace].cardList;
  return {
    cardList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewCard: (newCard) => {
      const card = {
        id: null,
        setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
        punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      };
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard || card,
        // data: newCard || card,
      };
      dispatch(action);
    },
    delCard: (id) => {
      dispatch({
        type: `${namespace}/delCard`,
        payload: id,
      });
    },
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`,
        payload: {test:'111'}
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps) 
export default class PuzzleCards extends Component {
  // constructor(props) {
  //   super(props);
  //   this.counter = 2;
  //   this.state = {
  //     cardList: [
  //       {
  //         id: 1,
  //         setup: 'Did you hear about the two silk worms in a race?',
  //         punchline: 'It ended in a tie',
  //       },
  //       {
  //         id: 2,
  //         setup: 'What happens to a frog\'s car when it breaks down?',
  //         punchline: 'It gets toad away',
  //       },
  //     ],
  //   }
  // }

  // addNewCard = () => {
  //   this.setState(prevState => {
  //     const prevCardList = prevState.cardList;
  //     this.counter += 1;
  //     const card = {
  //       id: this.counter,
  //       setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
  //       punchline: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //     };
  //     return {
  //       cardList: prevCardList.concat(card),
  //     };
  //   });
  // } 

  // delCard = (id) => {
  //   this.setState(state => {
  //     const cardList = state.cardList.filter(v => v.id != id)
  //     return {cardList}
  //   })
  // }

  componentDidMount() {
    this.props.onDidMount();
  }

  render() {
    return (
      <div>
        {
          /* this.state.cardList.map(card => { */
          this.props.cardList.map(card => {
            return (
              <Card key={card.id} type="inner" title={`Q${card.id}:` + card.setup} extra={<Button type="link" onClick={() => this.props.delCard(card.id)}>Del</Button>} style={{ marginBottom: 10 }}>
                {/* <div>Q: {card.setup}</div> */}
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        <div>
          <Button onClick={() => this.props.addNewCard(null)}> 添加卡片 </Button>
        </div>
      </div>
    );
  }
}