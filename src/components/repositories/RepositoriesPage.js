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
