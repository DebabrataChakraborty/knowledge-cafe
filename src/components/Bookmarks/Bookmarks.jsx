import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='md:w-1/3  bg-rose-200 rounded-lg ml-4'>
            <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            <h2 className='text-2xl font-bold text-center'>BookMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map( bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }

        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
    readingTime: PropTypes.number
};

export default Bookmarks;