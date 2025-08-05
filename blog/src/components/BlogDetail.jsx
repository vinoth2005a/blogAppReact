import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((post) => post.id === parseInt(id));

  if (!blog) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Posted on:</strong> {blog.date}</p>
      <p style={{ marginTop: '20px' }}>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
