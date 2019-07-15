import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// interface Container extends RouteComponentProps<{}> {
// }

// class Container extends React.Component<Container, {}> {

interface Ip {
    component?: any,
    moduleName?: string,
}

class PrivateRoute extends Component<Ip> {
    render() {
        const { component: Component, moduleName, ...rest } = this.props;
        const token = localStorage.getItem('mark_token');

        return (
            <Route
                {...rest}
                render={props => {
                    return token ? (
                        <Component {...props} />
                    ) : (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                    state: { from: props.location },
                                }}
                            />
                        );
                }}
            />
        );
    }
}
export { PrivateRoute };
