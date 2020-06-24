import React, {Component} from 'react';

import ForceUpdateExample from "./03/ForceUpdateExample";
import LifecycleExample from "./03/LifecycleExample";


class App extends Component {
    render() {
        return (
            <div>
                {/*<ForceUpdateExample/>*/}
                <LifecycleExample/>
            </div>
        );
    }
}

export default App;