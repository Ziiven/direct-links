import app from 'flarum/app';
import Page from 'flarum/components/Page';

export default class RedirectToHomeAndOpenModalPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);

        m.route.set('/');
        
        setTimeout(() => app.modal.show(this.createModal()), 100);
    }

    createModal() {
        return null;
    }

    view() {
        return m('div');
    }
}
