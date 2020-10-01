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
import users from "./users.json"
import Home from "./Home.js"
import Interior from "./Interior.js"

/*
a. create a contacts list in the direction of a column
b.
1. retrieve data from json file
2. display thumbnail and name on the first page, the thumbnail includes a small image of them
3. if one of the thumbnails/ names are clicked take the user to a new page that holds that persons:
 profile image, name, email, phone number, and location
4. connect the interior section to the home section
*/

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/userInfo/:id">
          <Interior />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
