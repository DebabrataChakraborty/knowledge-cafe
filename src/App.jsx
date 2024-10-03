
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import { useState } from 'react'



function App() {
  const [bookmarks, setBookmarks] = useState( [] );
  const [readingTime, setReadingTime] = useState(0);
// handle bookmark
  const handleAddToBookmark = blog =>{
    console.log(blog);

    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // handle markasread time

  const handleMarkAsRead = time => {
    console.log(typeof(time))
    const newReadingTime = readingTime + parseInt(time);
    console.log(newReadingTime)
    setReadingTime(newReadingTime);

  }

  



  return (
    <>
     <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>

      </div>


    </>
  )
}

export default App
