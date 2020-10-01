import React, { useState, useEffect } from "react"
import logo from "./logo.svg"
import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom"
import randomusers from "./users.json"

function Home() {
  const [users, setPeople] = useState(randomusers)
  return (
    <div className="App">
      <div className="listContainer">
        <ul className="userList">
          <h2>My Peeps</h2>
          {users.map((item) => (
            <Link to={`/userInfo/${item.id}`} key={item.id} className="noLinks">
              <li>
                <img className="thumbNails" src={item.picture.thumbnail}></img>
                {item.name.first} {item.name.last}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
