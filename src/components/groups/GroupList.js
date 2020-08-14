import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const GroupList = ({groups}) => {
  return (
    <ul className="group-list">
      { groups && groups.map(group => {
        return (
          <li key={group.id}>
            <Link to={'/group/' + group.id}>{group.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default GroupList;
