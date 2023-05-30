import React from 'react'
import FavArtic from './FavArtic'
import '../ArticlList/articlsList.css'





const Favorites = ({articls}) => {
  
    console.log(articls)
  
  return (
    <div className="allList">
    <div className="list">
        {
           articls.map((el , i) => el.iLike && <FavArtic el = {el}/> )
        
        
        }

    </div>
    </div>
  )
}

export default Favorites


{/* <div className="allList">
      <div className="list">
        {articls.map((el, i) => (<Article el={el} key={i} />))}
      </div>
    </div> */}