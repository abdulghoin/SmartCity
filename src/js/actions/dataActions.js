// import Packages
import axios from 'axios'

export function getLocation() {
  return(dispatch)=>{
    dispatch({type: 'GET_LOCATION'})

    return axios.get('http://www.qlue.co.id/vacancy/svc/getDataExample.php')
    .then((res)=>{
      console.log(res);
      dispatch({type: 'GET_LOCATION_SUCCESS', payload: res.data})
      return Promise.resolve(res.data)
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch({type: 'GET_LOCATION_FAILED', payload: err.response})

      return Promise.reject(false)
    })
  }
}

export function getReport() {
  return(dispatch)=>{
    dispatch({type: 'GET_REPORT'})

    return axios.get('http://waze.qlue.id/jakarta/update/0atxn84I3hx2WmNm5ifPDZkJaLERZD9A.json')
    .then((res)=>{
      console.log(res);
      dispatch({type: 'GET_REPORT_SUCCESS', payload: res.data.alerts})
      return Promise.resolve(res.data)
    })
    .catch((err)=>{
      console.log(err.response);
      dispatch({type: 'GET_REPORT_FAILED', payload: err.response})

      return Promise.reject(false)
    })
  }
}
