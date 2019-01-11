DESTRIBUTION_ID=E1SYRQS3G34GE0

.PHONY: deploy
deploy: deploy-s3 deploy-cloudfront

.PHONY: deploy-s3
deploy-s3:
	aws s3 cp ./build s3://$(BUCKET_NAME)/ \
	--cache-control immutable,max-age=100000000,public \
	--recursive --acl public-read

.PHONY: deploy-cloudfront
deploy-cloudfront:
	aws cloudfront create-invalidation \
	--distribution-id $(DESTRIBUTION_ID) \
	--paths '/*'
