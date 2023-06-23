import React, { useState,useEffect } from 'react'
import NewsItem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({category,country,setProgress,apiKey}) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [disable, setDisable] = useState(false)
  // const [pageSize, setPageSize] = useState(30)
  const [totalResults, setTotalResults] = useState(0)

  document.title = `${capitalizeFirstLetter(category)}`



  useEffect(() => {
    const updateNews = async () => {
      setLoading(true)
      setProgress(10)
      // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
      const response = await fetch(`https://gnews.io/api/v4/top-headlines?token=${apiKey}&topic=${category}&country=${country}`)
      // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=95bda187d523418cb8a6af0af85c3152`)
      // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea5f1105108d4158a79447ec8db309f4`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setProgress(40)
      const data = await response.json()
      setProgress(100)

      setArticles(data.articles);
      setTotalResults(data.totalResults)
      setLoading(false)
    }
    updateNews()
  },[apiKey,category,country,setProgress])


  const fetchMoreData = async () => {
    setPage(page + 1)
    // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}`)
      const response = await fetch(`https://gnews.io/api/v4/top-headlines?token=${apiKey}&topic=${category}&country=${country}&page=${page}`)
      // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=95bda187d523418cb8a6af0af85c3152&page=${page}`)
    // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ea5f1105108d4158a79447ec8db309f4&page=${page}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json()
    setTotalResults(data.totalResults)
    setArticles(articles.concat(data.articles));
    if (data.articles.length !== 0) {
      setDisable(true)
    } else {
      setDisable(false)
    }
  }

  return (
    <>
      <h2 className='text-center' style={{marginTop: '63px'}}>NewsDose - Top {capitalizeFirstLetter(category)} Headlines</h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={disable && <Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return <div className="col-md-4" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 100) : " "} description={element.description ? element.description.slice(0, 200) : ""} imageUrl={element.image} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                {/* <NewsItem title={element.title.slice(0, 100)} description={element.summary.slice(0, 200)} imageUrl={element.media} newsUrl={element.link} /> */}
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  category: 'business'
}
News.propTypes = {
  country: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default News
