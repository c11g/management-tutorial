import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '961222',
    gender: '남자',
    job: '대학생',
  }, {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '이몽룡',
    birthday: '880910',
    gender: '남자',
    job: '대학생',
  }, {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '성춘향',
    birthday: '840329',
    gender: '여자',
    job: '주부',
  }
]

const App = () => {  
  return (
    <div>
      {
        customers.map(customer => <Customer key={customer.id} {...customer} />)
      }
    </div>
      
  )
}

export default App;
