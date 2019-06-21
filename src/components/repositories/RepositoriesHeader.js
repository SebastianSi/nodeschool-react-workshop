import React from 'react';

function RepositoriesHeader(props) {

    return (
        <>
            <h2>Repos Header</h2>
            {/*<input type='search' placeholder={'Find a repository'} onChange={handleChange}/>*/}
            <input type='search' placeholder={'Find a repository'} />
        </>
    );
}

export default RepositoriesHeader;

//TODO(milestone05): Now we'll want to somehow notify our parent, RepositoriesPage
// whenever the value in this input changes; we'll need that to later filter the list of repos
// based on the value entered in this input;
// In React, the most common way of doing this is by passing a function from the parent
// to the child as a prop; the child will then call the function everytime it wants to
// notify the parent that its value changed; then the logic of what to do with this
// value will be handled by the parent;
// So, add a prop from the parent to RepositoriesHeader called onSearchInputChange;
// In this file, add an onchange prop to the input, like this:
// <input type='search' placeholder={'Find a repository'} onChange={handleChange} />
// Now make a function above called handleChange; inside it, it will call the
// onSearchInputChange prop this component received, and pass it the value of the input
// In the parent, I added a new function called the same (onSearchInputChange),
// which console.logs the value it received from the child via the callback function
// Try to grasp the flow, and ask me any questions :)
