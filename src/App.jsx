import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpCard from './pages/SignUp';
import SignInCard from './pages/SignIn';
import Profile from './pages/Profile';
import Layout from './pages/Layout';
import Search from './pages/Search';
import Messages from './pages/Messages';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Bookmark from './pages/Bookmark';
import Activity from './pages/Activity';
import Gallery from './pages/Gallery';
import MySchedule from './components/Content/Schedule/MySchedule';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/schedule" element={<MySchedule/>} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/bookmark" element={<Bookmark />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/signin" element={<SignInCard />} />
          <Route path="/signup" element={<SignUpCard />} />
        </Routes>
  );
}

export default App;
