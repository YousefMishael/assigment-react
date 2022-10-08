import React from 'react';
import { getUsers } from './Utils/Utils';
import Users from './Components/Users/Users';
import Loading from './Components/Loading/Loading';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      users: [],
      filteredUsers: {names: [], ages: []},
      isLoading: true
    }
  }

  filterUsers = (users) => {
    if (users.length > 0 && typeof users === "object"){ //make sure users type is array
      let filteredUsers = {
        names: [],
        ages: []
      }
      // for (let i=0, z=users.length-1; i<parseInt(users.length/2); i++){//make two pointers one from start and one from end of users array
        // switch(true){
        //   case filteredUsers.includes(users[i].name.first) || filteredUsers.includes(users[i].dob.age)://check if user name or age by pointer from start were added before to scanned names and ages
        //     users.splice(i,1); //user by start pointer duplicated remove it from users array
        //     i--;//Array size changed due to remove operation, modify pointers indexes according to new array size
        //     z--;//we must modify end pointers index just when we remove items using start pointer, because the end pointers index will be modified at new loop
        //     if (filteredUsers.includes(users[z].name.first) || filteredUsers.includes(users[z].dob.age)){//due to break; we must check user name and age by pointer started from end if duplicated or not
        //       users.splice(z,1);//user by end pointer duplicated remove it from users array
        //     }else{//user not duplicated add it to scanned names
        //       filteredUsers.push(users[z].name.first);
        //       filteredUsers.push(users[z].dob.age);
        //     }
        //     break;
        //   case filteredUsers.includes(users[z].name.first) || filteredUsers.includes(users[z].dob.age):// check if user name or age by pointer started from end was added before to scanned names and ages or not
        //     users.splice(z,1);//user duplicated remove it from users array
        //     filteredUsers.push(users[i].name.first); //no need to check start pointers name and age because it was checked at first at first case
        //     filteredUsers.push(users[i].dob.age);
        //     break;
        //   case users[i].name.first === users[z].name.first || users[i].dob.age === users[z].dob.age://check if users name or age by start pointer equals to users name or age by pointer started from end (add just one to scanned names array and remove one from users array) 
        //     filteredUsers.push(users[i].name.first);
        //     filteredUsers.push(users[i].dob.age);
        //     users.splice(z,1);//remove duplicated user
        //     break;
        //   default://no duplicates found, add the two users and ages to scanned names and ages
        //      filteredUsers.push(users[i].name.first);
        //      filteredUsers.push(users[i].dob.age);
        //      filteredUsers.push(users[z].name.first);
        //      filteredUsers.push(users[z].dob.age);
        //   }
        //   z--;//next user for pointer started from end
        // }
        // console.log(filteredUsers)

        for (let i=0, z=users.length-1; i<parseInt(users.length/2); i++){
          if(!filteredUsers.names.includes(users[i].name.first))
            filteredUsers.names.push(users[i].name.first)
          if(!filteredUsers.ages.includes(users[i].dob.age))
            filteredUsers.ages.push(users[i].dob.age)
          if(!filteredUsers.names.includes(users[z].name.first))
            filteredUsers.names.push(users[z].name.first)
          if(!filteredUsers.ages.includes(users[z].dob.age))
            filteredUsers.ages.push(users[z].dob.age)
          z--;
        }
        return filteredUsers;
    }
    return {};
  }

  getUsers = async () => {
    const users = await getUsers();
    // const users = [{name: {first: 'Ahmad'}, dob: {age: 30}},
    // {name: {first: 'Yousef'}, dob: {age: 12}},
    // {name: {first: 'Shatha'}, dob: {age: 14}},
    // {name: {first: 'Rana'}, dob: {age: 22}},
    // {name: {first: 'Osama'}, dob: {age: 22}},
    // {name: {first: 'Ahmad'}, dob: {age: 38}}];
   
    this.setState({
      users: users,
      filteredUsers: this.filterUsers(users),
      isLoading: false
    }/*, () => {
      console.log(this.state.users)
    }*/)
  }

  componentDidMount(){
    if (this.state.isLoading)
      this.getUsers();
  }

  render(){
    return (
     <div className='container'>
        {
          this.state.isLoading ? 
          <Loading />
          :
          <Users users={this.state.filteredUsers} />
        }

     </div>
    );
  }

}

export default App;
