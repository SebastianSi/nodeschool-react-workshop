import * as mockRepos from './mockRepos.json';
const repos = mockRepos.default;

const ONE_SECOND = 1000;


const mockApi = {
    fetchRepos: () => resolveAfter1Second({type: "fetchRepos"})
};

const resolveAfter1Second = (action) => {
    switch (action.type) {
        case "fetchRepos":
            return new Promise(resolve => {
                setTimeout(() => {resolve(repos)}, ONE_SECOND)
            });
        default:
            console.log("Well, why 'd you call me then?")
    }
};

export default mockApi