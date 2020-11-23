import _ from 'underscore';
import { CollectionView } from 'backbone.marionette'

import UserView from './user_view'
import UsersCollection from "../collections/users_collection";

const UsersView = CollectionView.extend({
  collection: new UsersCollection,
  childElementContainer: '.users-collection tbody',
  childView: UserView,

  template: _.template(`
    <table class="users-collection table table-default mt-3">
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody></tbody>  
    </table>
  `),

  onRender() {
    this.collection.fetch();
  }
});

export default UsersView;