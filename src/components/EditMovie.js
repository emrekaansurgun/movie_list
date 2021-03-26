import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

class EditMovie extends Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        const movie = response.data;

        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })
    }

    onInputChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        const { name, rating, overview, imageURL } = this.state;

        const id = this.props.match.params.id;

        const updatedMovie = {
            name,
            rating,
            overview,
            imageURL
        }

        this.props.onEditMovie(id, updatedMovie);
        this.props.history.push("/");
    }

    render() {
        return (

            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Edit Form To Update the Movie.." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" required
                                value={this.state.name}
                                onChange={this.onInputChange} />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" required
                                value={this.state.rating}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" required
                                value={this.state.imageURL}
                                onChange={this.onInputChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview"
                                rows="5"
                                value={this.state.overview}
                                onChange={this.onInputChange} ></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" className="btn btn-danger btn-block col-md-10" value="Edit Movie" />
                        <Link
                            to="/"
                            type="button"
                            className="btn btn-md btn-secondary col-md-2">Home Page
                        </Link>
                    </div>
                </form>

            </div>
        )
    }
}

export default EditMovie;