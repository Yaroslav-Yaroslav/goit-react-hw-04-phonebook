import PropTypes from 'prop-types';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { List, Item, Button } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <Item key={id}>
        {name}: {number}
        <Button type="button" aria-label="Delete" onClick={() => onDelete(id)}>
          Delete <RiDeleteBin5Line />
        </Button>
      </Item>
    ))}
  </List>
);
ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
