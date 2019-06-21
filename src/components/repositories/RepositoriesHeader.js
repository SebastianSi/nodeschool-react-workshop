import React from 'react';

function RepositoriesHeader() {
    return (
        <>
            <h2>Repos Header</h2>
            {/*note: I added the input tag below which we'll use later in the app*/}
            <input type='search' placeholder={'Find a repository'} />
        </>
    );
}

export default RepositoriesHeader;
