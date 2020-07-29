class User < ApplicationRecord
  has_many :shoes, dependent: :destroy
end
