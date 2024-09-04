import React, {useState} from "react";


const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USER')
    return <div>
        {
props.users.map((u, i) => <div key={i}> {u}) </div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1');
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])
    const addUsers = () => {
        const  newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }

}