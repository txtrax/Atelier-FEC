require('dotenv').config();
const axios = require('axios');

const options = {
  url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/',
  headers: {
    Authorization: process.env.TOKEN,
  },
};

module.exports.getQuestions = (id, cb) => {
  axios.get(`${options.url}qa/questions?product_id=${id}&count=100`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting questions info: ', err);
    });
};

module.exports.postQuestion = (params, cb) => {
  axios.post(`${options.url}qa/questions`, params, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when posting question: ', err);
    });
};

module.exports.getAnswers = (qid, cb) => {
  axios.get(`${options.url}qa/questions/${qid}/answers`, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when getting questions info: ', err);
    });
};

module.exports.putHelpfulAnswers = (answerId, cb) => {
  axios.put(`${options.url}qa/answers/${answerId}/helpful`, {}, { headers: options.headers })
    .then((result) => {
      cb(result);
    })
    .catch((err) => {
      console.log('Error when putting helpfulness: ', err);
    });
};

// module.exports.postQuestion = (qid, cb) => {
//   axios.post(`${options.url}qa/questions`, { headers: options.headers })
//     .then((result) => {
//       cb(result);
//     })
//     .catch((err) => {
//       console.log('Error when posting question: ', err);
//     });
// };
