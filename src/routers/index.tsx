import * as React from 'react';
// import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '@views/Home';

const Routers: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/app" component={App} />

                <Redirect to="/app" />
            </Switch>
        </Router>
    );
}

export { Routers};