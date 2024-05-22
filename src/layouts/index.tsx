import React, { Fragment } from 'react';

import { history } from 'umi';

class BasicLayout extends React.Component {
  changePath = ({}) => {
    //路由跳转
    history.push('/home');
  };

  render() {
    return (
      <Fragment>
        <div>{this.props.children}</div>
      </Fragment>
    );
  }
}

export default BasicLayout;
