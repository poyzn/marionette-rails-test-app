import { Collection } from 'backbone';

import UserModel from '../models/user_model'

const UsersCollection = Collection.extend({
  model: UserModel,
  url: '/api/users'
});

export default  UsersCollection;