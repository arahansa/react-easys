import React, {Component} from 'react';
import Counter2 from "./03/Counter2";



class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 1,
        }
        this.increaseCount = this.increaseCount.bind(this);
    }
    increaseCount() {
        this.setState( ({count}) => ({count:count+1}) );
    }

    render() {
        return (
            <div>
                <nav className="nav-wrapper">
                    <div>두잇! 리액트 시작하기</div>

                </nav>
            </div>
        );
    }
}

export default App;