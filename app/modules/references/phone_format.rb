module References
  class PhoneFormat
    def self.call
      /\A\+\d{8,10}\z/
    end
  end
end
