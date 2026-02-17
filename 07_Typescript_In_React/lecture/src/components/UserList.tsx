import type { User, ComponentsStatus } from '../types';
import { usersArray } from '../data';
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState<User[] | null>(null);
    const [status, setStatus] = useState<ComponentsStatus>("idle");

    useEffect(() => {
        setStatus("loading");
        const fetchUsers = async() => {
            setUsers(usersArray)
            setStatus("success")
        }
        fetchUsers();
    }, [])
  return (
    <div className='flex flex-col w-full max-w-md p-4 bg-neutral rounded shadow-lg text-white mt-4'>
        <h2 className='text-md font-bold'>Users List</h2>
        <ul>
             {status === "loading"? <p className='text-lg font-bold'>Loading...</p> : users?.map((user) => <li className="text-sm list-disc ml-4" key={user.id}>{user.username}</li>)}
        </ul>
       
    </div>

  );
}

export default UserList;
