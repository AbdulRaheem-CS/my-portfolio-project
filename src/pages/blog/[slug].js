// pages/blog/[slug].js
import React from 'react';

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  // Your data fetching logic
  const post = {
    title: 'Sample Post',
    content: '<p>This is a sample post content.</p>',
  };
  return { props: { post } };
}

export async function getStaticPaths() {
  // Only one return statement needed
  const paths = [{ params: { slug: 'sample-post' } }];
  return { paths, fallback: false };
}