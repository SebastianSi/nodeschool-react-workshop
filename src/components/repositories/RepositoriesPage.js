import React from 'react';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoriesContainer from './RepositoriesContainer';

class RepositoriesPage extends React.Component {

    state = {
        filters: {
            searchText: 'SomeText'
        }
    };

    onSearchInputChange = valueFromChild => {
        console.log(valueFromChild)
    };

    render() {
        return (
            <div>
                <RepositoriesHeader onSearchInputChange={this.onSearchInputChange}/>
                <hr/>
                <RepositoriesContainer filters={this.state.filters}/>
            </div>
        );
    }

}

export default RepositoriesPage;

//TODO(milestone06): let's update the state whenever the value from the input changes
// and thus, notify RepositoriesContainer that the filters have changed
// P.S. I also added some mock json for our repos which we'll use in the next challenge,
// feel free to ignore for now