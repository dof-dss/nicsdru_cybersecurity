# Origins Drupal

[![CircleCI](https://circleci.com/gh/dof-dss/nicsdru_cybersecurity.svg?style=svg)](https://circleci.com/gh/dof-dss/nicsdru_cybersecurity)

Base Drupal install for Origins sites.

When installing site run 
```shell script
lando drush cset system.site uuid 55da8ecb-a446-49d7-9c85-df0c7228066e
```

### Structure Sync
After running drush config-import, also run
```shell script
lando drush ia
```
This imports the block content, menu links and taxonomy terms into the site.


If you want to export any blocks, menus or taxonomy terms you have used run
```shell script
lando drush ea
```

For more information on the structure sync commands please visit https://www.drupal.org/project/structure_sync


### Backup and Migrate
Database and public files directory backups have been included in the folder 'backups'. This can be imported into your 
site to allow you to view the site progress.

To restore these backups after installing the site and importing the config, navigate to Manage > Configuration > 
Development > Backup and Migrate.

Click on the Restore tab, upload the .mysql.gz under 'Upload a Backup File'. Choose Restore To Default Drupal Database 
in the dropdown options and then click Restore now.

Then, upload the .tar.gz under 'Upload a Backup File'. Choose Restore To Public Files Directory in the dropdown options 
and then click Restore now.
