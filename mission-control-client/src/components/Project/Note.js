import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

import styles from '../../styles/notes.module.scss';

export default ({
  note: { author, title, body, rating, attachment, attendees, tags },
}) => {
  const [expanded, setExpanded] = useState(false);
  const { avatar, firstName } = author;
  console.log(attendees);
  return (
    <section>
      <div className={styles['avatar-container']}>
        <img src={avatar} alt={firstName} className={styles['avatar']} />
      </div>
      <div className={styles['note-container']}>
        <div className={styles['note-header']}>
          {title}
          <Rating name="rating" value={rating} readOnly />
        </div>
        <div className={styles['note-body']}>{body}</div>
        <div className={styles['note-footer']}>
          <div
            className={expanded ? styles['expanded'] : styles['linear']}
            onClick={() => setExpanded(!expanded)}
          >
            {attendees.map(attendee => {
              return (
                <div className={styles['mini-avatar-container']}>
                  <img src={attendee.avatar} />
                  <p>
                    {attendee.firstName} {attendee.lastName}
                  </p>
                </div>
              );
            })}
          </div>
          <button className={styles['edit-note-btn']}>Edit</button>
        </div>
      </div>
    </section>
  );
};
