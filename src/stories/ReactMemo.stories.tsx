

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USER')
    return <div>
        {
props.users.map((u, i) => <div key={i}> {u}) </div>)
        }
    </div>
}