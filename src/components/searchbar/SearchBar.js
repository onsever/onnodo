import React, { useState } from 'react';
import styles from "./SearchBar.module.css";
import { useHistory } from "react-router-dom";

function SearchBar(props) {
    const [query, setQuery] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push(`/result?query=${query}`);
        setQuery("");
    }

    return (
        <div className={styles.searchbar}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <input
                    id="search"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    required />
            </form>
        </div>
    );
}

export default SearchBar;