export function Greating({ name, lastname }) {
  function add(x, y) {
    return x + y;
  }
  const user = {
    firstName: "Jhoss",
    lastName: "Pedraza",
  };
  return (
    <div>
      <h1>Hello world says {name}</h1>
      <h1>and the lastname of that asshole is {lastname}</h1>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
      <h2>{add(10, 30)}</h2>
    </div>
  );
}

export function UserCard({name, amount, married, address}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "maried" : "single"}</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.street}</li>
      </ul>
    </div>
  );
}
