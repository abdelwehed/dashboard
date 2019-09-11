import React, { Component } from 'react'
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import {


    NavItem,
    NavLink,

} from "reactstrap";
import { Route } from "react-router-dom";
import Admin from './layouts/Admin'

import Sidebar from './components/Sidebar/Sidebar'

export default class Utils extends Component {
    createLinks = routes => {
        return routes.map((prop, key) => {
            return (
                <NavItem key={key}>
                    <NavLink
                        to={prop.layout + prop.path}
                        tag={NavLinkRRD}
                        onClick={this.closeCollapse}
                        activeClassName="active"
                    >
                        <i className={prop.icon} />
                        {prop.name}
                    </NavLink>
                </NavItem>
            );
        });
    };
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };

    render() {

        return (
            <div>
                <Admin getRoutes={this.getRoutes(routes)} />
                <Sidebar createLinks={this.createLinks(routes)} />
            </div >
        )
    }






}


Utils.defaultProps = {
    routes: [{}]
};

Utils.propTypes = {
    // links that will be displayed inside the component
    routes: PropTypes.arrayOf(PropTypes.object),
}