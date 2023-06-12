import React, {useEffect, useState} from "react";

const Header = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
      async function getAllUsers() {
        try {
          const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
  
      getAllUsers();
    }, []);
    return (
        <>
            <h1>Header</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.email}</li>
                ))}
             </ul>

        </>
    )
}

export default Header