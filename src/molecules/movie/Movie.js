import React,{useEffect} from 'react'
import {Col,Row,Card} from 'antd'
import image from '../../assets/image/not_available_3_2.jpg'
import moment from "moment";

const { Meta } = Card;
const baseUri = "http://image.tmdb.org/t/p/w185/";

export default function Movie(props) {
    return (
      <div>
        <Row>
          {props.data.map((movie) => (
            <Col xs={{ span: 24 }} lg={{ span: 5, offset: 1 }}className="gutter-row">
              <Card hoverable cover={<img alt="" src={movie.poster_path!=null? baseUri + movie.poster_path : image}/>} className="center-meta">
                <p className="center-meta">{movie.title}</p>
                <Meta description={movie.release_date !=null? moment(movie.release_date).format("dddd, MMMM Do YYYY"):'Unknown Date'} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
}
