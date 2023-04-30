import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { Main } from './pages/Main/Main';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { NotFound } from './pages/NotFound/NotFound';
import { Forms } from './pages/Forms/Forms';

export const App = () => {
  return <div>Hello App</div>;
};

// export const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Main />} />
//           <Route path="about" element={<AboutUs />} />
//           <Route path="forms" element={<Forms />} />
//           <Route path="*" element={<NotFound />} />
//         </Route>
//       </Routes>
//     </>
//   );
// };

export default App;
