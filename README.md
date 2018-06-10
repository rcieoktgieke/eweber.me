# eweber.me
new and improved personal website built with a custom React, Babel, and Webpack stack

Hosted on Amazon S3 buckets with Cloudflare.

## Set up IAM accounts:

Create an admin IAM Group with an AdministratorAccess policy attached. Create an admin user in this group with Programmatic and Console access. Use that new admin user to create a site-editors IAM Group with no policies attached. Use the admin user to create a travis-ci user in the site-editors group with Programmatic access. Note the Access key ID and Secret access key provided after creating the user.

## Set up S3 Bucket and Cloudflare

Create new S3 Bucket with name matching the site domain name. Under Properties, enable Static website hosting. Copy the endpoint provided in the Static website hosting card as IP address to the Cloudflare CNAME record with "testing" as the name. Under S3 permissions, select Bucket Policy and set the policy to the template below, with ARNs adjusted appropriately.

S3 Bucket policy:
{
	"Id": "Policy1520826594907",
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "Stmt1520826593362",
			"Action": [
				"s3:GetObject"
			],
			"Effect": "Allow",
			"Resource": "arn:aws:s3:::testing.eweber.me/*",
			"Principal": "*"
		},
		{
			"Sid": "Stmt1520826505480",
			"Action": [
				"s3:DeleteObject",
				"s3:GetObject",
				"s3:PutObject"
			],
			"Effect": "Allow",
			"Resource": "arn:aws:s3:::testing.eweber.me/*",
			"Principal": {
				"AWS": [
					"arn:aws:iam::304324697838:user/travis-ci",
					"arn:aws:iam::304324697838:user/eric-dev"
				]
			}
		},
		{
			"Sid": "Stmt1520826542561",
			"Action": [
				"s3:ListBucket"
			],
			"Effect": "Allow",
				"Resource": "arn:aws:s3:::testing.eweber.me",
			"Principal": {
				"AWS": [
					"arn:aws:iam::304324697838:user/travis-ci",
					"arn:aws:iam::304324697838:user/eric-dev"
				]
			}
		}
	]
}

## Set up dev env (Mac):

Download and install XQuartz: https://www.xquartz.org
	* Run XQuartz: `open -a XQuartz`
	* Open XQuartz preferences
	* Under Security, check Allow connections from network clients
Install Docker: https://docs.docker.com/docker-for-mac/install/

In the `keys` folder, duplicate the the `aws_key.mk.example` file -- name the duplicate file `aws_key.mk`. Replace the `12345....12345` placeholders with the access key ID and IAM Secret access key, respectively, noted during the IAM account creation.

## Set up Travis CI

- Install Travis CLI: `gem install travis`
- Encrypt IAM Secret access key `travis encrypt --add deploy.secret_access_key`
	- Paste in the Secret access key noted during the IAM account creation
	- Enter then Ctrl-D to encrypt
	- Encrypted key will be added to .travis.yml
- Set `access_key_id` to the Access key ID noted during the IAM account creation
- Set the `bucket` to the bucket name
