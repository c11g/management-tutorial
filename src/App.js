import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
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
    job: '한량',
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
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Profile</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Job</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        { customers.map(customer => <Customer key={customer.id} {...customer} />) }
      </TableBody>
    </Table>
      
  )
}

export default App;
