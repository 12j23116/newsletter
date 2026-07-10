# Generate more short domain names (≤6 letters) for tech brand
$domains = @(
  # More unique combinations
  "zylo","xylo","vylo","nylo","mylo","lylo","kylo","jylo","hylo","gylo",
  "zyra","xyra","vyra","nyra","myra","lyra","kyra","jyra","hyra","gyra",
  "zyri","xyri","vyri","nyri","myri","lyri","kyri","jyri","hyri","gyri",
  "zyro","xyro","vyro","nyro","myro","lyro","kyro","jyro","hyro","gyro",
  "zyru","xyru","vyru","nyru","myru","lyru","kyru","jyru","hyru","gyru",
  # More creative names
  "kvox","pvox","tvox","nvox","vvox","zvox","fvox","wvox","bvox","mvox",
  "kxox","pxox","txox","nxox","vxox","zxox","fxox","wxox","bxox","mxox",
  "kvex","pvex","tvex","nvex","vvex","zvex","fvex","wvex","bvex","mvex",
  "kxex","pxex","txex","nxex","vxex","zxex","fxex","wxex","bxex","mxex",
  "kvix","pvix","tvix","nvix","vvix","zvix","fvix","wvix","bvix","mvix",
  # More brandable options
  "zylk","qylk","xylk","vylk","nylk","mylk","lylk","kylk","jylk","hylk",
  "zalk","qalk","xalk","valk","nalk","malk","lalk","kalk","jalk","halk",
  "zelk","qelk","xelk","velk","nelk","melk","lelk","kelk","jelk","helk",
  "zolk","qolk","xolk","volk","nolk","molk","lolk","kolk","jolk","holk",
  "zulk","qulk","xulk","vulk","nulk","mulk","lulk","kulk","julk","hulk",
  # More variations
  "kriz","priz","triz","nriz","vriz","zriz","friz","wriz","briz","mriz",
  "kraz","praz","traz","nraz","vraz","zraz","fraz","wraz","braz","mraz",
  "krez","prez","trez","nrez","vrez","zrez","frez","wrez","brez","mrez",
  "kroz","proz","troz","nroz","vroz","zroz","froz","wroz","broz","mroz",
  "kruz","pruz","truz","nruz","vruz","zruz","fruz","wruz","bruz","mruz",
  # Additional creative names
  "zinx","qinx","xinx","vinx","ninx","minx","linx","kinx","jinx","hinx",
  "zank","qank","xank","vank","nank","mank","lank","kank","jank","hank",
  "zonk","qonk","xonk","vonk","nonk","monk","lonk","konk","jonk","honk",
  "zunk","qunk","xunk","vunk","nunk","munk","lunk","kunk","junk","hunk",
  "zink","qink","xink","vink","nink","mink","link","kink","jink","hink",
  # More unique combinations
  "plex","flex","blex","klex","tlex","slex","rlex","mlex","nlex","vlex",
  "prox","frox","brox","krox","trox","srox","rrox","mrox","nrox","vrox",
  "crux","frux","brux","krux","trux","srux","rrux","mrux","nrux","vrux",
  "drix","trix","brix","krix","trix","srix","rrix","mrix","nrix","vrix",
  "drax","trax","brax","krax","trax","srax","rrax","mrax","nrax","vrax",
  # Final creative batch
  "zyke","xyke","vyke","nyke","myke","lyke","kyke","jyke","hyke","gyke",
  "zake","xake","vake","nake","make","lake","kake","jake","hake","gake",
  "zike","xike","vike","nike","mike","like","kike","jike","hike","gike",
  "zoke","xoke","voke","noke","moke","loke","koke","joke","hoke","goke",
  "zuke","xuke","vuke","nuke","muke","luke","kuke","juke","huke","guke"
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

Write-Host "`n=== AVAILABLE DOMAINS (BATCH 3) ===" -ForegroundColor Green
Write-Host ""

if ($available.Count -eq 0) {
  Write-Host "No available domains found in this batch." -ForegroundColor Red
} else {
  $available | ForEach-Object { Write-Host $_ -ForegroundColor Green }
}

Write-Host "`nTotal available in batch 3: $($available.Count)/$($domains.Count)" -ForegroundColor Cyan

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
