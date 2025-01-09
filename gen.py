import os

def generate_index_html():
    current_dir = os.getcwd()
    current_dir_name = os.path.basename(current_dir)
    subdirs = sorted([d for d in os.listdir(current_dir) if os.path.isdir(os.path.join(current_dir, d))])

    with open('index.html', 'w') as f:
        f.write(f'<html>\n<head>\n<title>Index of {current_dir_name}</title>\n</head>\n<body>\n')
        f.write(f'<h1>Index of {current_dir_name}</h1>\n<ul>\n')
        
        for subdir in subdirs:
            f.write(f'<li><a href="{subdir}/">{subdir}</a></li>\n')
        
        f.write('</ul>\n')
        
        f.write('<p>Back to <a href="../">parent directory</a></p>\n')
        
        f.write('</body>\n</html>')
        f.close()
if __name__ == "__main__":
    generate_index_html()