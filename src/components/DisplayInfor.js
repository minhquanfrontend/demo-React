import React from "react";
import './DisplayInfor.scss';
// import logo from './../logo.svg'
class DisplayInfor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShowHideUser: true
        } 
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
                <div className='display-infor-container'>
                    {/* <img src={logo}/> */}
                    <button onClick={()=>{this.handleHideShow()}}>
                        {this.state.isShowHideUser === true ? 'Hide List User': 'Show List User'}
                    </button>
                    { this.state.isShowHideUser && 
                        <>
                            {listUsers.map((user)=>{
                                console.log(user);
                                
                                return (
                                    <div key={user.id} className={user.age > 16 ? 'green ' : 'red'}>
                                        <h4>My name's: {user.name}</h4>
                                        <p>My age's: {user.age}</p>
                                        <div>
                                            <button onClick={()=> this.props.handleDeleteUser(user.id)}>Delete</button>
                                        </div>
                                    </div>
                                    
                                )
                            })}
                        </>
                    }
                </div>
                
                
                
            </>
        )
    }
}

export default DisplayInfor;