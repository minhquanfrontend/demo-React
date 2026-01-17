// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state ={
    listUsers: [
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
  }
  // JSX
  render() {
    //DRY: don't reapet youself
    return (
      <div>
        <UserInfor />
        <br/>
        <DisplayInfor
        
          listUsers={this.state.listUsers}
        
        />
      </div>
    );
  }
}

export default MyComponent;
