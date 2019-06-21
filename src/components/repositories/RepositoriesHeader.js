import React from 'react';

function RepositoriesHeader(props) {

    const handleChange = e => {
        props.onSearchInputChange(e.target.value)
    };

    return (
        <>
            <h2>Repos Header</h2>
            <input type='search' placeholder={'Find a repository'} onChange={handleChange}/>
        </>
    );
}

export default RepositoriesHeader;
