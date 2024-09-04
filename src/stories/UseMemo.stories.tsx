import React, {useState} from "react";
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
    console.log('Example1');
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Users users={users}/>
    </>
}
