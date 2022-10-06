import React from 'react';
import { getUsers } from './Utils/Utils';
import Users from './Components/Users/Users';
import Loading from './Components/Loading/Loading';
import './App.css';

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      users: [],
      isLoading: true
    }
  }

  getUsers = async () => {
    const users = await getUsers();
    this.setState({
      users: users,
      isLoading: false
    }/*, () => {
      console.log(this.state)
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
          <Users users={this.state.users} />
        }

     </div>
    );
  }

}

export default App;
