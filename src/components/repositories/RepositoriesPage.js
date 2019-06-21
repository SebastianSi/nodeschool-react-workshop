import React from 'react';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoriesContainer from './RepositoriesContainer';

function RepositoriesPage() {
    return (
        <div>
            <RepositoriesHeader />
            <hr/>
            <RepositoriesContainer someProp={'Greetings from your parent'}/>
        </div>
    );
}

export default RepositoriesPage;

//TODO: Let's also refactor this to a class component. We want to do that because
// we'll later get the value in the input in RepositoriesHeader and pass it to
// RepositoriesContainer to only display based on the search filter; but later
// on that. In the meantime, refactor this to a class component and also introduce
// state to it; add a filters object on the state, which will have a searchText
// property like this:
// state = {filters: {
//  searchText: 'SomeText'
// }};
// Now instead of someProp, pass the filters object on the state;
// Make the necessaryChanges in RepositoriesContainer to console.log the searchText's value


