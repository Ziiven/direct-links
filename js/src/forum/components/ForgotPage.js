import RedirectToHomeAndOpenModalPage from './RedirectToHomeAndOpenModalPage';
import ForgotPasswordModal from 'flarum/forum/components/ForgotPasswordModal';

export default class ForgotPage extends RedirectToHomeAndOpenModalPage {
    createModal() {
        if (!app.session.user) {
        return ForgotPasswordModal;
        }
    }
}