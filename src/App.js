import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import NoMatchScreen from "./pages/NoMatchScreen";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <div data-test="app">
      <Provider store={store}>
        <MainNavigation />
        <Layout>
          <Routes>
            <Route exact path="/" element={<AllMeetupsPage />} />
            <Route exact path="favorites" element={<FavoritesPage />} />
            <Route exact path="meetup-form" element={<NewMeetupsPage />} />

            {/* Using path="*"" means "match anything", so this route
                      acts like a catch-all for URLs that we don't have explicit
                      routes for. */}
            <Route path="*" element={<NoMatchScreen />} />
          </Routes>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
