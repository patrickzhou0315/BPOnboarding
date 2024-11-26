import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';


export default function PostDetails({navigation, route}) {
  const { username, body, time } = route.params;
  const navigateToFeed = () => {
    navigation.navigate("Feed");
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detailed Post</Text>
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
      <Text>
        Time:
        {' '}
        {time}
      </Text>
      <Button
        title="To Feed"
        onPress={navigateToFeed}
      />
    </View>
  );
}

PostDetails.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    route: PropTypes.shape({
      params: PropTypes.shape({
        post: PropTypes.shape({
          _id: PropTypes.number.isRequired,
          username: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          time: PropTypes.string.isRequired,
        }),
      }).isRequired,
    }).isRequired,
  };