import React from 'react';
//Booklistをimport
import Booklist from './components/Booklist';
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios'; 
// import style from '../src/index.css'

const App = () => {
  const languages = ['React', 'Vue','Angular',"Swift","Python","JavaScript"];
  // 入力値に`books`を追加して出力するシンプルな関数を定義
  const getDataFromAPI = async keyword => {
    const requestUrl ='https://www.googleapis.com/books/v1/volumes?q=intitle:'
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Google Books API</h1>
        <ul class = "programing"> 
          <li><Link to="/">React</Link></li>
          <li><Link to="/vue">Vue</Link></li>
          <li><Link to="/angular">Angular</Link></li>
          <li><Link to="/Swift">Swift</Link></li>
          <li><Link to="/Python">Python</Link></li>
          <li><Link to="/JavaScript">JavaScript</Link></li>
        </ul>
        <hr /> 
        <Route 
          exact 
          path = "/" 
          render={
            props => 
              <Booklist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          } 
        />
        <Route
          exact
          path="/vue"
          render={
            props =>
              <Booklist
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          exact
          path="/angular"
          render={
            props =>
              <Booklist
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          exact
          path="/Swift"
          render={
            props =>
              <Booklist
                language={languages[3]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          exact
          path="/Python"
          render={
            props =>
              <Booklist
                language={languages[4]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route
          exact
          path="/JavaScript"
          render={
            props =>
              <Booklist
                language={languages[5]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
      </div>
    </BrowserRouter>
  );
}
export default App;
