import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.componentt';

import SignIn from './routes/sign-in/SignIn';

const Shop = () => {
  return <div>Shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
};

export default App;
