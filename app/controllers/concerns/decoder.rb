module Decoder

  module InstanceMethods

    def decode_base64(image)
      Rails.logger.info 'decoding base64 file'
      # decode base64 string
      decoded_data = Base64.decode64( image[:base64])
      # create 'file' understandable by Paperclip
      data = StringIO.new(decoded_data)
      data.class_eval do
        attr_accessor :content_type, :original_filename
      end

      # set file properties
      data.content_type = image[:filetype] ##<StringIO:0x007f9be40a1d88>
      data.original_filename = image[:filename]

      # return data to be used as the attachment file (paperclip)
      data ##<StringIO:0x007fc91718b590 @content_type="image/jpeg", @original_filename="lenn.jpg">
    end

  end

end
