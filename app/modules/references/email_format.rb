module References
  class EmailFormat
    def self.call
      /\A[a-z0-9\.\-]+@[a-z0-9\.\-]+\.[a-z]{2,}\z/i
    end
  end
end