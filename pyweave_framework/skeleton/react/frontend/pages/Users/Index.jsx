export default function UsersIndex({ users }) { return <main><h1>Users</h1><ul>{users.map(user => <li key={user.id}><a href={`/users/${user.id}`}>{user.name}</a></li>)}</ul></main> }
