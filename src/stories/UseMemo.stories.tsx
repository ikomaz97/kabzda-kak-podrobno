import React, {useMemo, useState} from "react";
export default {
    title: 'useMemo'
}
const NewMassagesCounter = (props: {count:number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USER-SECRET')
    return <div>
        {
            props.users.map((u, i) => <div key={i}> {u}) </div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a')> -1)
        return newArray
    }, [users])
    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>addd user</button>
        {counter}
        <Users users={users}/>
    </>
}
