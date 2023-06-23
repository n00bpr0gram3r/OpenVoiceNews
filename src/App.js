import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
const App = () => {
  // const apiKey = process.env.REACT_APP_API_NEWS_KEY
  // const apiKey = process.env.REACT_APP_API_NEWS_KEY_MEDIA
  const apiKey = process.env.REACT_APP_API_NEWS_KEY_GNEWS
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <div>
          <Navbar />
          <LoadingBar
            height={2}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='hey' country='in' />}></Route>
            <Route path='/home' element={<News setProgress={setProgress} apiKey={apiKey} key='home' country='in' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' country='in' category='technology' />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' country='in' category='health' />}></Route>
            <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key='general' country='in' category='general' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key='entertainment' country='in' category='entertainment' />}></Route>
            <Route exact path='/about' element={<About />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
