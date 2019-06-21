import React from 'react';
import RepositoriesHeader from './RepositoriesHeader';
import RepositoriesContainer from './RepositoriesContainer';

function RepositoriesPage() {
    return (
        <div>
            <RepositoriesHeader />
            <RepositoriesContainer someProp={'Greetings from your parent'}/>
        </div>
    );
}

export default RepositoriesPage;