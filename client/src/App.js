import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
require('dotenv').config()

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { who: "" };
    }

    handleSubmit = event => {
	event.preventDefault();
	const who = {
		name: event.target.who.value
	}
	axios.post(`http://${process.env.REACT_APP_API_HOST}:9000/hellonoissue`, { who })
		.then(res=>{
		console.log(res);
		console.log(res.data);
		this.setState({who: res.data.who.name});
		})
    }

    render() {
        return (
            <div className="App">
		<h1 className="App-title">noissue test</h1>
		<p className="App-intro">{this.state.who}</p>
		<form onSubmit={this.handleSubmit}>
		<label>
			Name:
			<input type="text" name="who"/>
		</label>
			<input type="submit" value="Submit" />
		</form>
            </div>
        );
    }
}

export default App;
