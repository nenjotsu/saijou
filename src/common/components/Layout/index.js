import React from 'react';
import Layout from 'antd/lib/layout';
import Loadable from 'react-loadable';

// const Layout = Loadable({
//   loader: () => import('antd/lib/layout'),
//   loading: () => null
// });

const { Content, Header, Footer } = Layout;

const MyHeader = Loadable({
  loader: () => import('./MyHeader'),
  loading: () => null
});

const MyFooter = Loadable({
  loader: () => import('./MyFooter'),
  loading: () => null
});

const ContentLayout = props => (
  <div>
    <Layout>
      <Header className="main-header NavBar">
        <MyHeader />
      </Header>
      <Content>{props.children}</Content>
      <Footer className="main-footer bg-dark-maroon">
        <MyFooter />
      </Footer>
    </Layout>
  </div>
);

export default ContentLayout;
