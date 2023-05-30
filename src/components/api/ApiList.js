import React , {useEffect, useState} from 'react'
import axios from 'axios'
import ApiCard from './ApiCard'
import '../ArticlList/articlsList.css'




const ApiList = () => {
  
  const [apis , setApis] = useState([])
  


  useEffect (()=> {
    axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4eaf5381cf8146d78ed4aed7fb5f93ce')
    .then ( elm => {
      setApis(elm.data.articles)
    })
    .catch (error => {
      console.log(error)
    })

},[])

console.log("useEffect")
  
  
    return (
      
      <div className="allList">
        <div className="list">
            {
              apis.map((el , i) => <ApiCard el={el} key={i}></ApiCard>)
            }
        </div>
      </div>
  )
}

export default ApiList