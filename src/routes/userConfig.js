import React from 'react';
import { connect } from 'dva';
import { routerRedux  } from 'dva/router';
import {
Input,
Button,
Switch
  } from 'antd';

class userConfig extends React.Component {
render() {
  return (
      <div >
          {/* <Switch/>*/}
      </div>
  )
}
}
export default connect()(userConfig);