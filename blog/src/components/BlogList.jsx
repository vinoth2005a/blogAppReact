import React from 'react';
import BlogPost from './BlogPost';
import blogs from '../data/blogs';

function BlogList() {
  return (
    <div>
      {blogs.map((post) => (
        <BlogPost key={post.id} id={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
