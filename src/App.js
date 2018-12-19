import React, { Component } from "react"
import ErrorBoundary from "./ErrorBoundary"
import ApiData from "./ApiData"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <ApiData />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
