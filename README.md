# Policy

리디 서비스의 사용 약관페이지를 제공합니다.

## 제공 페이지

- https://policy.ridi.com/ridi-pay/terms-of-use
- https://policy.ridi.com/privacy-policy-sharing
- https://policy.ridi.com/privacy-policy-collect-and-use

## 배포

- AWS performance-prod 인프라에 배포되어있습니다.
- CI를 통해 [S3에 배포합니다](http://policy.ridi.com.s3-website.ap-northeast-2.amazonaws.com).
- React가 S3에서 정적페이지로 실행됩니다.
- CloudFront까지 싱크완료되면 배포가 완료됩니다.
