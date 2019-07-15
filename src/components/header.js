import React from 'react';
import logo from '../img/logo.png';

import * as auth from '../store/reducers/newauth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SigninModal from './signinmodal'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signinModalState: false,
            loginedUser: '로그인'
        }
        this.changeSigninModalState = this.changeSigninModalState.bind(this);
        this.afterSuccessLogin = this.afterSuccessLogin.bind(this);
    }
    afterSuccessLogin() {
        this.setState({
            loginedUser: this.props.username,
            signinModalState: false
        });
    }
    changeSigninModalState() {
        if(this.state.signinModalState === false)
            this.setState({signinModalState: true});
        else 
            this.setState({signinModalState: false});
    }
    
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="title-section">
                        <img src={logo} className="logo" />
                        <h2>Jokjebi</h2>
                    </div>
                    <div className="menu-section">
                        <h2 className="menu-item">스크랩한 족보</h2>
                        <h2 className="menu-item">족보 업로드</h2>
                        <h2 className="menu-item" onClick={this.changeSigninModalState}>{this.state.loginedUser}</h2>
                    </div>
                </div>
                {this.state.signinModalState && 
                    <SigninModal 
                        closeSigninModal = {this.changeSigninModalState}
                        afterSuccessLogin = {this.afterSuccessLogin}
                    />
                }
                <style jsx>{`
            .logo {
                height: 40px;
                padding-right: 15px;
            }
            .header {
                position: fixed;
                width: 100vw;
                height: 70px;

                display: flex;
                align-items: center;
                justify-content: center;
            }
            .header-content {
                width: 70%;
                display: flex;
                justify-content: space-between;
            }
            .title-section, .menu-section {
                color: rgb(152, 152, 152);
                display: flex;
                align-items: center;
            }
            .menu-item {
                font-size: 1em;
                padding: 0px 25px;
                margin-block-start: 0em;
                margin-block-end: 0em;
                line-height: 70px;
            }

            `}</style>
            </div >
        );
    }
}

export default connect(
    (state) => ({
        isLogin: state.newauth.isLogin,
        username: state.newauth.data.username,
        useruni: state.newauth.data.useruni,
    }),
    (dispatch) => ({
        Auth: bindActionCreators(auth, dispatch)
    })
)(Header);
