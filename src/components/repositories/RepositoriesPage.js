import React from 'react';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoriesContainer from './RepositoriesContainer';

class RepositoriesPage extends React.Component {

    state = {
        filters: {
            searchText: 'SomeText'
        }
    };

    onSearchInputChange = inputValue => {
        this.setState({
            filters: {
                searchText: inputValue
            }
        })
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

//TODO(milestone09): Great, we now have info about the repos, now let's make use
// of that search input. We're already passing down the filters to the RepositoriesContainer,
// now make the necessary changes in that file to only show the repositories which
// have a title that contains whatever is in the search input