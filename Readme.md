

## Folder Structure
UI -> Next.js Frontend
      React components
      Tailwind CSS
functions -> Backend API, express node.js project
scripts -> Deployment scripts

## Deployment
qa.hafla.com 
  -> EC2
  -> Postgres DB (Within the instance)
  
www.hafla.com
  -> EC2
  -> Postgres DB (Within the instance, to migrate to RDS)
  -> SQS Ques -> Forwarding leads to geneva via REST API
              -> Sending welcome emails to client (Gmail), migrating soon to AWS SES


## UI Flow

### Lead generation flow
1. UI -> Calls API
2. Calls -> 
   1. Store to DB
   2. Send to SQS
     - Send to Geneva
     - Send email
 
