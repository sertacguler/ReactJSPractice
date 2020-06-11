import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    constructor() {
        super()
        this.state = { film: [] }
    }

    async componentDidMount() {
        const data = await fetch(`http://www.omdbapi.com/?apikey=dfb5685b&i=${this.props.match.params.id}`);
        const item = await data.json();
        this.setState({ film: item });
    }

    render() {
        return (
            <div className="container">
                <footer>
                    <h3>Films</h3>
                    <hr />
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Poster</th>
                                <th scope="col">Plot</th>
                            </tr>
                        </thead>
                        <tbody id="films">
                            <tr>
                                <td><img src={this.state.film.Poster} alt="Film poster" className="img-fluid img-thumbnail" /></td>
                                <td style={{textAlign: "left"}}>
                                    <ul>
                                        <li><b>Title : </b>{this.state.film.Title}</li>
                                        <hr />
                                        <li><b>Director : </b>{this.state.film.Director}</li>
                                        <hr />
                                        <li><b>Released : </b>{this.state.film.Released}</li>
                                        <hr />
                                        <li><b>Genre : </b>{this.state.film.Genre}</li>
                                        <hr />
                                        <li><b>Actors : </b>{this.state.film.Actors}</li>
                                        <hr />
                                        <li><b>Plot : </b>{this.state.film.Plot}</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </footer>
            </div>
        );
    }
}

export default About;
