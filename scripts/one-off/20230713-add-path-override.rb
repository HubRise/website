require 'yaml'

# Launch this script from the root of the repository
FOLDER = "APPS-TEMPLATE"

def process_file(file_path)
  content = File.read(file_path)
  front_matter, body = content.split("---\n", 3)[1..2]

  yaml_data = YAML.load(front_matter)

  return unless yaml_data['title']

  path_override = File.basename(file_path, ".*")
  if yaml_data['path_override']
    path_override = yaml_data.delete('path_override')
  end

  yaml_data = {'title' => yaml_data['title'], 'path_override' => path_override}.merge(yaml_data)

  new_front_matter = yaml_data.to_yaml({:line_width => -1})

  File.open(file_path, 'w') do |f|
    f.puts([new_front_matter, body].join("---\n"))
  end
end

Dir.glob("#{FOLDER}/**/*.md").each do |file|
  process_file(file)
end
