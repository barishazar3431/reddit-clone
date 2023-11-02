import React from 'react';
import SubredditHeader from '../../components/subreddit/SubredditHeader';
import TwoColumnLayout from '../../layouts/TwoColumnLayout';
import PostList from '../../components/post/PostList';
import AboutSubreddit from '../../components/subreddit/AboutSubreddit';
import Container from '../../components/ui/Container';
import CreatePost from '../../components/post/CreatePost';

type Props = {};

export default function SubredditPage({}: Props) {

  return (
    <section className="">
      <SubredditHeader />
      <div className='mt-7'>
        <Container>
          <TwoColumnLayout
            left={
              <>
                <CreatePost />
                <PostList />
              </>
            }
            right={<AboutSubreddit />}
          />
        </Container>
      </div>
    </section>
  );
}
