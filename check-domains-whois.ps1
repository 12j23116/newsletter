# Use WHOIS for more accurate domain checking
$topDomains = @(
  "aibot.com",
  "aiapp.com",
  "aiqc.com",
  "fusionnod.com",
  "fusionlnk.com",
  "nuclearflx.com",
  "nuclearnod.com"
)

Write-Host "Checking domains using WHOIS..." -ForegroundColor Cyan
Write-Host ""

# Check if whois is available
$whoisAvailable = Get-Command whois -ErrorAction SilentlyContinue

if (-not $whoisAvailable) {
    Write-Host "WHOIS not installed. Using alternative method..." -ForegroundColor Yellow
    # Try using PowerShell's Resolve-DnsName with more thorough checking
    foreach ($domain in $topDomains) {
        try {
            $result = Resolve-DnsName -Name $domain -DnsOnly -ErrorAction Stop
            Write-Host "$domain - TAKEN (DNS records found)" -ForegroundColor Red
        } catch {
            # If DNS fails, try HTTP check
            try {
                $response = Invoke-WebRequest -Uri "http://$domain" -Method Head -TimeoutSec 3 -ErrorAction Stop
                Write-Host "$domain - TAKEN (HTTP response)" -ForegroundColor Red
            } catch {
                Write-Host "$domain - MAY BE AVAILABLE (no DNS/HTTP response)" -ForegroundColor Yellow
            }
        }
    }
} else {
    foreach ($domain in $topDomains) {
        $output = whois $domain 2>&1 | Out-String
        
        if ($output -match "No match for domain" -or $output -match "NOT FOUND" -or $output -match "No entries found") {
            Write-Host "$domain - AVAILABLE" -ForegroundColor Green
        } else {
            Write-Host "$domain - TAKEN" -ForegroundColor Red
        }
        
        Start-Sleep -Milliseconds 500
    }
}

Write-Host "`nNOTE: For 100% accuracy, please check directly at:" -ForegroundColor Cyan
Write-Host "  - namecheap.com" -ForegroundColor White
Write-Host "  - godaddy.com" -ForegroundColor White
Write-Host "  - instantdomainsearch.com" -ForegroundColor White
