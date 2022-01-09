# shield-database

This is a repository which uses MongoDB Atlas Data APIs for CRUD operations with AWS SAM application.

## Deployment commands
Create a new directory, navigate to that directory in a terminal and clone the GitHub repository
```bash
git clone https://github.com/zachjonesnoel/shield-database
```
Change directory to the pattern directory:
```bash
cd shield
```
From the command line, use AWS SAM to deploy the AWS resources for the pattern as specified in the template.yml file:
```bash
sam build
sam deploy --guided
```

## Recouces 
+ [Blog post](https://dev.to/zachjonesnoel/aws-sam-app-with-mongodb-atlas-data-apis-18nl)
+ [MongoDB Atlas Data API](https://docs.atlas.mongodb.com/api/data-api/)
+ [MongoDB Atlas Search](https://docs.atlas.mongodb.com/atlas-search/)
+ [MongoDB Atlas Charts](https://docs.mongodb.com/charts/)
+ [AWS SAM application](https://aws.amazon.com/serverless/sam/)