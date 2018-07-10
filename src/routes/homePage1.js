import React from 'react';
import { connect } from 'dva';
import {
  Layout,
  Menu,
  Icon,
  Avatar,
  BackTop
  } from 'antd';
const { Header,Footer,Sider, Content } = Layout;
class homePage1 extends React.Component {
  state = {
    song:false
  }

  setMusic = () =>{
    this.setState({song:!this.state.song})
  }
  handleClick = (e) => {
    console.log('click ', e.key);
    // switch(e.key){
    //   case ordinary:

    // };
  };
  render() {
    return (
      <div>
        <BackTop style={{height:40,width:40,lineHeight:40,borderRadius:4,backgroundColor:'#1088e9',textAlign:'center',fontSize:20}}>
          <p style={{bottom:100}}>UP</p>
        </BackTop>
        <Layout>
          <Header style={{backgroundColor:'#aaffff',display:'flex'}}>
            <h1 style={{colour:'#1890ff',flex:8,marginLeft:30}}>我的家 </h1>
            <Menu mode='horizontal' onClick={this.handleClick} style={{flex:6,backgroundColor:'transparent',marginTop:3}}>
              <Menu.Item key='ordinary'>
                <Icon type='home'/>常规
              </Menu.Item>
                <Menu.Item key='alarm'>
                <Icon type='warning'/>警告
              </Menu.Item>
              <Menu.Item key='config'>
                <Icon type='setting'/>设置
              </Menu.Item>
              <Menu.SubMenu title={<span><Icon type='user'/>用户</span>}>
                <Menu.ItemGroup title='账号'>
                  <Menu.Item key='user'>
                    <Icon type='user'/>用户
                  </Menu.Item>
                  <Menu.Item key='passwd'>
                    <Icon type='lock'/>密码
                  </Menu.Item>
                </Menu.ItemGroup>
                <Menu.Divider/>
                <Menu.Item key='userconfig'>
                  <Icon type='setting'/>用户设置
                </Menu.Item>
                <Menu.Item key='quit'>
                  <Icon type="logout" />退出
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
            <Avatar style={{backgroundColor:'#87d068',marginLeft:30,marginTop:10}} icon='user'/>
          </Header>
            <Content>
              <img src='src/assets/picture/dht11.jpg' alt='DHT11-温湿度传感器'/>
              <h2>dht11:</h2>
                <div>
                  <h3>温度:NAN</h3>
                </div>
                <div>
                  <h3>湿度:NAN</h3>
                </div>
            </Content>
          <Footer>
            Footer
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default connect()(homePage1);