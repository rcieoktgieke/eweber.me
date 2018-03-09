# eweber.me
new and improved personal website built with a custom React, Babel, and Webpack stack

Hosted on Amazon S3 buckets with Cloudflare.

## Set up IAM accounts:

Create an admin IAM Group with an AdministratorAccess policy attached. Create an admin user in this group. Use that new admin user to create a site-editors IAM Group with no policies attached. Use the admin user to create a jenkins-ci user in the site-editors group.

## Set up S3 Bucket and Cloudflare

Create new S3 Bucket with name matching the site domain name. Under Properties, enable Static website hosting. Copy the endpoint provided in the Static website hosting card as IP address to the Cloudflare CNAME record with "testing" as the name. Under S3 permissions, select Bucket Policy and set the policy to the template below, with ARNs adjusted appropriately.

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
        },
        {
            "Sid": "Stmt1520223882120",
            "Action": [
                "s3:DeleteObject",
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Effect": "Allow",
            "Resource": "arn:aws:s3:::testing.eweber.me/*",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::304324697838:user/jenkins-ci"
                ]
            }
        },
        {
            "Sid": "Stmt1520224888127",
            "Action": [
                "s3:ListBucket"
            ],
            "Effect": "Allow",
            "Resource": "arn:aws:s3:::testing.eweber.me",
            "Principal": {
                "AWS": [
                    "arn:aws:iam::304324697838:user/jenkins-ci"
                ]
            }
        }
    ]
}
