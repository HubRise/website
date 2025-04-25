require 'find'

# Launch this script from the root of the repository
FOLDER = "content"

def process_file(file)
  text = File.read(file)
  new_content = text
    .gsub(/\[([^\]]+)\]\(mailto:\1\)/, '\1')
    .gsub(/\[([^\]]+)\]\(\1\)/, '\1')

  if text != new_content
    File.open(file, 'w') { |f| f.write(new_content) }
    puts "Processed file: #{file}"
  end
end

Find.find(FOLDER) do |path|
  process_file(path) if path =~ /.*\.md$/
end
