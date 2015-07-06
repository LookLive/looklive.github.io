If you want to make changes to templates, you need to install Handlebars.

        sudo npm install -g handlebars

Then, from within the project directory, for each template:

        handlebars templates/episode.handlebars -f js/templates/episode.tpl.js

Or run a simple bash script to compile all:

        for i in episode thumbnails person products; do handlebars templates/${i}.handlebars -f js/templates/${i}.tpl.js; done
