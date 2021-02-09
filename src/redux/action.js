import axios from 'axios'   

export const waiting=()=>{
    return{
        type:'WAITING'
    }
}

export const failed=()=>{
    return{
        type:'FAILED'
    }
}

export const resultMovie=(data)=>{
    return{
        data,
        type:'RESULT'
    }
}

export const fetchData = (query)=>{
    if(query){
        return (dispatch) => {
          console.log("inside");
          dispatch(waiting());
          axios
            .get(
              "https://api.themoviedb.org/3/search/movie?api_key=b13bab03450826c5339d99c75777798d&language=en-US&page=1&include_adult=false&query=" +
                query
            )
            .then((res) => {
              console.log(res)
              dispatch(resultMovie(res.data));
            })
            .catch((err) => {
              console.log(err);
              dispatch(failed());
            });
        };
    }else{
        return (dispatch) => {
          dispatch(waiting());
          axios
            .get(
              `https://api.themoviedb.org/3/movie/popular?api_key=b13bab03450826c5339d99c75777798d&language=en-US&page=1`
            )
            .then((res) => {
              console.log(res, "get");
              dispatch(resultMovie(res.data));
            })
            .catch((err) => {
              dispatch(failed());
            });
        };
    }
}