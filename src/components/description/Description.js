import React from 'react'
import { useParams } from 'react-router-dom'

const Description = ({articls}) => {

  const params = useParams()
  console.log(params)

  const LesArticles = articls.find(el => el.id === +params.id)
  console.log(LesArticles) 
  return (
    <div>
        <img src={LesArticles.img} alt=''/> 
        {LesArticles.description}
    </div>
  )
}

export default Description