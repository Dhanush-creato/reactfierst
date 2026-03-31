import { useState, useEffect } from "react";





function UserData() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/user")
      .then((response) => response.json())

      .then((users) => setUsers(users))
      .catch((error) => console.log(error));


  }, [])
  // console.log(users)
  // for (let i = 0; i < users.length; i++) {
  //   console.log("users", users[i].name);
  // }
  // users.map((user) => {
  //   console.log(user.name);
  // });


  return (<div>
    <table class="table">
      <thead>

        <tr>
          <th scope="col">id</th>
          <th scope="col">Full Name</th>
          <th scope="col">User Name</th>
          <th scope="col">Email</th>
          <th scope="col">phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((data) =>   //{} no function body () no return body 


          <tr key={data.id}>

            <th scope="row">{data.id}</th>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.email}</td>
            <td>{data.phone}</td>
          </tr>

        )

        }
      </tbody>
    </table>
  </div>)
}

export default UserData;