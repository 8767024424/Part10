import React from 'react';
import { Formik } from 'formik';
import { Button, TextInput, View, Text } from 'react-native';
import useSignIn from '../hooks/useSignIn';

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log("AUTH RESULT:", data);
    } catch (e) {
      console.log("AUTH ERROR:", e);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
          <TextInput
            placeholder="Username"
            value={values.username}
            onChangeText={handleChange('username')}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={values.password}
            onChangeText={handleChange('password')}
          />

          <Button onPress={handleSubmit} title="Sign in" />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
