import React, { useState } from 'react'
import './Users.css';

function Users(props) {
  const [users, setUsers] = useState(props.users);

  const deleteUser = () => {
        setUsers({
          names: users.names.slice(0, users.names.length-1),
          ages: users.ages.slice(0, users.ages.length-1)
        }) 
  }
  return (
    <div className='usersContainer'>
        <div className='listContainer'>
            <div className='usersList'>
                <span className='listHeader'>Users</span>
                <ul>
                  {
                    users.names.map((user, index) => <li key={index}><span className='listItem' />{user}</li>)
                  }
                  
                </ul>
            </div>
            <div className='usersList'>
                <span className='listHeader'>Ages</span>
                <ul>
                  {
                    users.ages.map((age, index) => <li key={index}>{age}</li>)
                  }
                  
                </ul>
            </div>
            
        </div>
        <button className='deleteBtn' onClick={deleteUser}>Delete User</button>
    </div>
  )
}

Users.defaultProps = {
  users: {
    names: [],
    ages: []
  }
}

export default Users;