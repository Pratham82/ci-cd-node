# ci-cd-node

## How to use

 **1. Go to the cloned directory.**
```
cd node-docker-demo
```
<br/>

**2. Build the dockerimage from Dockerfile.**

The naming convention is not rquired for creating an image but its a good practice.

```
docker build -t <YourDockerHubName>/<YourDockerImageName> .
````
eg.
```
docker build -t pratham82/demo-node-app .
```

This will download all the required images for running this application.

<br/>

**3. Run the image with portforwarding.**

We can directly run the docker image with following commnad ```docker run imagename``` 
but because the application is running inside and isolated container we cannot access it in our local machine.
For accesing the application which is running in the container we will use portforwarding, here PORT 3001 is the local
PORT and on PORT 3000 application is running inside container.

```
docker run -p 3001:3000 <YourDockerHubName>/<YourDockerImageName>
```

<br/>

**4. Verify the running application**

Go to browser or Postman and check the response from the following URL
[http://localhost:3001/](http://localhost:3001/)

It should be similar to this:
```
{
"status": "Success",
"message": "Node app is running  on Docker 🐋"
}
```

