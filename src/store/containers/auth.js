import { connect } from 'react-redux';
import { obtainToken } from '../actions/auth';

const mapStateToProps = (state) => ({
    jwt: state.jwt,
    username: state.username,
    useruni: state.useruni,
    endpoints: state.endpoints,
});

const mapDispatchToProps = (dispatch) => ({
    obtainToken(context) {
        dispatch(obtainToken(context));
    }
});

export default connect(mapStateToProps, mapDispatchToProps);