import React from 'react';
import logo from '../img/logo.png';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as auth from '../store/reducers/newauth';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
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
                        <h2 className="menu-item" onClick={this.login}>로그인</h2>
                    </div>
                </div>

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
    async login() {
        await this.props.Auth.obtainToken({ username: 'rove', password: '2019openhack' })
        if(this.props.error === true)
            console.log('error닷')
        else 
            console.log(this.props.username)
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



export default connect(
    (state) => ({
        loading: state.pending,
        error: state.error,
        useruni: state.data.useruni,
        username: state.data.username
    }),
    (dispatch) => ({
        Auth: bindActionCreators(auth, dispatch)
    })
)(Header);