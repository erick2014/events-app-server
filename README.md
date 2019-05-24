### EVENTS APP SERVER

```
Tested in node v8.4.0
1. yarn
2. set up variable environment for your db: 
if you use mongo: 
  export MONGO_DB_NAME, export MONGO_DB_PASSWORD, MONGO_DB_USER

if you use mysql:
  export DB,export DB_PASS,export DB_USER

3. To start the app: yarn dev

4. to test the api, open postman and set up:
  * POST: http://127.0.0.1:4000/user/auth
  * Under the Body tab: mark x-www-form-urlencoded and fill in the parameters to te request
```
