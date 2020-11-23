import _ from 'underscore';
import { View } from 'backbone.marionette';

const UserView = View.extend({
  template: _.template(`
    <li><%- first_name %></li>
  `)
});

export default UserView;