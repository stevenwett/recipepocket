import React from 'react'
import moment from 'moment';

const Activity = (props) => {
  const { activity } = props;
	return (
		<section>
      <h2>Recent activity</h2>
      <ul className="activity">
        { activity && activity.map(item => {
          return (
            <li key={item.id}>
              <strong>{item.user}</strong> {item.content} &ndash;<br />{ moment(item.time.toDate()).calendar() }
            </li>
          )
        })}
  		</ul>
    </section>
	)
}

export default Activity;
