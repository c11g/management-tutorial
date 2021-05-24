import {TableRow, TableCell} from '@material-ui/core';

const Customer = (props) => {
  const {id, image, name, birthday, gender, job} = props;

  return (
    <TableRow>
      <CustomerProfile id={id} image={image} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </TableRow>
  );
}

const CustomerProfile = (props) => {
  const {id, image, name} = props;

  return (
    <>
      <TableCell>{id}</TableCell>
      <TableCell><img src={image} alt="" /></TableCell>
      <TableCell><strong>{name}</strong></TableCell>
    </>
  );
}

const CustomerInfo = (props) => {
  const {birthday, gender, job} = props;

  return (
    <>
      <TableCell>{birthday}</TableCell>
      <TableCell>{gender}</TableCell>
      <TableCell>{job}</TableCell>
    </>
  );
}

export default Customer;