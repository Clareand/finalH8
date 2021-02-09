const data = {
  main: {
    result: [],
    loading: false,
    error: false,
  },
};

const reducer = (initialstate={...data},action)=>{
    switch(action.type){
        case 'WAITING':
            return{
                ...initialstate,
                main:{
                    ...initialstate.result,
                    loading:true,
                    error:false
                }
            }
        case 'FAILED':
            return{
                ...initialstate,
                main:{
                    ...initialstate.result,
                    loading:false,
                    error:true
                }
            }
        case 'RESULT':
            return{
                ...initialstate,
                main:{
                    ...initialstate.result,
                    loading:false,
                    error:false,
                    result:action.data.results
                }
            }
        default:
            console.log('here')
            return initialstate
    }
}

export default reducer