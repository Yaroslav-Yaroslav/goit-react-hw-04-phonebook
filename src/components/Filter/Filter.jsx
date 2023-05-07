import PropTypes from 'prop-types';
import { InputLabel } from './Filter.styled';
export const Filter = ({ onChange, value }) => {
  return (
    <InputLabel>
      Find contacts by name
      <input type="text" onChange={onChange} value={value}></input>
    </InputLabel>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
