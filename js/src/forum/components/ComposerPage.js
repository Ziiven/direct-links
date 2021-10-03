import app from 'flarum/forum/app';
import Page from 'flarum/forum/components/Page';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import LogInModal from 'flarum/forum/components/LogInModal';

export default class ComposerPage extends Page {
    oninit(v) {
        super.oninit(v);

        if (!app.session.user) {
            setTimeout(() => app.modal.show(LogInModal), 500);
            return m.route.set('/');
        }

        const params = m.route.param();

        m.route.set('/all');

        setTimeout(() => {
            let composerProps = {
                user: app.session.user,
            };

            if (params.content) {
                composerProps.originalContent = params.content;
            }

            app.composer.load(DiscussionComposer, composerProps);

            app.composer.show();
            
            if (params.title) {
                app.composer.fields.title(params.title);
            }

            console.debug(params);

            if (params.primary_tag) {
                const tag = app.store.getBy('tags', 'slug', params.primary_tag);

                if (tag) {
                    const parent = tag.parent();

                    app.composer.fields.tags = parent ? [parent, tag] : [tag];
                }
            }

            
        }, 0);
    }

    view() {
        return m('div');
    }
}
