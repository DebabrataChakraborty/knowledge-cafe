import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const { title } = bookmark;
    return (
        <div className='mt-4 p-4 bg-slate-500 rounded-xl'>
          <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default Bookmark;
