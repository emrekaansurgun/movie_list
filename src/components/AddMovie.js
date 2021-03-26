import React, { Component } from 'react'
import serialize from "form-serialize";
import { Link } from "react-router-dom";

class AddMovie extends Component {

    handleFormSubmit = (event) => {
        event.preventDefault();
        const newMovie = serialize(event.target, { hash: true });
        this.props.onAddMovie(newMovie);
    }

    render() {
        return (

            <div className="container">
                <form className="mt-5" onSubmit={this.handleFormSubmit}>
                    <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie." disabled />
                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text"
                                className="form-control"
                                name="name" required />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputRating">Rating</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rating" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="inputImage">Image URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="imageURL" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="overviewTextarea">Overview</label>
                            <textarea
                                className="form-control"
                                name="overview" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" className="btn btn-danger btn-block col-md-10" value="Add Movie" />
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

export default AddMovie;