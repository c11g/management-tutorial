import { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import Customer from './components/Customer';
import style from './App.module.css';

const App = () => {
  const [customers, setCustomer] = useState([]);
  useEffect(() => {
    callApi()
      .then(res => setCustomer(res))
      .catch(err => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch('/api/customers');
    return response.json();
  }

  return (
    <div className={style.root}>
      <Table className={style.table}>
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
          { customers.length > 1
            ? customers.map(customer => <Customer key={customer.id} {...customer} />)
            : console.log("empty")
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default App;
