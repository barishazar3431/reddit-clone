import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import NotificationBadge from '../ui/NotificationBadge';

type Props = {};

export default function NotificationsDropDown({}: Props) {
  return (
    <NotificationBadge content={12}>
      <button className="hover:bg-neutral-200 dark:hover:bg-neutral-800 p-1">
        <AiOutlineBell className="" />
      </button>
    </NotificationBadge>
  );
}
