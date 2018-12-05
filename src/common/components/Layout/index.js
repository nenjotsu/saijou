import React from 'react';
import Layout from 'antd/lib/layout';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
// import 'antd/lib/layout/style/css';

const { Content } = Layout;

const ContentLayout = props => (
  <div>
    <Layout>
      <MyHeader />
      <Layout>
        <Content>{props.children}</Content>
      </Layout>
      <MyFooter />
    </Layout>
  </div>
);

export default ContentLayout;
