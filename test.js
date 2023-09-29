String channelSecret = '...'; // Channel secret string
String httpRequestBody = '...'; // Request body string
SecretKeySpec key = new SecretKeySpec(channelSecret.getBytes(), "HmacSHA256");
Mac mac = Mac.getInstance("HmacSHA256");
mac.init(key);
byte[] source = httpRequestBody.getBytes("UTF-8");
String signature = Base64.encodeBase64String(mac.doFinal(source));
// Compare x-line-signature request header string and the signature