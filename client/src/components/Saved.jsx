import React, { Component } from "react";
import axios from "axios";
// import API from "./src/utils/API";

class Saved extends Component {
	render() {
		return (
			<div className="container">			
				<div className="panel panel-default">
				<div className="panel-heading text-center">
					<h3 className="panel-title">Saved</h3>
				</div>
				<div className="panel-body">
				<div className="col-xs-9 sm-10">
					Saved Articles
				</div>
				<div className="col-xs-3 sm-2">
				<button type="submit" className="btn btn-default right-align">Delete</button>
				</div>
				</div>
			</div>
			</div>
		);
	}
}

export default Saved;
