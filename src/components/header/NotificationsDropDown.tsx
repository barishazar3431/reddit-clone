import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import NotificationBadge from '../ui/NotificationBadge';

export default function NotificationsDropDown() {
  return (
    <NotificationBadge content={9}>
      <button className="block p-1 hover:bg-neutral-200 dark:hover:bg-neutral-800">
        <AiOutlineBell className="" />
      </button>
    </NotificationBadge>
  );
}
