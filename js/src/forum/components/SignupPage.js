import RedirectToHomeAndOpenModalPage from './RedirectToHomeAndOpenModalPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';

export default class SignupPage extends RedirectToHomeAndOpenModalPage {
    createModal() {
        if (!app.session.user) {
        return SignUpModal;
        }
    }
}
