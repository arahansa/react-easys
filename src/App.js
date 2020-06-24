import React, {Component} from 'react';
import TodaysPlan from "./03/TodaysPlan";
import PropsComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";
import BooleanComponent from "./03/BooleanComponent";

class App extends Component {
    render() {
        return (
            <div>
                <div><b>지루할 때 : </b><BooleanComponent bored /></div>
                <div><b>지루하지 않을 때 : </b><BooleanComponent /></div>
            </div>
        );
    }
}

export default App;