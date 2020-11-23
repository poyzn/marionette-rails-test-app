import _ from "underscore";
import { View } from "backbone.marionette";
import Uploader from "./uploader_view";
import UsersView from "./users_view";

const AppLayout = View.extend({
  template: _.template(`
    <div class="container pt-3">
      <h1>Users</h1>
      <div id="uploader"></div>
      <div id="users-list"></div>
    </div>
  `),

  regions: {
    uploader: '#uploader',
    userList: '#users-list'
  },

  onRender() {
    this.showChildView('uploader', new Uploader),
    this.showChildView('userList', new UsersView)
  }
});

export default AppLayout;