const Customer = (props) => {
  const {id, image, name, birthday, gender, job} = props;

  return (
    <div>
      <CustomerProfile id={id} image={image} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
}

const CustomerProfile = (props) => {
  const {id, image, name} = props;

  return (
    <div>
      <img src={image} alt="" />
      <strong>{name}({id})</strong>
    </div>
  );
}

const CustomerInfo = (props) => {
  const {birthday, gender, job} = props;

  return (
    <div>
      <span>{birthday}</span>
      <span>{gender}</span>
      <span>{job}</span>
    </div>
  );
}

export default Customer;