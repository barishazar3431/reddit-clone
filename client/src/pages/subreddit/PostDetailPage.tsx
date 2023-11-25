import React from 'react';
import SubredditHeader from '../../components/subreddit/SubredditHeader';
import TwoColumnLayout from '../../layouts/TwoColumnLayout';
import PostItem from '../../components/post/PostItem';
import dummyData from '../../assets/DummyData';
import AboutSubreddit from '../../components/subreddit/AboutSubreddit';
import Container from '../../components/ui/Container';
import AddCommentForm from '../../components/post/AddCommentForm';
import PostComment from '../../components/post/PostComment';

export default function PostDetailPage() {
  const left = (
    <div className="bg-white dark:bg-neutral-900 pb-3">
      <PostItem {...dummyData.posts[0]} isClickable={false} />
      <div className="px-9 mt-6">
        <AddCommentForm />
      </div>
      <div className='mt-8'>
        <PostComment>
          <PostComment>
            <PostComment />
          </PostComment>
          <PostComment />
        </PostComment>
        <PostComment />
      </div>
    </div>
  );

  return (
    <>
      <SubredditHeader />
      <div className="mt-3">
        <Container size="lg">
          <TwoColumnLayout left={left} right={<AboutSubreddit />} />
        </Container>
      </div>
    </>
  );
}
