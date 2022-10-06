import React from 'react'
import "../Styles/UsersList.css"


const UsersList = ({ user, deleteUsersById, updateCarById, setResponse }) => {

  const getInfoUpdate = () => {
    setResponse(user)

  }

  return (
    <article className='card-container'>
      <ul className='list'>
        <li className='list__item'><span>First Name:</span>{user["first_name"]}</li>
        <li className='list__item'><span>Last Name: </span>{user["last_name"]}</li>
        <li className='list__item'><span>Password: </span>{user.password}</li>
        <li className='list__item'><span>Email: </span>{user.email}</li>
        <div className='birthday'>
          <i className="fa-solid fa-cake-candles"></i>
          <li className='list__item'><span>Birthday: </span>{user.birthday}</li>
        </div>
      </ul>
      <div className='icons-container'>
        <div>
          <i className="fa-solid fa-pen"></i>
          <button onClick={getInfoUpdate}>Update</button>
        </div>
        <div>
          <i className="fa-solid fa-trash"></i>
          <button onClick={() => deleteUsersById(user.id)}>Delete</button>
        </div>
      </div>
    </article>
  )
}

export default UsersList