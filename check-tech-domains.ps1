# Generate 100 domain names (6-8 letters) containing AI, Fusion, or Nuclear
$domains = @(
  # AI-related domains (6-8 letters)
  "aihub","ainex","aiqub","aiflx","aicor","aibase","ailnk","aisyn","aipls","aispk",
  "aigrid","aimesh","aiwave","aibeam","airay","aiion","aiarc","aiorb","aizen","aivox",
  "aipix","aihex","aibin","aibit","aibot","ainet","aiweb","aiapp","aidev","aitec",
  "aidata","aicode","aisys","aiops","aiapi","aiio","aixr","aivr","aiar","aiqc",
  "aibc","aiav","ainv","aipv","aikv","aijv","aisv","ainxt","aiprv","aifut",
  "aipas","ainow","aineo","ainov","ainvo","ainva","ainxe","aiqtx","aiqnx","aiqfx",
  "aiqvx","aiqix","aiqux","aiqax","aiqex","aiztx","aiznx","aizfx","aizvx","aizix",
  "aizox","aizux","aizax","aizex","aixtx","aixnx","aixfx","aixvx","aixix","aixox",
  "aixux","aixax","aixex","aivtx","aivnx","aivfx","aivvx","aivix","aivux","aivax",
  "aivex","aikore","aisynk","aiflx","ainod","aibse","ailnk","aipls","aisprk","aigrd",
  
  # Fusion-related domains (6-8 letters)
  "fusion","xfusion","fusionx","fusio","fusi","fusio","fusiona","fusioni","fusiono","fusionu",
  "fusione","fusione","fusionai","fusionio","fusionxr","fusionvr","fusionar","fusionqc",
  "fusionbc","fusionav","fusionnv","fusionpv","fusionkv","fusionjv","fusionsv","fusionnxt",
  "fusionprv","fusionfut","fusionpas","fusionnow","fusionneo","fusionnov","fusionnvo",
  "fusionnva","fusionnxe","fusionqtx","fusionqnx","fusionqfx","fusionqvx","fusionqix",
  "fusionqux","fusionqax","fusionqex","fusionztx","fusionznx","fusionzfx","fusionzvx",
  "fusionzix","fusionzox","fusionzux","fusionzax","fusionzex","fusionxtx","fusionxnx",
  "fusionxfx","fusionxvx","fusionxix","fusionxox","fusionxux","fusionxax","fusionxex",
  "fusionvtx","fusionvnx","fusionvfx","fusionvvx","fusionvix","fusionvux","fusionvax",
  "fusionvex","fusionkore","fusionsynk","fusionflx","fusionnod","fusionbse","fusionlnk",
  "fusionpls","fusionsprk","fusiongrd","fusionmsh","fusionwve","fusionbem","fusionry",
  "fusionon","fusionrc","fusionrb","fusionzn","fusionvoxe","fusionpixe","fusionhexe",
  "fusionbine","fusionbite","fusionbote","fusionnete","fusionwebe","fusionappe",
  "fusiondeve","fusionteche","fusiondate","fusionsyse","fusionopse","fusionapie",
  "fusionaie","fusionmle","fusionxre","fusionvre","fusionare","fusionqce","fusionbce",
  "fusionave","fusionnve","fusionpve","fusionkve","fusionjve","fusionsve","fusionnxta",
  "fusionprva","fusionfuta","fusionpasa","fusionaxio","fusionexio","fusionixio",
  "fusionoxio","fusionuxio","fusionaxea","fusionexea","fusionixea","fusionoxea",
  "fusionuxea","fusionaxia","fusionexia","fusionixia","fusionoxia","fusionuxia",
  "fusionaxeo","fusionexeo","fusionixeo","fusionoxeo","fusionuxeo","fusionaxiu",
  "fusionexiu","fusionoxiu","fusionuxiu","fusionaxie","fusionexie","fusionixie",
  "fusionoxie","fusionuxie","fusionqrio","fusionqrao","fusionqroo","fusionqruo",
  "fusionqrae","fusionqree","fusionqrie","fusionqroe","fusionqrue","fusionzrio",
  "fusionzrao","fusionzroo","fusionzruo","fusionzrae","fusionzree","fusionzrie",
  "fusionzroe","fusionzrue","fusionmova","fusionnova","fusionsova","fusiontova",
  "fusionvova","fusionwova","fusionxova","fusionyova","fusionzova","fusionaova",
  "fusionmovi","fusionnovi","fusionsovi","fusiontovi","fusionvovi","fusionwovi",
  "fusionxovi","fusionyovi","fusionzovi","fusionaovi","fusionmovo","fusionnovo",
  "fusionsovo","fusiontovo","fusionvovo","fusionwovo","fusionxovo","fusionyovo",
  "fusionzovo","fusionaovo","fusionmovu","fusionnovu","fusionsovu","fusiontovu",
  "fusionvovu","fusionwovu","fusionxovu","fusionyovu","fusionzovu","fusionaovu",
  "fusionmove","fusionnove","fusiontove","fusionvove","fusionwove","fusionxove",
  "fusionyove","fusionzove","fusionaove",
  
  # Nuclear-related domains (6-8 letters)
  "nuclear","xnuclear","nuclearx","nucler","nuclr","nucl","nuclea","nuclei","nucleo",
  "nucleu","nucleara","nucleari","nuclearo","nuclearu","nucleare","nucleare","nuclearai",
  "nucleario","nuclearxr","nuclearvr","nuclearar","nuclearqc","nuclearbc","nuclearav",
  "nuclearnv","nuclearpv","nuclearkv","nuclearjv","nuclearsv","nuclearnxt","nuclearprv",
  "nuclearfut","nuclearpas","nuclearnow","nuclearneo","nuclearnov","nuclearnvo",
  "nuclearnva","nuclearnxe","nuclearqtx","nuclearqnx","nuclearqfx","nuclearqvx",
  "nuclearqix","nuclearqux","nuclearqax","nuclearqex","nuclearztx","nuclearznx",
  "nuclearzfx","nuclearzvx","nuclearzix","nuclearzox","nuclearzux","nuclearzax",
  "nuclearzex","nuclearxtx","nuclearxnx","nuclearxfx","nuclearxvx","nuclearxix",
  "nuclearxox","nuclearxux","nuclearxax","nuclearxex","nuclearvtx","nuclearvnx",
  "nuclearvfx","nuclearvvx","nuclearvix","nuclearvux","nuclearvax","nuclearvex",
  "nuclearkore","nuclearsynk","nuclearflx","nuclearnod","nuclearbse","nuclearlnk",
  "nuclearpls","nuclearsprk","nucleargrd","nuclearmsh","nuclearwve","nuclearbem",
  "nuclearry","nuclearon","nuclearrc","nuclearrb","nuclearzn","nuclearvoxe",
  "nuclearpixe","nuclearhexe","nuclearbine","nuclearbite","nuclearbote","nuclearnete",
  "nuclearwebe","nuclearappe","nucleardeve","nuclearteche","nucleardate","nuclearsyse",
  "nuclearopse","nuclearapie","nuclearaie","nuclearmle","nuclearxre","nuclearvre",
  "nuclearare","nuclearqce","nuclearbce","nuclearave","nuclearnve","nuclearpve",
  "nuclearkve","nuclearjve","nuclearsve","nuclearnxta","nuclearprva","nuclearfuta",
  "nuclearpasa","nuclearaxio","nuclearexio","nuclearixio","nuclearoxio","nuclearuxio",
  "nuclearaxea","nuclearexea","nuclearixea","nuclearoxea","nuclearuxea","nuclearaxia",
  "nuclearexia","nuclearixia","nuclearoxia","nuclearuxia","nuclearaxeo","nuclearexeo",
  "nuclearixeo","nuclearoxeo","nuclearuxeo","nuclearaxiu","nuclearexiu","nuclearoxiu",
  "nuclearuxiu","nuclearaxie","nuclearexie","nuclearixie","nuclearoxie","nuclearuxie",
  "nuclearqrio","nuclearqrao","nuclearqroo","nuclearqruo","nuclearqrae","nuclearqree",
  "nuclearqrie","nuclearqroe","nuclearqrue","nuclearzrio","nuclearzrao","nuclearzroo",
  "nuclearzruo","nuclearzrae","nuclearzree","nuclearzrie","nuclearzroe","nuclearzrue",
  "nuclearmova","nuclearnova","nuclearsova","nucleartova","nuclearvova","nuclearwova",
  "nuclearxova","nuclearyova","nuclearzova","nuclearaova","nuclearmovi","nuclearnovi",
  "nuclearsovi","nucleartovi","nuclearvovi","nuclearwovi","nuclearxovi","nuclearyovi",
  "nuclearzovi","nuclearaovi","nuclearmovo","nuclearnovo","nuclearsovo","nucleartovo",
  "nuclearvovo","nuclearwovo","nuclearxovo","nuclearyovo","nuclearzovo","nuclearaovo",
  "nuclearmovu","nuclearnovu","nuclearsovu","nucleartovu","nuclearvovu","nuclearwovu",
  "nuclearxovu","nuclearyovu","nuclearzovu","nuclearaovu","nuclearmove","nuclearnove",
  "nucleartove","nuclearvove","nuclearwove","nuclearxove","nuclearyove","nuclearzove",
  "nuclearaove"
) | Select-Object -Unique

Write-Host "Checking domain availability for $($domains.Count) domains (6-8 letters with AI/Fusion/Nuclear)..." -ForegroundColor Cyan
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

Write-Host "`n=== AVAILABLE DOMAINS (AI/Fusion/Nuclear) ===" -ForegroundColor Green
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

$results | ConvertTo-Json | Out-File -FilePath "tech-domain-results.json" -Encoding UTF8
Write-Host "`nResults saved to tech-domain-results.json" -ForegroundColor Cyan
