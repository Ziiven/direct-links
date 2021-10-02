import RedirectToHomeAndOpenModalPage from './RedirectToHomeAndOpenModalPage';
import LogInModal from 'flarum/forum/components/LogInModal';

export default class LoginPage extends RedirectToHomeAndOpenModalPage {
    createModal() {
        if (!app.session.user) {
        return LogInModal;
        }
    }
}
