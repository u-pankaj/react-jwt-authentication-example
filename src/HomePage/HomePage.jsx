import React from 'react';
import { userService, authenticationService } from '@/_services';
//import '@/HomePage/HomePage.css';


class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }
    

    renderTableData(users) {
        return users.map((user, index) => {
           const { accountId, firstName, lastName, age } = user //destructuring
           return (
              <tr key={accountId}>
                 <td>{accountId}</td>
                 <td>{age}</td>
                 <td>{firstName}</td>
                 <td>{lastName}</td>
              </tr>
           )
        })
     }

     renderTableHeader(users) {
        let header = Object.keys(users[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
  


     render() {


        const { currentUser, users } = this.state;
        return (
           <div>
               { users &&
              <table id='users'>
                 <tbody>
                 <tr>{this.renderTableHeader(users)}</tr>
                    {this.renderTableData(users)}
                 </tbody>
              </table>
               }
           </div>
        )
     }


 /*   render() {
        const { currentUser, users } = this.state;
        return (
            <div>




<div>
    { users && 
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
    }
 </div>





<div>

{ users && 
    <ul>
    {
        users.filter(user=>user.age<25 && user.lastName.includes("C")).map(filteredUser=>(
            <li key= {filteredUser.accountId}> {filteredUser.firstName} {filteredUser.lastName} </li>
        ))
    }
    </ul>
}
             </div>

            </div>
        );
  } */
  
}

export { HomePage };