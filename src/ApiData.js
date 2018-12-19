import React from "react"
import axios from "axios"

const getData = () => {
  return axios({
    method: "get",
    url: "https://swapi.co/api/films/1",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    timeout: 2000
  })
}

export default class ApiData extends React.Component {
  constructor(props) {
    super(props)

    getData().then(response => {
      this.state = {
        success: true,
        anewhope: response.data
      }
    })
  }
  render() {
    return (
      <>
        <h2>Opening Crawl:</h2>
        <p>{this.state.anewhope.opening_crawl}</p>
      </>
    )
  }
}
