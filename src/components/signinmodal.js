import React from 'react';

import * as Auth from '../store/actions/newauth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class SigninModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.usernameHandleChange = this.usernameHandleChange.bind(this)
        this.passwordHandleChange = this.passwordHandleChange.bind(this)
        this.login = this.login.bind(this)
    }
    usernameHandleChange(event) {
        this.setState({username: event.target.value});
    }
    passwordHandleChange(event) {
        this.setState({password: event.target.value});
    }
    async login() {
        await this.props.Auth.obtainToken(this.state)

        if(this.props.error === true)
            console.log('일시적 서버 오류입니다 관리자한테 call')
        else {
            this.props.afterSuccessLogin();
        }
    }
    blockPropagate(event) {
        event.stopPropagation();
    }
    render() {
        return (
            <div className="signin-modal" onClick={this.props.closeSigninModal}>
                <div className="auth-modal-body" onClick={this.blockPropagate}>
                    <input placeholder="User ID" type="text" value={this.state.username} onChange={this.usernameHandleChange}/>
                    <label htmlFor="password"></label>
                    <input placeholder="Password" type="password" value={this.state.password} onChange={this.passwordHandleChange}/>
                    <button className="login-button" onClick={this.login}><b>로그인</b></button>
                    <div style={{ padding: '50px 0px 0px 100px', color: 'white' }}>비밀번호를 잊으셨나요? | <b style={{ color: '#FDC335' }}>회원가입</b></div>
                </div>
                <style jsx>{` 
                .signin-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
            
                    z-index: 3;
            
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            
                .auth-modal-body {
                    width: 400px;
                    height: 400px;
                    padding-top: 50px;
                    background-color: #6A4CEF;
                    opacity: 0.8;
            
                    border-radius: 30px;
                }
                ::placeholder {
                    color:white;
                }
            
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
            
                    height: 100%;
            
                    border: 1px solid black;
                }
            
                label, input {
                    display: block;
                    width: 60%;
                    height: 40px;
                    margin: auto;
                }
            
                input {
                    background-color: #6A4CEF;
                    color:white;
                    border: 0;
                    outline: 0;
                    border-bottom: 2px solid #FDC335;
                }
            
                .login-button {
                    margin-top: 50px;
                    margin-left: 100px;
                    width: 200px;
                    height: 50px;
                    border-radius: 10px;
                    background-color: #FDC335;
                    color:white;
                    font-size:17px;
                }
            
                input[type="text"], input[type="password"], textarea, select {
                    outline: none;
                }
                `}</style>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        loading: state.pending,
        error: state.error,
    }),
    (dispatch) => ({
        Auth: bindActionCreators(Auth, dispatch)
    })
)(SigninModal);


// const mapDispatchToProps = (dispatch) => ({
//     obtainToken(context) { dispatch(obtainToken(context)) }
// });

// export default connect(mapDispatchToProps)(SigninModal);



// const mapStateToProps = (state) => ({
//     jwt: state.jwt,
//     username: state.username,
//     useruni: state.useruni,
//     endpoints: state.endpoints,
// });

// const mapDispatchToProps = (dispatch) => ({
//     obtainToken(context) {
//         dispatch(obtainToken(context));
//     }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Header);