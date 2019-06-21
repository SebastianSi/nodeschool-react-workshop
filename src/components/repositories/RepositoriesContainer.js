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
       return repos.map( repo => (
            <Repo key={repo.uid}
                  title={repo.title}
                  description={repo.description}
                  language={repo.language}
                  numberOfStars={repo.numberOfStars}
            />
        ))
    };

    render() {
        console.log(this.props.filters.searchText);
        const {repos} = this.state;
        return (
            <ul style={{listStyle: 'none'}}>
                {this.displayRepos(repos)}
            </ul>
        );
    }

}

export default RepositoriesContainer;
