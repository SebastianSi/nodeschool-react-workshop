import React from 'react';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoriesContainer from './RepositoriesContainer';

function RepositoriesPage() {
    return (
        <div>
            <RepositoriesHeader />
            <hr/> {/*Note: I added this to better separate the two main components*/}
            <RepositoriesContainer someProp={'Greetings from your parent'}/>
        </div>
    );
}

export default RepositoriesPage;

