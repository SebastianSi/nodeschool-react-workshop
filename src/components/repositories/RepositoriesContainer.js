import React from 'react';
import Repo from './Repo';

class RepositoriesContainer extends React.Component {

    render() {
        console.log(this.props.filters.searchText);
        return (
            <ul style={{listStyle: 'none'}}>
                {/*Notice on the ul that React also allows style properties directly in JS*/}
                <Repo title={'Repo1'} />
            </ul>
        );
    }

}

export default RepositoriesContainer;



