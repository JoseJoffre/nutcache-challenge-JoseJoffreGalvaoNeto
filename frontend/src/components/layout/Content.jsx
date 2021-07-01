import React from 'react';
import './Content.less';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import { Layout } from 'antd';


const Content = props => (
    <Layout.Content>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
            </Switch>
        </Router>
    </Layout.Content>

)

export default Content;