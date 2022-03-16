import s from './ContactList.module.css';
import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';

export default class ContactList extends React.Component {
  state = {};

  render() {
    const fullList = this.props.findByName();

    return (
      <div className={s.container}>
        <ul className={s.ul}>
          {fullList.length < 1 ? (
            <p>We dont have contacts</p>
          ) : (
            fullList.map(el => (
              <ContactItem
                key={nanoid()}
                name={el.name}
                number={el.number}
                id={el.id}
                deleteContact={this.props.deleteContact}
              />
            ))
          )}
        </ul>
      </div>
    );
  }
}
// Statistics.propTypes = {
//   good: propTypes.number,
//   neutral: propTypes.number,
//   bad: propTypes.number,
// };
