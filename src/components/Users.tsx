import { useState } from 'react';

interface User {
  uid: string;
  name: string;
}

const Users = () => {
  const [user, setUser] = useState<User>();

  const login = () => {
    setUser({
      uid: 'ABC123',
      name: 'Fernando Herrera',
    });
  };

  return (
    <div className='mt-4'>
      <h3>User:</h3>

      <button className='btn btn-outline-primary mt-2' onClick={login}>
        Login
      </button>
      {!user ? (
        <pre className='mt-1'>No hay usuario</pre>
      ) : (
        <pre>{JSON.stringify(user)}</pre>
      )}
    </div>
  );
};

export default Users;
