import React, {Component} from 'react';

import ForceUpdateExample from "./03/ForceUpdateExample";
import LifecycleExample from "./03/LifecycleExample";
import Counter from "./03/Counter";
import NewCounter from "./03/NewCounter";


class App extends Component {
    constructor(props){
        super(props);
        this.state = {count : 10};
        this.resetCount = this.resetCount.bind(this);
    }

    resetCount() {
        this.setState( ({count}) => ({count: count + 10}));
    }

    componentDidMount() {
        this.setState({hasDestroyed : true});
    }

    render() {
        return (
            <div>
                <div><Counter count={this.state.count}></Counter></div>
                <div><NewCounter count={this.state.count}/></div>
                <button onClick={this.resetCount}>{this.state.count + 10} 으로 초기화</button>
            </div>
        );
    }
}

export default App;