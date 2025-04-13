module Jekyll
  module HexToRgbFilter
    def hex_to_rgb(hex)
      hex = hex.delete('#')
      r = hex[0..1].to_i(16)
      g = hex[2..3].to_i(16)
      b = hex[4..5].to_i(16)
      "#{r}, #{g}, #{b}"
    end
  end
end
Liquid::Template.register_filter(Jekyll::HexToRgbFilter)