import React from "react";

class DisplayInfor extends React.Component{
    state = {
        isShowHideUser: true
    }
    handleHideShow = () =>{
        this.setState({
            isShowHideUser: !this.state.isShowHideUser
        })
    }
    render(){
        // Destructuring array/object
        const {listUsers} = this.props
        console.log(listUsers);
        
        return (
            // props => Viết tắt property (properties)
            <>  
                <div>
                    <button onClick={()=>{this.handleHideShow()}}>
                        {this.state.isShowHideUser === true ? 'Hide List User': 'Show List User'}
                    </button>
                </div>
                { this.state.isShowHideUser && 
                    <div>
                        {listUsers.map((user)=>{
                            return (
                                <div key={user.id} className={user.age > 16 ? 'green ' : 'red'}>
                                    <h4>My name's: {user.name}</h4>
                                    <p>My age's: {user.age}</p>
                                </div>
                            )
                        })}
                </div>
                }
                
                
                
            </>
        )
    }
}

export default DisplayInfor;