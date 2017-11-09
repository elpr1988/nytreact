import React, { Component } from "react";
import axios from "axios";
// import API from "./src/utils/API";

class Search extends Component {
	render() {
    return (
			<div className="container">
				<div className="panel panel-default">
					<div className="panel-heading text-center">
						<h3 className="panel-title">Search</h3>
					</div>
					<div className="panel-body text-center">
						<form>
							<div className="form-group">
								<input type="text" className="form-control" id="topic" placeholder="Topic"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="startYear" placeholder="Start Year"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="endYear" placeholder="End Year"/>
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>

			<div className="panel panel-default">
				<div className="panel-heading text-center">
					<h3 className="panel-title">Results</h3>
				</div>
				<div className="panel-body">
				<div className="col-xs-9 sm-10">
					Results of Search
				</div>
				<div className="col-xs-3 sm-2">
				<button type="submit" className="btn btn-default right-align">Save</button>
				</div>
				</div>
			</div>
			</div>
    );
  }
}

export default Search;
