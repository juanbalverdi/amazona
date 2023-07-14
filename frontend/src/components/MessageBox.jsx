import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

export const MessageBox = (props) => {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
};

MessageBox.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};
