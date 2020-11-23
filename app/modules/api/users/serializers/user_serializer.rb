module API
  module Users
    module Serializers
      class UserSerializer < ActiveModel::Serializer
        attributes :first_name, :last_name, :email, :phone
      end
    end
  end
end
