export default function SSRDemo(props) {
	return (
	   <>
	   <div>
			
		</div>
		  <main>
			<h1 style={{ fontSize: "60px", margin: "20px", textAlign: "center" }}>Server Side Rendering</h1>
			<h2 style={{ fontSize: "70px", margin: "5%", textAlign: "center" }}>
			  <div>{props.thought}</div>
			</h2>
			<h2 style={{ fontSize: "40px", margin: "10%", textAlign: "center" }}>
				<a href="/">
					Home
				</a>
			</h2>
		  </main>
	   </>
	);
}

export async function getServerSideProps() {
	const ThoughtList = ['"You have to dream before your dreams can come true." – A.P.J Abdul Kalam', 
						'"Life should be great rather than long." – B.R. Ambedkar',
						'“Education is the most powerful weapon which you can use to change the world.” - Nelson Mandela',
						'“Every champion was once a contender that didn’t give up.” ― Gabby Douglas',
			     			'“A little progress each day adds up to big results.” – Satya Nani',
			     			'“Every accomplishment starts with the decision to try.” – Gail Devers',
			     			'“If you can dream it, you can do it.” - Walt Disney',
			     			'“All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents.” ― A.P.J. Abdul Kalam',
			     			'“A person who never made a mistake never tried anything new.” — Albert Einstein',
						'“Nothing will work unless you do.” ― Maya Angelou'];
	let index = Math.ceil(Math.random() * 10) % 10;
    return {   
		props: {
			  thought: ThoughtList[index],
			},
    }
}

// SIG // Begin signature block
// SIG // MIIFwwYJKoZIhvcNAQcCoIIFtDCCBbACAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // P1beykGBoQjIKY27tJmxL7mdhauGPmVmNnl6M0B9rqOg
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
// SIG // MC8GCSqGSIb3DQEJBDEiBCCprzkqgfJR++kPSyPkUoGM
// SIG // lKUn5vZH17HAVydCFFUv6TANBgkqhkiG9w0BAQEFAASC
// SIG // AQCiOZrtCy8aXFjMg+/6EK4JfcbBq2LlNG0l5RLMrSxY
// SIG // 0m+zHxVl/tFlVsBKva1iGEsI5QTeWSDRkhxJ4EfSu/Kr
// SIG // 2uImDEKQA7mg3CjM4KxuELOw+R3zfM80RDAaoY20dHr9
// SIG // DlqND8Q/lat5ytaSWKAxZlZaGeKujx19gvnz/xBlHgoE
// SIG // dPEf4Csh6DuZ/L/dSuC9kDHQ8uNt2ucGnIBzqg/b8pSO
// SIG // 1XgRC126WY8HUMaZoaEB8HBTMHyvSWwFXb8CTeO1NFdE
// SIG // dIJRwZwrnCZQm8OsoHKYxajoFM2HLd7SNBV3Fz9jFrPz
// SIG // ZJ8/cE/QOAAgh/fCpOrxFJw8Kc/kD0f246u7
// SIG // End signature block
