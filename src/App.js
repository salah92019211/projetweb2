
import './App.css';
import ArticleList from './components/ArticlList/ArticleList';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Description from './components/description/Description';
import Contact from './components/Contact/Contact'
import Favorites from './components/favorites/Favorites';
import ApiList from './components/api/ApiList';


function App() {

  const articls = useSelector(state => state.articleReducers.articles )





  return (
    <div className="App">
      
      <Header/>

      <Routes>
        <Route path='/' element = {<ArticleList articls={articls}/>}  />
        <Route path='/description/:id' element = {<Description articls={articls} />} />
        <Route path='/ContactUs' element = {<Contact/>} /> 
        <Route path='/favorites' element = { <Favorites articls={articls}/> } />
        <Route path='/moreArticles' element = { <ApiList/> } />
        <Route path='*' element = {<h1> worng lik </h1>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
