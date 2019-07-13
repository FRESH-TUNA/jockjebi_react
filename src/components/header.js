import React from 'react';
import logo from '../img/logo.png';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import SigninModal from './signinmodal'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signinModalState: false
        }
        this.changeSigninModalState = this.changeSigninModalState.bind(this);
    }

    changeSigninModalState() {
        if(this.state.signinModalState === false)
            this.setState({signinModalState: true});
        else
            this.setState({signinModalState: false});
    };

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
                        <h2 className="menu-item" onClick={this.changeSigninModalState}>로그인</h2>
                    </div>
                </div>
                {this.state.signinModalState && <SigninModal closeSigninModal = {this.changeSigninModalState}/>}
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
export default Header;
// export default connect(
//     (state) => ({
//         loading: state.pending,
//         error: state.error,
//         useruni: state.data.useruni,
//         username: state.data.username
//     }),
//     (dispatch) => ({
//         Auth: bindActionCreators(auth, dispatch)
//     })
// )(Header);