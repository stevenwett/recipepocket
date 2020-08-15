import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const GroupList = ({groups}) => {
  if (groups) {
    return (
      <ul className="group-list">
        { groups && groups.map(group => {
          return (
            <li key={group.id}>
              <Link to={'/groups/' + group.id}>{group.name}</Link>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <p>You don't have any shared groups</p>
    )
  }
}

export default GroupList;
