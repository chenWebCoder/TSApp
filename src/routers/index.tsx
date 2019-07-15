import * as React from 'react';
// import { PrivateRoute } from './PrivateRoute';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Home } from '@views/Home';
import { Home1 } from '@views/Home1';
import { Home2 } from '@views/Home2';

const Routers: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/home1" component={Home1} />
                <Route exact path="/home2" component={Home2} />

                <Redirect to="/home" />
            </Switch>
        </Router>
    );
};

export { Routers };
