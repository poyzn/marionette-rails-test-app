module API
  class UsersController < ApplicationController
    def index
      users = User.all
      render json: users, each_serializer: Users::Serializers::UserSerializer
    end
  end
end
