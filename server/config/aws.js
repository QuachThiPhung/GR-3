const AWS = require('aws-sdk');

// Set AWS credentials
AWS.config.update({
  accessKeyId: 'ACCESS_KEY_ID',
  secretAccessKey: 'SECRET_ACCESS_KEY',
  region: 'YOUR_AWS_REGION', // For example, 'us-east-1'
});

// Create an S3 instance
const s3 = new AWS.S3();
