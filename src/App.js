import React, {Component} from 'react';

import ForceUpdateExample from "./03/ForceUpdateExample";
import LifecycleExample from "./03/LifecycleExample";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {hasDestroyed: false };
    }

    componentDidMount() {
        this.setState({hasDestroyed : true});
    }

    render() {
        return (
            <div>
                {this.state.hasDestroyed ?  null : <LifecycleExample/>}
            </div>
        );
    }
}

export default App;