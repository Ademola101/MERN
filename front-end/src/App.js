import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import Input from './components/Input';
import Button from './components/button';
const App = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")
  const[listOfUser, setListOfUser] =useState([])

  const createUser = () => {
    Axios.post("http://localhost:3001/newUser", {name, age, username}).then((response) => {
      alert('Success')
    })
  }
  

   useEffect(() => {
Axios.get("http://localhost:3001/Users").then((response) => {
  setListOfUser(response.data)
},[]);


  });


  const handleAgeChange = (event) => {
    setAge(event.target.value)
  };


  const handleNameChange = (event) => {
    setName(event.target.value)
  }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  
  return (
    <div className="App">
<div> {listOfUser.map((user) =>{
  return ( <div>
    <h1> Name: {user.name}</h1>
    <h1> age: {user.age}</h1>
    <h1> Username: {user.username}</h1>
    </div>
  )
})}

</div>
<Input type = {'text'} placeholder = {"name"} onChange  = {handleNameChange}/>
<Input type = {'number'} placeholder = {"age"} onChange  = {handleAgeChange}/>
<Input type = {'text'} placeholder = {"username"} onChange  = {handleUsernameChange}/>
<Button onClick={createUser}/>

          
          </div>
  );
}

export default App;
