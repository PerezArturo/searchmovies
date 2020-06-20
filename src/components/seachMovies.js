import React, { useState } from 'react';

export default function SearchMovies() {
    const searchMovies = async (e) => {
        e.preventDefault();

        const query = "Jurassic Park"
        const url = `https://api.themoviedb.org/3/search/movie?api_key=024ba6e7efb42d1e2c6abe66fa40aedc&language=en-US&query=${query}&page=1&include_adult=true`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <form onSubmit={searchMovies} className="form">
                <label htmlFor="query" className="label">
                    Movie name
                </label>
                <input
                    type="text"
                    name="query"
                    className="input"
                    placeholder="i.e. Jurassic Park"
                />
                <button className="button" type="submit">
                    Search!
                </button>
            </form>

        </div>
    );
}