import React,{useState} from 'react'
import {Input,Button} from 'antd'
import './style.css'
import {fetchData} from '../../redux/action'
import { connect } from "react-redux";

function SearchBar(props) {
  const [query, setQuery] = useState()
  const handleQuery=(event)=>{
    const input = event.target;
    const value = input.value;
    setQuery(value)
  }
  const handleSubmit=(event)=>{
    event.preventDefault()
    setQuery(null)
  }
    return (
      <div>
        <form onSubmit={handleSubmit} id="search">
          <Input
            placeholder="Search Here"
            style={{ width: 150, borderRadius: "5px 0 0 5px" }}
            className="search-bar"
            onChange={handleQuery}
            value={query}
            allowClear
          />
          <Button
            type="primary"
            style={{
              backgroundColor: "#000000",
              borderRadius: "0 5px 5px 0",
              border: "#000000",
            }}
            id="submit"
            htmlType="submit"
            onClick={() => {
              props.fetchData(query);
            }}
          >
            search
          </Button>
        </form>
      </div>
    );
}

const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = {fetchData };
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);