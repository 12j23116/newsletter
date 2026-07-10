# Generate more short domain names (≤6 letters) for tech brand
$domains = @(
  # More creative tech-sounding names
  "axol","exol","ixol","oxol","uxol","axul","exul","ixul","oxul","uxul",
  "axal","exal","ixal","oxal","uxal","axel","exel","ixel","oxel","uxel",
  "axyl","exyl","ixyl","oxyl","uxyl","axol","exol","ixol","oxol","uxol",
  "qzol","qxol","qvyl","qzyl","qxyl","qvol","qzol","qxol","qval","qzal",
  "zxol","zxyl","zxal","zxel","zxul","zxol","zqol","zvyl","zzyl","zxyl",
  # More brandable combinations
  "krux","prux","trux","nrux","vrux","zrux","frux","wrux","brux","mrux",
  "krox","prox","trox","nrox","vrox","zrox","frox","wrox","brox","mrox",
  "krix","prix","trix","nrix","vrix","zrix","frix","wrix","brix","mrix",
  "krex","prex","trex","nrex","vrex","zrex","frex","wrex","brex","mrex",
  "krax","prax","trax","nrax","vrax","zrax","frax","wrax","brax","mrax",
  # Short punchy names
  "zync","qync","xync","vync","nync","mync","lync","kync","jync","hync",
  "zink","qink","xink","vink","nink","mink","link","kink","jink","hink",
  "zonk","qonk","xonk","vonk","nonk","monk","lonk","konk","jonk","honk",
  "zunk","qunk","xunk","vunk","nunk","munk","lunk","kunk","junk","hunk",
  "zank","qank","xank","vank","nank","mank","lank","kank","jank","hank",
  # More variations
  "plex","flex","blex","klex","tlex","slex","rlex","mlex","nlex","vlex",
  "prox","frox","brox","krox","trox","srox","rrox","mrox","nrox","vrox",
  "crux","frux","brux","krux","trux","srux","rrux","mrux","nrux","vrux",
  "drix","trix","brix","krix","trix","srix","rrix","mrix","nrix","vrix",
  "drax","trax","brax","krax","trax","srax","rrax","mrax","nrax","vrax",
  # Additional creative names
  "zyl","qyl","xyl","vyl","nyl","myl","lyl","kyl","jyl","hyl",
  "zal","qal","xal","val","nal","mal","lal","kal","jal","hal",
  "zel","qel","xel","vel","nel","mel","lel","kel","jel","hel",
  "zol","qol","xol","vol","nol","mol","lol","kol","jol","hol",
  "zul","qul","xul","vul","nul","mul","lul","kul","jul","hul",
  # More unique combinations
  "kryl","pryl","tryl","nryl","vryl","zryl","fryl","wryl","bryl","mryl",
  "kral","pral","tral","nral","vral","zral","fral","wral","bral","mral",
  "krel","prel","trel","nrel","vrel","zrel","frel","wrel","brel","mrel",
  "krol","prol","trol","nrol","vrol","zrol","frol","wrol","brol","mrol",
  "krul","prul","trul","nrul","vrul","zrul","frul","wrul","brul","mrul",
  # Final batch
  "zax","qax","xax","vax","nax","max","lax","kax","jax","hax",
  "zex","qex","xex","vex","nex","mex","lex","kex","jex","hex",
  "zix","qix","xix","vix","nix","mix","lix","kix","jix","hix",
  "zox","qox","xox","vox","nox","mox","lox","kox","jox","hox",
  "zux","qux","xux","vux","nux","mux","lux","kux","jux","hux"
) | Select-Object -Unique

Write-Host "Checking domain availability for $($domains.Count) additional domains..." -ForegroundColor Cyan
Write-Host ""

$available = @()
$taken = @()
$checked = 0

foreach ($name in $domains) {
  $domain = "$name.com"
  $checked++
  
  # Use nslookup to check if domain exists
  $output = nslookup $domain 2>&1 | Out-String
  
  if ($output -match "Non-existent domain" -or $output -match "Server failed" -or $output -match "can't find" -or $output -match "NXDOMAIN") {
    Write-Host "$domain - AVAILABLE" -ForegroundColor Green
    $available += $domain
  } else {
    Write-Host "$domain - TAKEN" -ForegroundColor Red
    $taken += $domain
  }
  
  if ($checked % 20 -eq 0) {
    Write-Host "`nChecked $checked/$($domains.Count) domains...`n" -ForegroundColor Yellow
  }
  
  # Small delay to avoid rate limiting
  Start-Sleep -Milliseconds 100
}

Write-Host "`n=== AVAILABLE DOMAINS (BATCH 2) ===" -ForegroundColor Green
Write-Host ""

if ($available.Count -eq 0) {
  Write-Host "No available domains found in this batch." -ForegroundColor Red
} else {
  $available | ForEach-Object { Write-Host $_ -ForegroundColor Green }
}

Write-Host "`nTotal available in batch 2: $($available.Count)/$($domains.Count)" -ForegroundColor Cyan

# Append results to existing file
if (Test-Path "domain-results.json") {
  $existingResults = Get-Content "domain-results.json" | ConvertFrom-Json
  $existingResults.available += $available
  $existingResults.taken += $taken
  $existingResults.totalChecked += $domains.Count
  $existingResults.totalAvailable = $existingResults.available.Count
  $existingResults | ConvertTo-Json | Out-File -FilePath "domain-results.json" -Encoding UTF8
} else {
  $results = @{
    available = $available
    taken = $taken
    totalChecked = $domains.Count
    totalAvailable = $available.Count
  }
  $results | ConvertTo-Json | Out-File -FilePath "domain-results.json" -Encoding UTF8
}

Write-Host "`nResults appended to domain-results.json" -ForegroundColor Cyan
