import { App, View } from "framework7-react";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ShowArticlePage from "./pages/ShowArticlePage";
import store from "./pages/store";
import MessagePage from "./MessagePage";
import SettingPage from "./pages/SettingPage";
import ConversationPage from "./pages/ConversationPage";
import RecorderPage from "./pages/RecorderPage";
const f7params = {
  name: "My App",
  view: {
    browserHistory: true,
  },
  // specify routes for app
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about/",
      component: AboutPage,
    },
    {
      path: "/article/:id/",
      component: ArticlePage,
    },
    {
      path: "/show/",
      component: ShowArticlePage,
    },
    {
      path: "/message/:id/",
      component: MessagePage,
    },
    {
      path: "/setting/:id/",
      component: SettingPage,
    },
    {
      path:"/conversaction/",
      component: ConversationPage,
    },
    {
      path:"/Recorder/",
      component: RecorderPage,
    }
  ],
};

export default () => (
  // Main Framework7 App component where we pass Framework7 params
  <App store={store} theme="auto" {...f7params}>
    {/* Your main view, should have "main" prop */}
    <View main url="/" />
  </App>
);
