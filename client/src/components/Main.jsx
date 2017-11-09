import React, { Component } from "react";
import axios from "axios";
import Search from "./Search";
import Saved from "./Saved";
import API from "../utils/API";

class Main extends Component {
  state = {
    articles: [],
    saved: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
      this.fetchSavedArticles();
  }

  fetchSavedArticles = () => {
      axios
      .get("api/fetch")
      .then((res) => this.setState({ saved: res.data}))
      .catch((err) => console.log(err));
  }

  searchArticles= query => {
      API.findArticles(query)
        .then(res => this.setState({ articles: res.data.response.docs }))
        .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state);
  };

  saveArticles = topic => {
      axios
        .post("/api/save", {
            title: topic.headline.main, 
            articleDate: topic.pub_date,
            url: topic.web_url
        })
        .then(res => {
            const temp = this.state.results.filter(result => {
                return result.web_url !== topic.web_url;
            });
            this.setState({ articles: temp });
            this.fetchSavedArticles();
        })
        .catch(err => console.log(err));
  }

  deleteArticle = topic => {
    axios
      .delete("/api/delete" + topic._id)
      .then(res => {
          const temp = this.state.saved.filter(result => {
              return result._id !== topic._id;
          });
          this.setState({ saved: temp });
          this.fetchSavedArticles();
      })
      .catch(err => console.log(err));
}

  render() {
    return (
      <div className="container">     
        <div>
        <Search />
        </div>

        <div>
        <Saved />
        </div>

      </div>
    );
  }
}

export default Main;
