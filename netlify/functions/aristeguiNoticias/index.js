const https = require("https");
const fetch = require("node-fetch");
const fs = require('fs');

const cert = `
Bag Attributes
    friendlyName: Apple Pay Merchant Identity:merchant.com.mintitmedia
    localKeyID: 5A 29 F1 C7 40 BB B5 92 32 A6 4A 78 50 D0 21 BA 73 C6 88 99
subject=/UID=merchant.com.mintitmedia/CN=Apple Pay Merchant Identity:merchant.com.mintitmedia/OU=6Y764HL989/O=Jaime Garcia Diaz
issuer=/CN=Apple Worldwide Developer Relations Certification Authority/OU=G3/O=Apple Inc./C=US
-----BEGIN CERTIFICATE-----
MIIGGDCCBQCgAwIBAgIQR6sX+7xGFlEI19FPx3gC4zANBgkqhkiG9w0BAQsFADB1
MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBD
ZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTELMAkGA1UECwwCRzMxEzARBgNVBAoMCkFw
cGxlIEluYy4xCzAJBgNVBAYTAlVTMB4XDTIyMTIxNTE5NTk0OFoXDTI1MDExMzE5
NTk0N1owgZoxKDAmBgoJkiaJk/IsZAEBDBhtZXJjaGFudC5jb20ubWludGl0bWVk
aWExPTA7BgNVBAMMNEFwcGxlIFBheSBNZXJjaGFudCBJZGVudGl0eTptZXJjaGFu
dC5jb20ubWludGl0bWVkaWExEzARBgNVBAsMCjZZNzY0SEw5ODkxGjAYBgNVBAoM
EUphaW1lIEdhcmNpYSBEaWF6MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
AQEA0gatqmOdsPeyNbtplL2flqqdZtFI2AYB4nT7mTGGWOeQ0R45dRBMSwGK0L0n
0MXAJUs1/cpBk2mFTF2C9LqnWWMjnfAKyhn5U3HhhKhpo6ef1Vv2kXGtfTxo6Dkp
m3j5UOZrLRzdqX/akqRdcZkHYtm+ZA9jNOvAPDFOtNxBMhBO1X6/TEmdwy621W0c
iLMmGqfe2MyHjwLI3CqL2ugrHtg9jU3/Dm2tR4M5XSHAV6luIt53CyWNk3c/B0rG
jrhiJ+qysc92mZcUzyTWNTAn2zh99tH8VpQWpc05zXgZBOvNy9GN7hHLFp9exPQ9
CzkZXjvdEGqySY2gDb542pzn0QIDAQABo4ICfDCCAngwDAYDVR0TAQH/BAIwADAf
BgNVHSMEGDAWgBQJ/sAVkPmvZAqSErkmKGMMl+ynsjBwBggrBgEFBQcBAQRkMGIw
LQYIKwYBBQUHMAKGIWh0dHA6Ly9jZXJ0cy5hcHBsZS5jb20vd3dkcmczLmRlcjAx
BggrBgEFBQcwAYYlaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy13d2RyZzMw
OTCCAS0GA1UdIASCASQwggEgMIIBHAYJKoZIhvdjZAUBMIIBDTCB0QYIKwYBBQUH
AgIwgcQMgcFSZWxpYW5jZSBvbiB0aGlzIENlcnRpZmljYXRlIGJ5IGFueSBwYXJ0
eSBvdGhlciB0aGFuIEFwcGxlIGlzIHByb2hpYml0ZWQuIFJlZmVyIHRvIHRoZSBh
cHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwg
Y2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0
YXRlbWVudHMuMDcGCCsGAQUFBwIBFitodHRwczovL3d3dy5hcHBsZS5jb20vY2Vy
dGlmaWNhdGVhdXRob3JpdHkvMBMGA1UdJQQMMAoGCCsGAQUFBwMCMB0GA1UdDgQW
BBRaKfHHQLu1kjKmSnhQ0CG6c8aImTAOBgNVHQ8BAf8EBAMCB4AwTwYJKoZIhvdj
ZAYgBEIMQDlCRTM0QTFEMUIxNUUxNEQ2NUU4QTE3Q0VFRUVGQkM5MDUyMkU3QzQ1
MkZEREEzRjU1QjJCQzZERTMzOTBCRTMwDwYJKoZIhvdjZAYuBAIFADANBgkqhkiG
9w0BAQsFAAOCAQEAL1sQqFLTQZfu+oIU4NuPj2jkZNcFbrYX3nQwVZCSgMFn/Xu0
JEfqxlcADZ2jtyGnX7RDL06Jiwmnxw3rGV4bqjjfJkxvbEjtwPh6IEChQpNn3w4v
ZG4AoeEbuT524hYN2k236S8fnybFhGVFmTZD/HwPsd+EWLj05PcBRCYj1RKBHjti
TOquRrRdq+uGxpeLPRSTieD/cu6u0LpMzJIuRjyva5Yl7CUIvUQtMr8u7HTDi3ji
yAlqonYxA4dFV8wEUcLyTkubMzQLRqKsfkEGMPLdfiXVvOQfUB7UAwCa+QzATyLR
XpgF/73EdR4jJGlTL9agOFaMU1AqlA2k39ep5Q==
-----END CERTIFICATE-----
Bag Attributes
    friendlyName: MINT_MERHCANT_DEV_KEY
    localKeyID: 5A 29 F1 C7 40 BB B5 92 32 A6 4A 78 50 D0 21 BA 73 C6 88 99
Key Attributes: <No Attributes>
-----BEGIN PRIVATE KEY-----
MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDSBq2qY52w97I1
u2mUvZ+Wqp1m0UjYBgHidPuZMYZY55DRHjl1EExLAYrQvSfQxcAlSzX9ykGTaYVM
XYL0uqdZYyOd8ArKGflTceGEqGmjp5/VW/aRca19PGjoOSmbePlQ5mstHN2pf9qS
pF1xmQdi2b5kD2M068A8MU603EEyEE7Vfr9MSZ3DLrbVbRyIsyYap97YzIePAsjc
Kova6Cse2D2NTf8Oba1HgzldIcBXqW4i3ncLJY2Tdz8HSsaOuGIn6rKxz3aZlxTP
JNY1MCfbOH320fxWlBalzTnNeBkE683L0Y3uEcsWn17E9D0LORleO90QarJJjaAN
vnjanOfRAgMBAAECggEBAMhvNy11A/jvalN9F7WrgbH4AV8uO6ZtlT7ZBYOdj+ko
lTv87Dib5TNvtVqgKm9DSaxNqqkZbJuSCHRoiaGkwDC+PC9t9d4KC7dm5yIC104n
mpGzwgvrwPXTwQpeAycsvEJIo9/ZvHEWYzGvSr4unK3pv5keVj8a/cp0A/j2egGb
c+8C0QSabkmn5g3i0bkaPlQnL2xIUZebyNXQP8QuaOr97vPKkYdheZu8Fcl1eTV7
Y3tnBHUgMtgUvVO+EXeIflqTgNiAUGlGoLHjrTHZPyH9JixsqPYs7M9fI4kk1+Pd
l8qxX2s3rH2SdnI9dlV+1OYirhgGoQInbUdjLr8/M0ECgYEA7S+gwFNrlZhbeQj3
vRJrezUSipflxsDDCWhhLih7XTEER00nu1uruHU92S4mCc1juUuRvWcnl+6DgCub
iLGVcvxafhKm3papR1AKt38jW2yH+waTnBGNkCp6DuCy/geGMpS+gSGUwB4aQAY+
HQ3Lj8EY5KBXYivDVSVE3+5RZv8CgYEA4q+INEAjkgG82FTFqkSntfieSV41i9Mb
Ix8SKv1aWR8+q3Q9jpxZCZfUqVAj+nlKpZ6bpBw2YRRRxFMXai1zqMGHDkLQJV1o
Ol8PQJy+mYAwxdR23y1szu3AluJB3AS1llXAbQR0CghOrnndlIzDnT2OSoSveCkF
Gtfndtu8AS8CgYEA1ofGwU5yt8snqXEYCva3KqiVTbAYT84YWtEDXSmWc3MbaJZ7
wnYm+t9ogqDAHQueEIIunv7HjB9a57oJovjksS1ZeEDMl/XzxKG8H76qL04aLE4F
gxtJTMVuwzgwDZ6mned16/yAu8g+e/xpgAPzQ+Im7tusTgpBUik0g8rd6+cCgYBM
XnSVndId+2Xiv9SEA3M49BRnhUym2a03zNzzDL2mbsdPPe8LH5NDjxo/HFeyp7BF
UcT/qd2MIStW5+Noiv1/KgvU+x9ipzBZEfNyghwYXL6Rt32AvK3+nMyYSIuFkzSV
/DfCwpBRXPEdCMNkq3OvgrBwXHk9Exy8KWa6fVa+UwKBgQDVONZTi7wZVYsFtyfX
k5X65dY2Gw4CAIbQT/YIOr/g9650DmVkrLbQ/wTjugXA61LH2kI/y90HMHIetXbo
gam/AfGSKXT6xrUn3I/Ph0IPlREP46Kg6igvxrkNG1TETt5i+z4si+0yft17MAJk
bQiK+sniJzJ1H4GwgcI5RIRgKg==
-----END PRIVATE KEY-----
`

exports.handler = async function (_event, _context) {
  const options = {
    cert,
    key: cert,
  };

  const sslConfiguredAgent = new https.Agent(options);

  const headers = {
    "Content-Type": "application/json",
  };
  const endpointURL =
      "https://aristeguinoticias.com";
  try {
    const response = await fetch(endpointURL, {
      headers,
      agent: sslConfiguredAgent,
      method: "get",
    });

    const responseBody = await response.text();

    fs.writeFileSync("aristeguinoticias.html", responseBody);

    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
