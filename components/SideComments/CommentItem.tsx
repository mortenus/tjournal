import React from 'react';
import Link from 'next/link';

import styles from './SideComments.module.scss';

interface CommentItemProps {
  user: {
    id: number;
    fullname: string;
  };
  text: string;
  post: {
    title: string;
    id: number;
  };
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
          alt="User Avatar"
        />
        <Link href={`profile/${user.id}`}>
          <a>
            <b>{user.fullname}</b>
          </a>
        </Link>
      </div>
      <p className={styles.text}>{text}</p>
      <Link href={`/news/${post.id}`}>
        <a>
          <span className={styles.postTitle}>{post.title}</span>
        </a>
      </Link>
    </div>
  );
};

export default CommentItem;
