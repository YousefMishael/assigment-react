import React, { useState } from 'react'
import './Users.css';

function Users(props) {
  const [users, setUsers] = useState(props.users);

  const deleteUser = () => {
      if (users.length>0){
        setUsers(users.slice(0, users.length-1))
      }
  }
  // console.log(users)
  return (
    <div className='usersContainer'>
        <div className='listContainer'>
            <div className='usersList'>
                <span className='listHeader'>Users</span>
                <ul>
                  {
                    users.map((user, index) => <li key={index}><span className='listItem' />{user.name.title} {user.name.first} {user.name.last}</li>)
                  }
                  
                </ul>
            </div>
            <div className='usersList'>
                <span className='listHeader'>Ages</span>
                <ul>
                  {
                    users.map((user, index) => <li key={index}>{user.dob.age}</li>)
                  }
                  
                </ul>
            </div>
            
        </div>
        <button className='deleteBtn' onClick={deleteUser}>Delete User</button>
    </div>
  )
}

Users.defaultProps = {
  users: []
}

export default Users;