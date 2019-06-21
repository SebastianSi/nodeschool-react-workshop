import React from 'react';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoriesContainer from './RepositoriesContainer';

class RepositoriesPage extends React.Component {

    state = {
        filters: {
            searchText: 'SomeText'
        }
    };

    //Note: the below function was added for milestone05
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
