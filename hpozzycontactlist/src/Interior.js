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

function Interior() {
  const [users, setPeople] = useState(randomusers)
  const { id } = useParams()
  const currentUser = users.find((item) => item.id == id)
  return (
    <div className="App">
      <div className="interiorPart">
        <div className="topInteriorInfo" key={currentUser.id}>
          <Link to={`/`}>
            <div className="arrow">
              <i class="fas fa-long-arrow-alt-left"></i>
            </div>
          </Link>
          <img className="thumbNails2" src={currentUser.picture.large}></img>
        </div>
        <div className="bottomHalf">
          <h5>
            {" "}
            <i class="fas fa-user-check"></i> {currentUser.name.first}{" "}
            {currentUser.name.last}{" "}
          </h5>
          <h5>
            {" "}
            <i class="far fa-envelope"></i> {currentUser.email}{" "}
          </h5>
          <h5>
            <i class="fas fa-mobile"></i> {currentUser.cell}
          </h5>
          <h5>
            <i class="fas fa-globe-americas"></i> {currentUser.location.city},
            {currentUser.location.state}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Interior
