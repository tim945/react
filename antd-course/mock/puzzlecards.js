/*
 * @Author: tim
 * @Date: 2020-04-10 10:58:33
 * @LastEditors: tim
 * @LastEditTime: 2020-04-16 18:21:48
 * @Description: 
 */

const random_jokes = [
  {
    setup: 'What is the object oriented way to get wealthy ?',
      punchline: 'Inheritance',
  },
  {
    setup: 'To understand what recursion is...',
    punchline: "You must first understand what recursion is",
  },
  {
    setup: 'What do you call a factory that sells passable products?',
    punchline: 'A satisfactory',
  },
];

let random_joke_call_count = 0;

export default {
  'get /dev/random_joke': function (req, res) {
    const responseObj = random_jokes[random_joke_call_count % random_jokes.length];
    random_joke_call_count += 1;
    setTimeout(() => {
      res.json(responseObj);

      // 模拟 http 请求出错
      // res.status(500);
      // res.json({});

    }, 3000);
  },
};
