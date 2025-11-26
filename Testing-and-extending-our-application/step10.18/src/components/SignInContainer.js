import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => onSubmit(values)} // ensure only values are sent
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            testID="usernameInput"
          />
          <TextInput
            placeholder="Password"
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry
            testID="passwordInput"
          />
          <Button
            onPress={handleSubmit}
            title="Sign In"
            testID="submitButton"
          />
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;
