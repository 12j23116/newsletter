# Generate 100+ short domain names (≤6 letters) for tech brand
$domains = @(
  # Tech-sounding short names
  "nexu","zync","qube","flux","node","core","base","link","sync","pulse",
  "spark","grid","mesh","wave","beam","ray","ion","arc","orb","zen",
  "vox","pix","hex","bin","bit","bot","net","web","app","dev",
  "tech","data","code","sys","ops","api","io","ai","ml","xr",
  "vr","ar","qc","bc","av","nv","pv","kv","jv","sv",
  # Creative combinations
  "nxt","prv","fut","pas","now","neo","nov","nvo","nva","nxe",
  "qtx","qnx","qfx","qvx","qix","qox","qux","qax","qex","qix",
  "ztx","znx","zfx","zvx","zix","zox","zux","zax","zex","zix",
  "xtx","xnx","xfx","xvx","xix","xox","xux","xax","xex","xix",
  "vtx","vnx","vfx","vvx","vix","vox","vux","vax","vex","vix",
  # Brandable short names
  "kore","synk","flx","nod","bse","lnk","pls","sprk","grd","msh",
  "wve","bem","ry","on","rc","rb","zn","voxe","pixe","hexe",
  "bine","bite","bote","nete","webe","appe","deve","teche","date","code",
  "syse","opse","apie","aie","mle","xre","vre","are","qce","bce",
  "ave","nve","pve","kve","jve","sve","nxta","prva","futa","pasa",
  # More creative options
  "axio","exio","ixio","oxio","uxio","axea","exea","ixea","oxea","uxea",
  "axia","exia","ixia","oxia","uxia","axeo","exeo","ixeo","oxeo","uxeo",
  "axiu","exiu","ixiu","oxiu","uxiu","axie","exie","ixie","oxie","uxie",
  "qrio","qrao","qroo","qruo","qrae","qree","qrie","qroe","qrue","qrie",
  "zrio","zrao","zroo","zruo","zrae","zree","zrie","zroe","zrue","zrie",
  # Additional brandable names
  "mova","nova","sova","tova","vova","wova","xova","yova","zova","aova",
  "movi","novi","sovi","tovi","vovi","wovi","xovi","yovi","zovi","aovi",
  "movo","novo","sovo","tovo","vovo","wovo","xovo","yovo","zovo","aovo",
  "movu","novu","sovu","tovu","vovu","wovu","xovu","yovu","zovu","aovu",
  "move","nove","sove","tove","vove","wove","xove","yove","zove","aove"
) | Select-Object -Unique

Write-Host "Checking domain availability for $($domains.Count) domains..." -ForegroundColor Cyan
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

Write-Host "`n=== AVAILABLE DOMAINS ===" -ForegroundColor Green
Write-Host ""

if ($available.Count -eq 0) {
  Write-Host "No available domains found." -ForegroundColor Red
} else {
  $available | ForEach-Object { Write-Host $_ -ForegroundColor Green }
}

Write-Host "`nTotal available: $($available.Count)/$($domains.Count)" -ForegroundColor Cyan

# Save results to file
$results = @{
  available = $available
  taken = $taken
  totalChecked = $domains.Count
  totalAvailable = $available.Count
}

$results | ConvertTo-Json | Out-File -FilePath "domain-results.json" -Encoding UTF8
Write-Host "`nResults saved to domain-results.json" -ForegroundColor Cyan
