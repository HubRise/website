require 'fileutils'

# Launch this script from the root of the repository

BASE_CONTENT_GLOB = "content/apps/*"

Dir.glob(BASE_CONTENT_GLOB).select { |f| File.directory? f }.each do |app_dir|
  ['en', 'fr', 'faqs', 'troubleshooting'].each do |dir|
    # If it is 'faqs' or 'troubleshooting', then we need to consider 'en' and 'fr' subfolders
    subdirs = (dir == 'faqs' || dir == 'troubleshooting') ? ['en', 'fr'] : ['']
    subdirs.each do |subdir|
      actual_dir = subdir.empty? ? "#{app_dir}/#{dir}" : "#{app_dir}/#{dir}/#{subdir}"

      # If the directory does not exist, skip to the next one
      next unless Dir.exist?(actual_dir)

      Dir.glob("#{actual_dir}/*.md").each do |md_file|
        File.readlines(md_file).each do |line|
          if line =~ /!\[[^\]]*\]\(([^\)]*)\)/
            img_path = $1
            absolute_img_path = File.join(actual_dir, img_path)
            absolute_img_path = File.absolute_path(absolute_img_path)

            unless File.exist?(absolute_img_path)
              puts "Warning: Image file #{absolute_img_path} does not exist in #{md_file}."
            end
          end
        end
      end
    end
  end
end
