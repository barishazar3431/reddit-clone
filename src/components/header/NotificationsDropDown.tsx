import React from 'react';
import { AiOutlineBell } from 'react-icons/ai';
import NotificationBadge from '../ui/NotificationBadge';

export default function NotificationsDropDown() {
  return (
    <NotificationBadge content={9}>
      <button className='h-fit'>
        <AiOutlineBell className="" />
      </button>
    </NotificationBadge>
  );
}
