import Component from 'react'
import { connect } from 'react-redux';
import { obtainToken } from '../store/actions/auth';

class SigninModal extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
        };
    }
    render() {
        <div className="signin-modal" onClick={closeSigninModal}>
            <div className="auth-modal-body" onClick={blockPropagate}>
                <input placeholder="User ID" type="text" value={this.state.username}/>
                <label for="male"></label>
                <input placeholder="Password" type="password" value={this.state.password}/>
                <button style={{backgroundColor: 'black'}} className="loginbutton" onClick={login}><b>로그인</b></button>
                <div style={{padding: '50px 0px 0px 100px', color: 'white'}}>비밀번호를 잊으셨나요? | <b style={{color:'#FDC335'}}>회원가입</b></div>
            </div>
        </div>
    }
    blockPropagate(event) {
        event.stopPropagation();
    }
    login() {
        props.obtainToken(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    obtainToken(context) { dispatch(obtainToken(context)) }
});

export default connect(mapDispatchToProps)(SigninModal);
