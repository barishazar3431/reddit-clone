import React from 'react';
import Header from '../layouts/Header';
import MainLayout from '../layouts/MainLayout';
import HomeAside from '../components/main-feed/HomeAside';
import PostItem from '../components/main-feed/PostItem';

function HomePage() {
  return (
    <MainLayout>
      <div className="flex justify-center items-start gap-5 px-3 py-5">
        <div className="w-[640px] lg:flex-1 flex-shrink flex flex-col gap-3">
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
        </div>
        <div className="w-[310px] lg:hidden">
          <HomeAside />
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
