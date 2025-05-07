require 'fileutils'

# Launch this script from the root of the repository
# /website > ruby scripts/one-off/20230711-reorg-content-images.rb

BASE_CONTENT_GLOB = "content/apps/*"

def image_match(md_line, app_dir, actual_dir)
  image_formats = ['png', 'jpg', 'jpeg', 'gif'].join('|')

  if md_line =~ /!\[.*\]\((\.\.\/)+images\/(\d{3})-(en|fr)-(.+\.(#{image_formats}))\)/
    img_num = $2
    lang = $3
    img_rest = $4

    img_name = "#{img_num}-#{lang}-#{img_rest}"
    img_path = "#{app_dir}/images/#{img_name}"
    new_img_name = "#{img_num}-#{img_rest}"
    new_img_path = "#{actual_dir}/images/#{new_img_name}"
    [img_name, img_path, new_img_name, new_img_path]

  elsif md_line =~ /!\[.*\]\((\.\.\/)+images\/(\d{3})-2x-(en|fr)-(.+\.(#{image_formats}))\)/
    # Some images have been incorrectly named like this in OrderLine.
    img_num = $2
    lang = $3
    img_rest = $4

    img_name = "#{img_num}-2x-#{lang}-#{img_rest}"
    img_path = "#{app_dir}/images/#{img_name}"
    new_img_name = "#{img_num}-2x-#{img_rest}"
    new_img_path = "#{actual_dir}/images/#{new_img_name}"
    [img_name, img_path, new_img_name, new_img_path]

  end
end

# Get the directories in the content directory
Dir.glob("#{BASE_CONTENT_GLOB}").select { |f| File.directory? f }.each do |app_dir|

  ['en', 'fr', 'faqs', 'troubleshooting'].each do |dir|
    # If it is 'faqs' or 'troubleshooting', then we need to consider 'en' and 'fr' subfolders
    subdirs = (dir == 'faqs' || dir == 'troubleshooting') ? ['en', 'fr'] : ['']
    subdirs.each do |subdir|
      actual_dir = subdir.empty? ? "#{app_dir}/#{dir}" : "#{app_dir}/#{dir}/#{subdir}"
      
      # If the directory does not exist, skip to the next one
      next unless Dir.exist?(actual_dir)
      
      Dir.glob("#{actual_dir}/*.md").each do |md_file|
        File.readlines(md_file).each do |line|
          if (img_name, img_path, new_img_name, new_img_path = image_match(line, app_dir, actual_dir))
            if File.exist?(new_img_path)
              # Image has already been moved, so just update the image path in MD file.
            elsif File.exist?(img_path)
              # Create images directory under actual directory if it doesn't exist
              FileUtils.mkdir_p("#{actual_dir}/images")

              # Move image file and remove "-#{lang}" from filename
              FileUtils.mv(img_path, new_img_path)
            else
              puts "Image file #{img_path} does not exist. Skipping..."
              next
            end

            # Update the image path in MD file
            new_content = File.read(md_file).gsub(/(\.\.\/)+images\/#{img_name}/, "./images/#{new_img_name}")
            File.open(md_file, "w") {|file| file.puts new_content }
          end
        end
      end
    end
  end
end
