import React from 'react';

class RepositoriesContainer extends React.Component {

    //Notice in Class components props are on the class instance, and can be accessed
    // via this.props
    render() {
        return (
            <h2>{this.props.someProp}</h2>
        );
    }

}

export default RepositoriesContainer;

//TODO(milestone03): let's get rid of this h2 and replace it with a <ul>
// Inside the <ul>, we'll add a new component called Repo
// We'll give it a "title" prop from here called "Repo1", like this:
// <Repo title={'Repo1'}/>
// Create the Repo component; make it a functional component, not a class one,
// and make it display the title prop we're passing it from here
// what element should the Repo component render? well, bear in mind it's going to be used
// as a child of <ul>, so what do you think? :)

