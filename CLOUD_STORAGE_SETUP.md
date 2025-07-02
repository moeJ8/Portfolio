# AWS S3 Setup for File Downloads

Quick setup guide for hosting downloadable files using AWS S3 + CloudFront.

## Step 1: Create S3 Bucket

1. **Sign up for AWS** at [aws.amazon.com](https://aws.amazon.com) (free tier available)
2. **Navigate to S3** in AWS Console
3. **Create bucket**:
   - Name: `portfolio-downloads-[random-string]` (must be unique)
   - Region: Choose closest to your users
   - **Uncheck "Block all public access"**
   - Create bucket

## Step 2: Configure Public Access

1. **Go to bucket Permissions Bucket policy**
2. **Add this policy**:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::your-bucket-name/*"
  }]
}
```

## Step 3: Enable CORS

1. **Go to bucket Permissions CORS**
2. **Add this configuration**:
```json
[{
  "AllowedHeaders": ["*"],
  "AllowedMethods": ["GET", "HEAD"],
  "AllowedOrigins": ["*"],
  "ExposeHeaders": ["Content-Length"]
}]
```

## Step 4: Upload Files

1. **Create folder structure**: `downloads/folder/`
2. **Upload your files** to appropriate folders
3. **Note the URLs**: `https://your-bucket-name.s3.amazonaws.com/downloads/filename.zip`

## Step 5: Setup CloudFront (Optional but Recommended)

1. **Go to CloudFront** in AWS Console
2. **Create distribution**:
   - Origin: `your-bucket-name.s3.amazonaws.com`
   - Origin path: `/downloads`
   - Viewer protocol: `Redirect HTTP to HTTPS`
3. **Get CloudFront URL**: `https://d[id].cloudfront.net`

## Step 6: Update Your Code

Replace your download URLs with the S3/CloudFront URLs:
```javascript
const fileUrl = 'https://your-bucket-name.s3.amazonaws.com/downloads/game.zip';
const fileUrl = 'https://d[id].cloudfront.net/game.zip';
```