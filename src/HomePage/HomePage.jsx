import React from 'react';
import { userService, authenticationService } from '@/_services';


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
    

    

    render() {
        const { currentUser, users } = this.state;
        const data = [{  
            name: 'Ayaan',  
            age: 26  
            },{  
            name: 'Ahana',  
            age: 22  
            },{  
            name: 'Peter',  
            age: 40   
            },{  
            name: 'Virat',  
            age: 30  
            },{  
            name: 'Rohit',  
            age: 32  
            },{  
            name: 'Dhoni',  
            age: 37  
            }] ; 
            const columns = [{  
                Header: 'Name',  
                accessor: 'name'  
               },{  
               Header: 'Age',  
               accessor: 'age'  
               }] ; 
        return (
            <div>
            <div>
                {users &&
                    <table>
                        {users.map(user =>
                            <tr key={user.accountId}>{user.firstName} {user.lastName}</tr>

<tr key= {user.accountId}> 
    <td></td> 
    <td ></td> 
    <td></td> 
    </tr>

                        )}
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
    }
  
}

export { HomePage };