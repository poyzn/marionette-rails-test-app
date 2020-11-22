class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, uniqueness: true, format: References::EmailFormat.call
  validates :phone, presence: true, format: References::PhoneFormat.call
end
