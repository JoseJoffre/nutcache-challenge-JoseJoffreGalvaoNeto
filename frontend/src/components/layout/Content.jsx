import React from 'react';
import './Content.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';


const Content = props => (

    <div className='Content'>
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
    </div>
)

export default Content;