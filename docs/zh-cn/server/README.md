# Server

[![NPM](https://nodei.co/npm/pm2.png?downloads=true&stars=true)](https://nodei.co/npm/pm2/)

[pm2](https://pm2.keymetrics.io/)

[putty]
192.168.x.x
administrator / password

`sudo ubuntu`  

`pm2 list`  

`pm2 describe <id>`  

deploy.sh rsync

package.json

```js
"du": "npm run app-build-uat && npm run app-deploy-uat",
"app-deploy-uat": "./deploy.sh app uat",
```

deploy.sh

```js
if [ "$1" == "app" ]; then
    if [ "$2" == "uat" ]; then
        NODE_ENV=app-uat node build/build.js && rsync -acvz --no-links --exclude-from exclude-list.txt -e ssh dist/ administrator@192.168.xx.xx:/home/administrator/projects/app-frontend/public/
```

linux

`mkdir <app-frontend>`  
`sudo chwon -R ubuntu:ubuntu <platform-frontend-dir>`  

## gcp

退版的替代  

流量遷移 [迁移和拆分流量](https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic?hl=zh-cn&refresh=1)  
App Engine / 版本 > 遷移流量  
