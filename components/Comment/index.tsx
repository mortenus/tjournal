import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  key: number;
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({ key, user, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div key={key} className={styles.comment}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} alt="avatar" />
        <b>{user.fullname}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        elevation={3}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        keepMounted>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
