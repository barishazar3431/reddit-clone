import React from 'react';
import MainPageLayout from '../layouts/MainPageLayout';
import HomeAside from '../components/post/HomeAside';
import PostItem from '../components/post/PostItem';
import TwoColumnLayout from '../layouts/TwoColumnLayout';
import CreatePost from '../components/post/CreatePost';
import PostList from '../components/post/PostList';
import Container from '../components/ui/Container';

function HomePage() {
  return (
    <section className="mt-3">
      <Container>
        <TwoColumnLayout
          left={
            <>
              <CreatePost />
              <main>
                <PostList />
              </main>
            </>
          }
          right={<HomeAside />}
        />
      </Container>
    </section>
  );
}

export default HomePage;
