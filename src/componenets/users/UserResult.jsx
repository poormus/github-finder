import React from 'react'
import UserItem from './UserItem'
import { useEffect,useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import GithubContext from '../../context/github/GithubContext';

function UserResult() {

   
  
    const {users,loading,fetchUsers}=useContext(GithubContext)
    
    // useEffect(() => {
    //   fetchUsers();
    // }, []);
  
    
  

    if (loading) {
      return (
        <div className="grid place-items-center h-screen">
          <ClipLoader color="blue" loading={true} size={150} />
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user}/>
          ))}
        </div>
      );
    }
}

export default UserResult