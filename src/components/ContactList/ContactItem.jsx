import propTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactItem = ({ id, name, number, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      <li
        key={id}
        className={css.contactListItem}
        name={name}
        number={number}
      >
        {name}: {number}
      </li>
      <button
        type="button"
        className={css.contactListItemBtn}
        onClick={() => handleDelete(id)}
      >Delete</button>
    </ul>
  );
};

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  handleDelete: propTypes.func.isRequired,
};
