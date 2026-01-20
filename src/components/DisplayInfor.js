import React, { useEffect, useState } from "react";
import './DisplayInfor.scss';
// import logo from './../logo.svg'


// class DisplayInfor extends React.Component{
    
    
    
//     render(){
//         console.log('>> Call me render');
        
//         // Destructuring array/object
//         const {listUsers} = this.props
//         // console.log(listUsers);
        
//         return (
//             // props => Viết tắt property (properties)
//             <>  
//                 <div className='display-infor-container'>
                    
//                     { true && 
//                         <>
//                             {listUsers.map((user)=>{
//                                 // console.log(user);
                                
//                                 return (
//                                     <div key={user.id} className={user.age > 16 ? 'green ' : 'red'}>
//                                         <h4>My name's: {user.name}</h4>
//                                         <p>My age's: {user.age}</p>
//                                         <div>
//                                             <button onClick={()=> this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         </div>
//                                     </div>
                                    
//                                 )
//                             })}
//                         </>
//                     }
//                 </div>
                
                
                
//             </>
//         )
//     }
// }

const DisplayInfor = (props) =>{
    const {listUsers} = props 
    const [isShowHideListUser,setShowHideListUser] = useState(true);
    const handleShowHideListUser = () =>{
        setShowHideListUser(!isShowHideListUser)
    }

    console.log('>>> Call me Render');
    
    useEffect(()=>{
        if(listUsers.length === 0){
            alert('You deleted all the users')
        }
        console.log('>>> Call me useEffect');

    },[listUsers])
    return (
        // props => Viết tắt property (properties)
        <div className='display-infor-container'>
                <div>
                    <button onClick={()=>{handleShowHideListUser()}}>
                        {isShowHideListUser === true ? 'Hide List User' : 'Show List User'}
                        </button>
                </div>
                { isShowHideListUser && 
                    <>
                        {listUsers.map((user)=>{
                            // console.log(user);
                            
                            return (
                                <div key={user.id} className={user.age > 16 ? 'green ' : 'red'}>
                                    <h4>My name's: {user.name}</h4>
                                    <p>My age's: {user.age}</p>
                                    <div>
                                        <button onClick={()=>props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>
                                
                            )
                        })}
                    </>
                }
        </div>
    )
    
}

export default DisplayInfor;