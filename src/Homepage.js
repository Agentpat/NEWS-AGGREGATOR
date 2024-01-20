import React from 'react'
import Header from './component/header/Header'
import Dashboard from './component/dashboard/Dashboard'
import NewsCategory from './component/newslist/NewsCategory'
import TopHeadline from './component/top-headline/Top-Headline'
import SmartWidget from './component/widgets/smartWidget/SmartWidget'

function Homepage() {
  return (
    <div>
        <Header/>
        <Dashboard/>
        <NewsCategory/>
        <TopHeadline/>
        <SmartWidget/>
    </div>
  )
}

export default Homepage