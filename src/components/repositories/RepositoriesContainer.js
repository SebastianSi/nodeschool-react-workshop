import React from 'react';

function RepositoriesContainer(props) {
    //quick note about destructuring which you'll see a lot in React:
    // here, we could also write: const {someProp} = props
    // and use someProp in this function without always writing props.someProp

    return (
        <h2>{props.someProp}</h2>
    );
}

export default RepositoriesContainer;

//TODO(milestone02): let's refactor this component to a Class component
// Suggested reading:
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
