deploy:
	aws s3 cp ./build s3://$(BUCKET_NAME)/ \
  --cache-control immutable,max-age=100000000,public \
  --recursive --acl public-read
