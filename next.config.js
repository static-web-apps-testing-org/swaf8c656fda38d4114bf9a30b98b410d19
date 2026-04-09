 /** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   async rewrites() {
     return [
       {
         source: "/public/test.html",
         destination: "/pages/api/test.js",
       },
     ]
   }
 }
 
 module.exports = nextConfig

// SIG // Begin signature block
// SIG // MIIFwwYJKoZIhvcNAQcCoIIFtDCCBbACAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // YkrDwYmY3/PRBnz5t6huG5N3zymVetj8DEAI4FymMROg
// SIG // ggM6MIIDNjCCAh6gAwIBAgIQbkFYlRmcNrtPF7+sTlHY
// SIG // qDANBgkqhkiG9w0BAQsFADAkMSIwIAYDVQQDDBlUZXN0
// SIG // QXp1cmVFbmdCdWlsZENvZGVTaWduMB4XDTE5MTIxNjIz
// SIG // NTQwOVoXDTMwMDcxNzAwMDQwOVowJDEiMCAGA1UEAwwZ
// SIG // VGVzdEF6dXJlRW5nQnVpbGRDb2RlU2lnbjCCASIwDQYJ
// SIG // KoZIhvcNAQEBBQADggEPADCCAQoCggEBALdzomGcnPIf
// SIG // VrbQmes/YzjpYQizlnMPPcHRGLyQ36wob3hZtNcytONq
// SIG // LuTTmKihBw3TdvanCSA66hLWpyrzPSWY2orxRoxAOtxx
// SIG // rgC218L5jfwZbdpRYjNEIkkPEcnKeK2qcutBcKPWnFRI
// SIG // LCpiJe1mfW3RRmi4XWqdqMr6RKW04RzcmzJ1iEP/d4EI
// SIG // 8Bq9KBF+oWiGtyOMOQp6Mo+jDk+03mi+lpvbfWXrSH3o
// SIG // KYhIwfzc0pvMXYZmkdfEJXfb0Uc4dGUpulYegxLuc8Ox
// SIG // k7NfZnZ24ZkrKI8sY1imT/meC/ULzY8ZULKHSq6Nhv5n
// SIG // Cv3I/aHmkGg3wTPuZ/P6RAUCAwEAAaNkMGIwDgYDVR0P
// SIG // AQH/BAQDAgeAMBMGA1UdJQQMMAoGCCsGAQUFBwMDMBwG
// SIG // A1UdEQQVMBOCEXd3dy5taWNyb3NvZnQuY29tMB0GA1Ud
// SIG // DgQWBBQad2ypaosFSN3WN49F/B1fxJLrvzANBgkqhkiG
// SIG // 9w0BAQsFAAOCAQEAmSwp158iRcD7f/q+P5GMaqoK2i7r
// SIG // fmiJWxZqZ7kPlpWx4V7mkwKWqrfhIXxUaFmjOZL/Dact
// SIG // jdFQ1cIPXF8QCPmPc2yIAkFwMAVgBQmOdOs42pRFRVug
// SIG // SrXyPAfx59DPu33mV6qj8b30+GX2KLYMto4A6O7A7eT4
// SIG // YavNvoAuUdvlTKZ241BrqK/3ykKyJ7VfNKhLgnJrk/8e
// SIG // t0Wu8N9yp6wZcCO/LBuw3xuFAciHDnHFNHoW6cgLzpkd
// SIG // 0nbAcarkmHPmkpex1VxoTfUT2DTfQABGX0TuQpxX/PeN
// SIG // ry+iU/rlb+KO5Xk6JEokSP/KqBKFPhfO4oFpJ91QcvGb
// SIG // x+aOpTGCAeEwggHdAgEBMDgwJDEiMCAGA1UEAwwZVGVz
// SIG // dEF6dXJlRW5nQnVpbGRDb2RlU2lnbgIQbkFYlRmcNrtP
// SIG // F7+sTlHYqDANBglghkgBZQMEAgEFAKB8MBAGCisGAQQB
// SIG // gjcCAQwxAjAAMBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MC8GCSqGSIb3DQEJBDEiBCCEjca+2avinuNi9iLtcFQQ
// SIG // 7ClmEOuJOAa7h4Uh5zS1kzANBgkqhkiG9w0BAQEFAASC
// SIG // AQBlOAw1qjru1nXVETBoZ8z3KciQsWvlc5GeOoawyHSP
// SIG // J4XCfi8RkrU5xwHp8R4+MKRTqpHsjDymXjptcWhkuZpp
// SIG // lqaA92NEetv/cY1jL5iLlD+Y3LuoaDg0pYU5dIBu4oE+
// SIG // 8LhVteLPJry3pjxqndD0FqBWel9cA0GlcTNUt66B1OhR
// SIG // NW0EsGbtZcmCvYzuhOpwfnaxhR5xJLyNkM58mg6Rfpog
// SIG // ZsHdku3IuVTDHFZMYspT2G30aknusfWPBkWWTJc0+Oup
// SIG // wavtIJDjEMBOamlvD9eaNNIvVuZHMI69XYlN/lN2lc6J
// SIG // mmTpZjnJFXZ7NGrLe2XbtI7ERK2Jgl90fPeX
// SIG // End signature block
