import React, {Component} from 'react';

import ForceUpdateExample from "./03/ForceUpdateExample";
import LifecycleExample from "./03/LifecycleExample";
import Counter from "./03/Counter";
import NewCounter from "./03/NewCounter";
import ListExample from "./03/ListExample";


class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <ListExample/>
            </div>
        );
    }
}

export default App;