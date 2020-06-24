import React, {Component} from 'react';
import TodaysPlan from "./03/TodaysPlan";
import PropsComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";

class App extends Component {
    render() {
        return (
            <div>
                <ChildComponent
                    boolValue={true}
                    numValue={1}
                    arrayValue={[1,2,3]}
                    objValue={{name:'제목', age: 30}}
                    nodeValue={<h1>노드</h1>}
                    funcValue={() => console.log('메시지')}
                >
                </ChildComponent>
            </div>
        );
    }
}

export default App;