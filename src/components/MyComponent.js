// class component
// function component
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//   state ={
//     listUsers: [
//       {
//         id: 1,
//         name:"Minh Quan Software Engineer",
//         age:"16"
//       },
//       {
//         id: 2,
//         name:"Minh Quan Fullstack",
//         age:"22"
//       },
//       {
//         id: 3,
//         name:"Minh Quan Front End",
//         age:"69"
//       },
//     ]
//   }
//   handleAddNewUser = (userObj)=>{
//     console.log(">> Check data form parent",userObj);
//     this.setState({
//       listUsers:[
//         userObj, 
//         ...this.state.listUsers,
        
//       ]
//     })
    
//   }
//   handleDeleteUser = ( userId) =>{
//     let listUsersClone = [
//       ...this.state.listUsers
//     ]
//     listUsersClone = listUsersClone.filter(item => item.id !== userId)
//     this.setState({
//       listUsers:listUsersClone
//     })
//   }
//   // JSX
//   render() {
//     //DRY: don't reapet youself
//     return (
//       <div>
//         <AddUserInfor
//           handleAddNewUser={this.handleAddNewUser}
//           />
//         <br/>
//         <DisplayInfor
        
//           handleDeleteUser={this.handleDeleteUser}
//           listUsers={this.state.listUsers}
        
//         />
//       </div>
//     );
//   }
// }

const MyComponent = (props) =>{
  const [listUsers, setListUser] = useState(
    [
      {
        id: 1,
        name:"Minh Quan Software Engineer",
        age:"16"
      },
      {
        id: 2,
        name:"Minh Quan Fullstack",
        age:"22"
      },
      {
        id: 3,
        name:"Minh Quan Front End",
        age:"69"
      },
    ]
  )
  const handleAddNewUser = (userObj)=>{
    console.log(">> Check data form parent",userObj);
    setListUser([
      userObj,
      ...listUsers,
    ]
      
    )
    
  }
  const handleDeleteUser = ( userId) =>{
    let listUsersClone = listUsers
    listUsersClone = listUsersClone.filter(item => item.id !== userId)
    setListUser(listUsersClone)
  }
  return (
    <div>
      <AddUserInfor
        handleAddNewUser={handleAddNewUser}
      />
      <br/>
      <DisplayInfor
        handleDeleteUser={handleDeleteUser}
        listUsers={listUsers}  
      />
    </div>
  )
}

export default MyComponent;
