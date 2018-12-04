import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';


class LoginUser extends Component{
    render() {
        return (
            <div>
                <ul>
                    <li>
                        {this.props.users.login}
                        <input type="submit" className="submit" value="Logout" onClick={ () => this.props.onLogout() }/>
                    </li>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = state => {
  return {
    users: state.usr.login,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch({
      type: actionTypes.USER_LOGOUT
    }),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginUser);






