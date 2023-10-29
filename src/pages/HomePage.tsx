import React from 'react';
import MainPageLayout from '../layouts/MainPageLayout';
import HomeAside from '../components/post/HomeAside';
import PostItem from '../components/post/PostItem';
import TwoColumnLayout from '../layouts/TwoColumnLayout';

function HomePage() {
  return (
    <TwoColumnLayout
      left={
        <>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </>
      }
      right={<HomeAside />}
    />
  );
}

export default HomePage;
