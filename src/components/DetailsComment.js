import React from  'react';
import styles from  './DetailsComment.css';
import {Icon} from  'antd';
const DetailsComment = (data) => {
  const {replies, author} = data;
  const item = replies.map(function (item, index) {
    return (
      <div className={styles.item} key={index}>
        <div className={styles.head}>
          {/*<div className={styles.author}>*/}
            <img src={item.author.avatar_url} alt={item.author.loginname}/>
            <div>{item.author.loginname}</div>
          {/*</div>*/}
          <div className={styles}>{item.create_at.slice(0,item.create_at.indexOf('T'))}</div>
          <div></div>
          <Icon type="like"></Icon>
        </div>
        <div className={styles.content} key={index} dangerouslySetInnerHTML={{__html: item.content}}/>
      </div>
    )
  })
  return (
    <div className={styles.replies}>
      <div className={styles.titleHead}>
        评论区
      </div>
      <div>
        {item}
      </div>
    </div>
  )
};
DetailsComment.propTypes = {};
export default DetailsComment;
