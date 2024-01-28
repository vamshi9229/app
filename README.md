 3 Tier Serverless Architecture
·       Created an S3 Bucket
·       Created a new S3 bucket for hosting static files (HTML, CSS, JavaScript).
·       Uploaded HTML, CSS, and JavaScript files to the S3 bucket.
·       Included a form in your HTML for user input (name, release year, director/author) for searching movies/books.
·       Created AWS Lambda functions to handle data processing and search logic.
·       In one Lambda function, used AWS SDK to read data from the CSV file hosted on S3.
·       Processed the data within the Lambda function as needed.
·       Used AWS SDK to interact with AWS DynamoDB for storing processed movie/book data.
·       Set Up AWS API Gateway
·       Created a new API and configure it to expose HTTP endpoints linked to your Lambda functions.
·       Uploaded CSV file containing movies/books data, including pictures, to the S3 bucket created.
·       Implemented appropriate security measures, IAM roles, and permissions for Lambda functions, S3, and DynamoDB.
·       Tested the system by accessing the hosted HTML pages on S3.
·       Used the user input form to trigger Lambda functions and test the interaction with DynamoDB.
·       Set up monitoring tools, such as AWS CloudWatch, to track the performance of Lambda functions.
·       Debug the issues that arise during the testing phase.
·       Configured auto-scaling options for Lambda functions and DynamoDB based on usage patterns.
·       Implemented backup and recovery strategies for data stored in DynamoDB and S3.
·       Deployed the Entire System
·       Continuously monitored and evaluated the system's performance, making improvements and optimizations if needed.
 

