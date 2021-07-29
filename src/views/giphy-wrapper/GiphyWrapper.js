import React, { useMemo } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { GiphyContextProvider } from './GiphyContext';
import { itemsList } from '../../constants/GiphyMenuItems';

function GiphyWrapper(props) {
    const menuitems = useMemo(() => itemsList());

    return (
        <GiphyContextProvider>
            {menuitems.map((route, index) => {
                const { component: RouteComponent, routes, exact, path } = route;
                return <Route
                    exact={exact}
                    key={index}
                    path={path}
                    render={() => <RouteComponent />} />;
            })}
        </GiphyContextProvider>
    )
}

export default GiphyWrapper;