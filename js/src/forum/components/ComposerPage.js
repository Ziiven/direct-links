import app from 'flarum/forum/app';
import Page from 'flarum/forum/components/Page';
import DiscussionComposer from 'flarum/forum/components/DiscussionComposer';
import LogInModal from 'flarum/forum/components/LogInModal';

export default class ComposerPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);

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

      if (params.primary_tag) {
        const tag = app.store.getBy('tags', 'slug', params.primary_tag);

        if (tag) {
          const parent = tag.parent();

          app.composer.fields.tags = parent ? [parent, tag] : [tag];
        }
      }

      if (params.tag_list) {
        let tagsList = [];
        let tagsArray = (params.tag_list).split(",");

        for(let i=0;i<tagsArray.length;i++){
          const tag = app.store.getBy('tags', 'slug', tagsArray[i]);

          if(tag){
            const parent = tag.parent();

            if(parent){
              tagsList.push(parent);
            }

            tagsList.push(tag);
          }
        }

        if (tagsList.length>0) {
          app.composer.fields.tags = tagsList;
        }
      }
    }, 0);
  }

  view() {
    return m('div');
  }
}
