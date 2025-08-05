import React from 'react';
import { Link } from 'react-router-dom';

function BlogPost({ id, title, content }) {
  return (
    <article style={{ borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <h2>
        <Link to={`/blog/${id}`} style={{ textDecoration: 'none', color: '#333' }}>
          {title}
        </Link>
      </h2>
      <p>{content.substring(0, 100)}...</p>
    </article>
  );
}

export default BlogPost;
