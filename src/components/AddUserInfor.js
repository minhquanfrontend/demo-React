import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "",
    age: "",
  };
  handleClick(event) {
    console.log(">>> Click me <<< ");

    this.setState({
      name: "Minh Quan",
      age: Math.floor(Math.random() * 100 + 1),
    });
    // this.setState({
    //     age:  Math.floor((Math.random()* 100)+ 1)
    // })
  }

  handleOnChangeInput = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleOnChangeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddNewUser({
      id:Math.floor(Math.random() * 100 + 1) + '-random',
      name: this.state.name,
      age: this.state.age,
    });

  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(e) => {
              this.handleOnChangeInput(e);
            }}
          />
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(e) => {
              this.handleOnChangeAge(e);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
