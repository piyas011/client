import UserCard from "../../components/UserCard.jsx"

const UsersPage = async () => {
  const res = await fetch("http://localhost:5000/users")
  const users = await res.json()

  return (
    <div>
      <h1>Users Pages : {users.length}</h1>
      <div className="grid grid-cols-3 gap-5">
        {users.map((user) => (
          <div key={user._id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersPage
