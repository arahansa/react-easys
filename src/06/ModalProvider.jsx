import React, {PureComponent} from 'react';
import Modal from './Modal';
import Text from "../04/Text";
import Button from "../04/Button";

const {Provider, Consumer} =React.createContext({});
export {Consumer};

class ModalProvider extends PureComponent{
    constructor(props){
        super(props);
        console.log('모달 프로바이더 생성되었습니다. in ModalProvider')

        this.state = {showModal: false};
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.consoleLog = this.consoleLog.bind(this);
    }

    handleClose(){
        this.setState({showModal: false});
    }
    handleOpen(){
        console.log('핸들 오픈?')
        this.setState({showModal: true});
    }

    consoleLog(){
        console.log('콘솔로그..?')
    }

    render(){
        return(
            <Provider value={{openModal: this.handleOpen, closeModal: this.handleClose, consoleLog: this.consoleLog}}>
                {this.props.children}
                {this.state.showModal && (
                    <Modal>
                        <div>
                            <Text>정말로 삭제 하시겠습니까?</Text>
                        </div>
                        <Button primary>예</Button>
                        <Button onPress={() => this.setState({showModal: false})}>닫기</Button>
                    </Modal>
                )}
            </Provider>
        )
    }
}

export default ModalProvider