# eweber.me
new and improved personal website built with a custom React, Babel, and Webpack stack

Hosted on Amazon S3 buckets with CloudFlare.

S3 Bucket policy:
{
    "Version": "2012-10-17",
    "Id": "Policy1517972675211",
    "Statement": [
        {
            "Sid": "Stmt1517972672845",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::testing.eweber.me/*"
        }
    ]
}

Bucket Properties > Static website hosting enabled; Endpoint copied as IP address to CloudFlare CNAME record with "testing" as the name.
