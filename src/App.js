import React, {Component} from 'react';
import ChildComponent2 from "./03/ChildComponent2";


class App extends Component {
    render() {
        return (
            <div>
                <ChildComponent2 objValue={{age: '20살'}} requiredStringValue={'hi'}/>
            </div>
        );
    }
}

export default App;