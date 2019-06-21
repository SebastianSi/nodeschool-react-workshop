import React from 'react';
import Repo from './Repo';
import mockApi from '../../mockApi';
class RepositoriesContainer extends React.Component {

    //Notice I added here a lifecycle hook, componentDidMount, and inside it I
    //used a function from the mockApi file (in a real app, you'd call a real
    //api endpoint, but we'll stick to mock data for this workshop)
    //Let's talk a bit about what's going on :)

    componentDidMount() {
        mockApi.fetchRepos().then(repos => {
            console.log(repos)
        })
    }

    render() {
        console.log(this.props.filters.searchText);
        return (
            <ul style={{listStyle: 'none'}}>
                <Repo title={'Repo1'} />
            </ul>
        );
    }

}

export default RepositoriesContainer;

//TODO(milestone07): let's first make a state for this class component where we'll
// keep the repos (feel free to call them repos); it will initially be an empty array
// inside componentDidMount, let's setState for the repos with the repos we received
// Then, let's replace the hardcoded <Repo> down in jsx, with an array of actual data;
// We'll need to map over the repos in the state, and for each return a
// <Repo /> component, but instead of hardcoding the titles, we'll give them the actual
// titles we already have in the repos on the state.


