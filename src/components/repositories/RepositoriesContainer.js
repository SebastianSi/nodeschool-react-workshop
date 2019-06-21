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
        {/*notice that when mapping over an array to return some jsx for each element,
          we need to pass a unique key to each one of them; here we can use the uid*/}
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

//TODO(milestone08): Great, we got some actual data showing; Now pass
// the rest of the props to the Repo component, and do the necessary changes there
// to show them (except the uids and tags); you can make spans, divs, it's up to you


