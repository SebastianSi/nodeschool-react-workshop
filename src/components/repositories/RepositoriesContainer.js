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
            repos && repos.length ?
                <ul style={{listStyle: 'none'}}>
                    {this.displayRepos(repos)}
                </ul>
                :
                <h2> Loading...</h2>
        );
    }

}

export default RepositoriesContainer;

//TODO: Congrats for getting this far; as you can see, this last one was pretty easy :)
// There's still more things you can do if you want to go further, here's a few ideas,
// feel free to ask me and I can go into more detail about them:
// A. add the dropdown in the header for the language, and also filter based on that
// B. refactor class components with hooks
// C. add routing using React-Router and make another subpage (right now, we only have Repositories)
// D. improve the styling of the components
// You've been great! Thanks for joining.
