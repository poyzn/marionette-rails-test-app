require 'rails_helper'

RSpec.describe User, type: :model do
  context 'model behavior' do
    %i[first_name last_name email phone].each do |prop|
      it "responds to #{prop}" do
        expect(subject).to respond_to prop
      end
    end
  end

  context 'instance behavior' do
    subject { create :user }
    it 'is valid with all props' do
      expect(subject.valid?).to be_truthy
    end
    %i[first_name last_name email phone].each do |prop|
      it "is invalid without #{prop}" do
        user = build :user, prop => nil
        expect(user.valid?).to be_falsey
        expect(user.errors.keys).to include prop
      end
    end
  end
end
