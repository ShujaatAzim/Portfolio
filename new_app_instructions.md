```
ssh root@shujaatazim.com
dokku apps:create {APP_NAME}
exit
```

```
cd {APP_NAME}
git remote add dokku dokku@shujaatazim.com:{APP_NAME}
git push dokku master
```
