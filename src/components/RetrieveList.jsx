import React, { Component } from 'react';
import axios from "axios";

class RetrieveList extends Component {
  state = {
      persons: [],
  };
/* 
 This is where the magic happens 
*/
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users") // where the api gets fetched from that API
      .then(res=>{
        console.log(res);
        this.setState({ persons: res.data});
      })
  }
  render() {
    return (
      <Container>
        <Header/>
        {this.state.persons.map(person=><li key = {person.id}>{person.name}</li>)}
      </Container>
    );
  }
}
export default RetrieveList;