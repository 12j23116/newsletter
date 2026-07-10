# Verify the top recommended domains
$topDomains = @(
  "aibot.com",
  "aiapp.com",
  "aiqc.com",
  "fusionnod.com",
  "fusionlnk.com",
  "nuclearflx.com",
  "nuclearnod.com"
)

Write-Host "Verifying top recommended domains..." -ForegroundColor Cyan
Write-Host ""

$available = @()
$taken = @()

foreach ($domain in $topDomains) {
  # Use nslookup to check if domain exists
  $output = nslookup $domain 2>&1 | Out-String
  
  if ($output -match "Non-existent domain" -or $output -match "Server failed" -or $output -match "can't find" -or $output -match "NXDOMAIN") {
    Write-Host "$domain - AVAILABLE" -ForegroundColor Green
    $available += $domain
  } else {
    Write-Host "$domain - TAKEN" -ForegroundColor Red
    $taken += $domain
  }
  
  # Small delay
  Start-Sleep -Milliseconds 200
}

Write-Host "`n=== VERIFICATION RESULTS ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Available: $($available.Count)" -ForegroundColor Green
Write-Host "Taken: $($taken.Count)" -ForegroundColor Red

if ($available.Count -gt 0) {
  Write-Host "`nAvailable domains:" -ForegroundColor Green
  $available | ForEach-Object { Write-Host $_ }
}

if ($taken.Count -gt 0) {
  Write-Host "`nTaken domains:" -ForegroundColor Red
  $taken | ForEach-Object { Write-Host $_ }
}
