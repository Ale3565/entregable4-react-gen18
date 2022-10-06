import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'
import blue from "../src/assets/blue.jpg"


function App() {

  const [users, setUsers] = useState() // 
  const [response, setResponse] = useState() // este trae la informacion del boton update
  const [loading, setLoading] = useState(false) // loader


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])


  const getAllUsers = () => {
    const URL = "https://users-crud1.herokuapp.com/users/"
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err.message))
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  console.log(response)

  const createNewUsers = data => {
    const URL = "https://users-crud1.herokuapp.com/users/"
    axios.post(URL, data)
      .then(res => getAllUsers())
      .catch(err => console.log(err.message))
  }

  const deleteUsersById = id => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err.message))
  }

  const updateCarById =(id, data)  => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setResponse()
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${blue})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"
      }}
    >

      {
        loading

          ?

          <div className="container">
          <div className="loader-container">
            <div className="spinner"></div>
            <span className='loading'>Loading...</span>
          </div>
        </div>

          :
        <div> 
          <UsersForm
            createNewUsers={createNewUsers}
            getAllUsers={getAllUsers}
            response={response}
            updateCarById={updateCarById}
          />
       {
        users?.map(user => (
          <UsersList
            user={user}
            key={user?.id}
            deleteUsersById={deleteUsersById}
            setResponse={setResponse}
            updateCarById={updateCarById}
          />
        ))
      }
      </div>
 }
    </div>

  )
}

export default App
