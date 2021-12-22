/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

export default function WorktimeList({ worktime } : { worktime: string[] }): JSX.Element {
  const [worktimeOpen, setWorktime] = useState(false);

  return (
    <section className="point-worktime__list" onClick={() => setWorktime(!worktimeOpen)}>
      <ul className={`worktime-list ${worktimeOpen ? 'worktime-list_open' : ''}`}>
        {
          worktime.map((time) => <li className="worktime-list__item" key={time}>{time}</li>)
        }
      </ul>
      <i className={`arrow ${worktimeOpen ? 'arrow_up' : 'arrow_down'}`} />
    </section>
  );
}
