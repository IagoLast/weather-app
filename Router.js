import React from 'react';

import locationService from './location.service';
import Search from './screens/search/Search';
import Forecast from './screens/Forecast/Forecast';


export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: locationService.getPathName(),
        }

        locationService.onPathNameChanged(pathname => {
            this.setState({ pathname });
        });
    }

    go(pathname) {
        this.setState({ pathname });
    }

    render() {
        switch (this.state.pathname) {
            case '/':
            case '/search':
                return <Search />;
            default:
                return <Forecast id={this.state.pathname.replace('/', '')} />;
        }
    }
}



