import app from 'flarum/forum/app';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPage from './components/ForgotPage';
import ComposerPage from './components/ComposerPage';

app.initializers.add('direct-links', () => {
  app.routes.directLinksLogin = {
    path: '/login',
    component: LoginPage,
  };
  app.routes.directLinksSignup = {
    path: '/signup',
    component: SignupPage,
  };
  app.routes.directLinksForgot = {
    path: '/forgot',
    component: ForgotPage,
  };
  app.routes.directLinksComposer = {
    path: '/composer',
    component: ComposerPage,
  };
});
