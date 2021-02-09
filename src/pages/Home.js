import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/action";
import { Layout, Menu, Breadcrumb, Row, Col, Result, Typography,Spin } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import "../assets/style.css";
import SearchBar from "../molecules/search/SearchBar";
import Movie from "../molecules/movie/Movie";
const { Paragraph, Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;

function Home(props) {
  const { fetchData } = props;
  useEffect(() => {
    fetchData();
  }, []);
console.log(props,'props in home');
  return (
    <Layout className="layout">
      <Header className="header" style={{ backgroundColor: "#fb3901" }}>
        <Row>
          <Col md={12}>
            <div>
              <h1 style={{ color: "white" }}>FinProH8</h1>
            </div>
          </Col>
          <Col md={12}>
            <div className="float-right desktop">
              <SearchBar/>
            </div>
          </Col>
        </Row>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Row>
          <div className="big-blue title-maps-container">
            Show Your Favorite Movie
          </div>
        </Row>
        <Row style={{ padding: "2vh 0" }}>
          <div className="mobile">
            <SearchBar />
          </div>
        </Row>
        <div className="site-layout-content">
          {props.main.error ? (
            <div>
              <Result
                status="error"
                icon={<CloseCircleOutlined />}
                title="Fetch Failed"
                subTitle="Something Went Wrong"
              />
            </div>
          ) : props.main.loading && !props.main.error ? (
            <div className="center">
              <Spin size="large" tip="Loading Data..."></Spin>
            </div>
          ) : (
            <div>
              <Movie data={props.main.result} />
            </div>
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>FinProH8 by Clare</Footer>
    </Layout>
  );
}
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = { fetchData };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
