import React from 'react';
import { connect } from 'dva';
import { userInfo } from 'os';
import { routerRedux } from 'dva/router';
import { Input,
  Icon,
  Button,
  message,

    } from 'antd';

class loadPage extends React.Component {
  user = {
    loginName:'bobo',
    password:'2732085ff',
  }

  state = {
    loginName:'',
    password:'',
  }

  loginClick = () => {
  
      if(this.state.loginName === this.user.loginName&&this.state.password === this.user.password){
        this.props.dispatch(routerRedux.push({pathname: '/homeOrdinary'}));
      }else{
        message.error('对不起，密码错误，请重新输入密码！')
      }
  }

  render() {
    return (   
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:10}}>
            <h1 style={{flex:1}}>登录</h1>
            <Input style={{flex:1,width:300,marginTop:10}} placeholder="账号" value={this.state.loginName} onChange={(value)=>
              this.setState({loginName:value.target.value})}/>
            <Input style={{flex:1,width:300,marginTop:10}} placeholder="密码" value={this.state.password} onChange={(value)=>
              this.setState({password:value.target.value})}/> 
              <Button type="primary"style={{flex:1,width:100,marginTop:10}} onClick={this.loginClick}><Icon type="login" />登录</Button>
          </div>
    )
  }
}

export default connect()(loadPage);