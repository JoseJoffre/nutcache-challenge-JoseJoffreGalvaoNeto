import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import RegistrationPopup from '../modal/people/RegistrationPopup';
import './Home.scss';

const Home = props => (


    <div className='Home'>

        <div className='buttons'>
            <RegistrationPopup />
        </div>


    </div>

)

export default Home;