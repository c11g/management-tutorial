import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/customers', (req, res) => {
  res.send([{
    "id": 1,
    "image": "https://placeimg.com/64/64/1",
    "name": "홍길동",
    "birthday": "961222",
    "gender": "남자",
    "job": "대학생"
  }, {
    "id": 2,
    "image": "https://placeimg.com/64/64/2",
    "name": "이몽룡",
    "birthday": "880910",
    "gender": "남자",
    "job": "한량"
  }, {
    "id": 3,
    "image": "https://placeimg.com/64/64/3",
    "name": "성춘향",
    "birthday": "840329",
    "gender": "여자",
    "job": "주부"
  }]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
