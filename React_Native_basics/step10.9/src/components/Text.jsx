import { Text as NativeText, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});

const Text = ({ style, ...props }) => {
  const textStyle = [styles.text, style];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;
