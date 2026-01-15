// class component
// function component
import React from 'react';

class MyComponent extends React.Component{

    state = {
        name: 'Quan Libo',
        address: 'Buon Ma Thuot',
        age: '22'
    };

    // JSX
    render(){
        return (
            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                
            </div>
        );
    }
}

export default MyComponent;