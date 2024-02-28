import React from 'react';
import Container from '../ui/Container';
import { Link, useParams } from 'react-router-dom';

type Props = {};

export default function SubredditHeader({}: Props) {
  return (
    <div>
      <div className="bg-blue-600 h-24"></div>
      <div className="bg-white dark:bg-neutral-900 py-1">
        <Container>
          <div className="flex gap-7 items-center -translate-y-5 xs:translate-y-0">
            <SubredditHeaderLink />
            <button className="btn-secondary-outline px-8">Join</button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export function SubredditHeaderLink() {
  const { subredditId: subredditName } = useParams();
  return (
    <Link to={`/r/${subredditName}`} className="flex items-center gap-5 xs:gap-0">
      <div className="bg-white dark:bg-neutral-900 rounded-full">
        <img
          src="https://styles.redditmedia.com/t5_2w844/styles/communityIcon_krq4riav5m191.png?width=256&s=3bb045009d2a9d1d7543dc7afb7b53a0e6f18121"
          alt=""
          className="w-24 h-24 p-2 xs:hidden"
        />
      </div>
      <span className="text-3xl font-bold dark:text-neutral-200">
        r/{subredditName}
      </span>
    </Link>
  );
}
