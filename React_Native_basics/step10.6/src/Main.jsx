import { Routes, Route } from 'react-router-native';
import RepositoryList from './components/RepositoryList';
import SignIn from './components/SignIn';
import AppBar from './components/AppBar';

const Main = () => {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default Main;
