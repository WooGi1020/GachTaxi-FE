import { Link } from 'react-router-dom';
import ChatIcon from '@/assets/icon/chattingRoomIcon.svg?react';

const ChatLinkButton = ({ chattingRoomId }: { chattingRoomId: string }) => {
  return (
    <Link
      className="px-4 py-3 flex items-center justify-center rounded-full bg-black text-white"
      to={`/chat/auto/${chattingRoomId}`}
    >
      <ChatIcon className="mr-5" />
      <p className="mr-5 font-medium text-captionHeader">
        진행중인 매칭 채팅방 들어가기
      </p>
    </Link>
  );
};

export default ChatLinkButton;
