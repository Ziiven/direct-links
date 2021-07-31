import app from 'flarum/app';
import Page from 'flarum/components/Page';
import DiscussionComposer from 'flarum/components/DiscussionComposer';
import LogInModal from 'flarum/components/LogInModal';

export default class ComposerPage extends Page {
    oninit(v) {
        super.oninit(v);

        if (!app.session.user) {
            setTimeout(() => app.modal.show(LogInModal), 100);

            return;
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
