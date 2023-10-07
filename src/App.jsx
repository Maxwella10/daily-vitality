import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index';
import Profile from './pages/Profile/index';
import Dashboard from './pages/Dashboard/index';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
