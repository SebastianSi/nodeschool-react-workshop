import React from 'react';
import Repo from './Repo';
import mockApi from '../../mockApi';
class RepositoriesContainer extends React.Component {

    state = {
        repos: []
    };

    componentDidMount() {
        mockApi.fetchRepos().then(repos => {
            this.setState({repos})
        })
    }

    displayRepos = repos => {
        const {searchText} = this.props.filters;
        let reposToDisplay = !searchText ?
            repos :
            repos.filter(repo => repo.title.toUpperCase().includes(searchText.toUpperCase()));
        return reposToDisplay.map( repo => (
            <Repo key={repo.uid}
                  title={repo.title}
                  description={repo.description}
                  language={repo.language}
                  numberOfStars={repo.numberOfStars}
            />
            )
        )
    };

    render() {
        const {repos} = this.state;
        return (
            <ul style={{listStyle: 'none'}}>
                {this.displayRepos(repos)}
            </ul>
        );
    }

}

export default RepositoriesContainer;
//TODO(milestone10): Congrats! You're at the final "official" milestone in the workshop
// We'll want to leverage the power of conditional rendering for this one;
// Notice that when initially entering the page, we have a blank container for
// about a second. If it were a real app, it could be less or it could be more.
// It would be nice to show at least a "Loading..." message while we're fetching
// the repos.