import React from 'react'
import dummyData from '../../assets/DummyData'
import PostItem from './PostItem';

type Props = {}

export default function PostList({}: Props) {

  const posts = dummyData.posts;

  return (
    <div className='flex flex-col gap-3 mt-5'>
      {posts.map(post => (
        <PostItem
          {...post}
        />
      ))}
      </div>
  )
}