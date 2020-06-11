import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Shop extends Component {
    constructor() {
        super()
        this.state = {
            film: [],
            filmName: "",
            xx: ""
        }
    }

    componentDidMount() { }

    async clicked() {
        const data = await fetch(`http://www.omdbapi.com/?apikey=dfb5685b&t=${this.state.filmName}`);
        const item = await data.json();
        //console.log(this.state.filmName);
        //console.log(item);
        this.setState({ film: item });
    }

    getData() {
        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()
        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(JSON.parse(xhr.responseText))
            this.setState({ film: JSON.parse(xhr.responseText) });
        })
        // open the request with the verb and the url
        xhr.open('GET', `http://www.omdbapi.com/?apikey=dfb5685b&t=${this.state.filmName}`)
        // send the request
        xhr.send()
    }

    async getDataAxios() {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=dfb5685b&t=${this.state.filmName}`)
        console.log(response.data)
        this.setState({ film: response.data });
    }

    handleChange = (event) => {
        const eValue = event.target.value;
        this.setState({ filmName: eValue });
    }

    render() {
        return (
            <div className="container mt-5">
                <div>
                    <input type="text" className="form-control" name="filmName" onChange={this.handleChange} value={this.state.filmName} placeholder="Enter a film name" />
                    <button className="btn btn-primary mt-2 btn-lg" onClick={(e) => { this.clicked(); }}>Search by Fetch</button>
                    <button className="btn btn-primary mt-2 btn-lg ml-5 mr-5" onClick={(e) => { this.getData(e); }}>Search by XHR</button>
                    <button className="btn btn-primary mt-2 btn-lg " onClick={(e) => { this.getDataAxios(); }}>Search by Axios</button>
                </div>
                {this.state.film.imdbID &&
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-5">
                            <div className="card">
                                <Link to={`/about/${this.state.film.imdbID}`}>
                                    <img className="card-img-top rounded mx-auto d-block p-3" src={this.state.film.Poster} alt="Film Poster" />
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.film.Title}</h5>
                                        <p className="card-text">{this.state.film.Plot}</p>
                                        <p className="card-text"><small className="text-muted">{this.state.film.Genre}</small></p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col"></div>
                    </div>
                }
            </div>
        );
    }
}

export default Shop;