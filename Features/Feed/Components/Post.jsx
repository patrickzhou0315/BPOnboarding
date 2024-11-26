import PropTypes from 'prop-types';
import { Text } from 'react-native';

export default function Post({username, body, time}) {
  return (
    <>
    <Text>
      Author:
      {' '}
      {username}
    </Text>
    <Text>
      Body:
      {' '}
      {body}
    </Text>
    </>
  );
}

Post.propTypes = {
    username: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  };