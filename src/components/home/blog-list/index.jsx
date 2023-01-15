import React from "react";
import BlogItem from './blog-item';
import './styles.css';

const BlogList = ({ blogs}) => {
    return(
        <div className='blog-list-wrap'>
            {blogs.map((blog) =>(
                <BlogItem blog={blog} />
            ))}
        </div>
    );
            
};

export default BlogList;