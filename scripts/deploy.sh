#!/usr/bin/env bash

# Host where the server is hosted
HOST=v22017074803151722.ultrasrv.de
# Username of website manager on the host. No password, we use keys for authentification
USER=nicolas
# Directory where the site should be copied
DIR=/var/www/moodlebox.net/html/   # might sometimes be empty!

# Full URL of website
BASEURL=https://moodlebox.net/

# Needed to workaround some DropBox black magic :-/
rm -rf public/

# Add --ignoreCache to update the results of ghrelease shortcode
hugo -b ${BASEURL} --ignoreCache --gc --cleanDestinationDir && rsync -avz --delete --exclude '.*' --iconv=utf-8-mac,utf-8 public/ ${USER}@${HOST}:${DIR}

# Delete Hugo generated files
rm -rf public/

# Sync content folder to moodlebox.net repository
rsync -avz --delete --exclude '.*' --iconv=utf-8-mac,utf-8 content/ ../moodlebox.net/content/

exit 0
