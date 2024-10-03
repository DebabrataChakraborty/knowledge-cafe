import PropTypes from 'prop-types';
import {  FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handleAddToBookmark,  handleMarkAsRead }) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='md:w-2/3 mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>

                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />

                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='text-orange-500'>{posted_date}</p>

                    </div>

                </div>

                <div>
                    <span className='text-blue-500'>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text -2xl text-blue-400'><FaBookmark></ FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl text-gray-500'>{title}</h2>
            <p>{
                hashtags.map((hash, idx) => <span className='text-blue-700 ml-4' key={idx}><a href="">{hash}</a></span>)
            }
            </p>
            <button className='text-purple-600 font-bold underline' onClick={() =>  handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        author_img: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;