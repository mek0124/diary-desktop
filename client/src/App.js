import { Routes, Route } from "react-router-dom";

import Header from './components/header';
import SideNavigation from './components/sideNavigation';

import Landing from './pages/landing';
import NewEntry from "./pages/newEntry";
import History from "./pages/history";
import Settings from "./pages/settings";
import Support from "./pages/support";


export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <Header />

      <div className="flex flex-row items-center justify-center w-full">
        <SideNavigation />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/new-entry" element={<NewEntry />} />
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};
