import React, { useState } from 'react'
import Navbar from './components/Navbar'
import NewsApp from './components/NewsApp'
import NewsItem from './components/NewsItem'

const App = () => {
  const [category, setCategory] = useState("")

  return (
    <div>
     <Navbar setCategory={setCategory} />
     <NewsApp category={category}/>
     <NewsItem/>
    </div>
  )
}

export default App
