/* 
 *** server side ***
 ...........
 Mongodb Connection
 1. create account
 2. create an user with password
 3. whitelist IP address
 4. database > connect > driver > Node > show full code 
 5. change the password the uri 
 .................................
 1. create ---- POST
 2. app.post()
 3. Make the function to use await inside it
 4. Make sure you use the express.json() middleware
 5. access data from the body : const user = req.body
 6. const result = await users.insertOne(user)

 *** client side *** 
 .... see or post........
 1. create fetch
 2. add second parameter as an object
 3. provider method :'POST
 4. add headers :{'content-type': 'application/json'}
 5. add body: JSON.Stringify(user)
 
 ..... READ Many (server side) .........
 1. create a cursor = users.find()
 2. const result = await cursor.toArray()
 

 ..... DELETE (server side) ..........
 1. create app.delete()
 2. specify unique ObjectId to delete the right user
 3. const query = { _id: new ObjectId(id) };
 4. const result = await users.deleteOne(query);

 ..... DELETE (client side) .......
 1. create dynamic url with id
 2. mention the delete method










*/
