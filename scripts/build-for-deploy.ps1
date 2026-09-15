<#
.SYNOPSIS
  Builds the site against the LIVE API (moveitsolution.com's admin backend)
  and zips the output, ready to upload to the live server's document root.

.DESCRIPTION
  Run this any time you've added/edited content in the admin panel and want
  it reflected on the live site. It:
    1. Stops the local dev server (it locks .next, which breaks the build)
    2. Temporarily moves .env.local aside so .env.production (the live API
       URL) is actually used for this build
    3. Runs a clean production build
    4. Zips the result to zip\moveitsolution-out.zip
    5. Restores .env.local and restarts the dev server for local testing

  After running this, upload zip\moveitsolution-out.zip to the live site's
  document root via your hosting's file manager and extract it there,
  overwriting existing files.
#>

$ErrorActionPreference = "Stop"
$projectRoot = Split-Path -Parent $PSScriptRoot
Set-Location $projectRoot

Write-Host "Stopping any dev server on port 3000..." -ForegroundColor Cyan
$conn = Get-NetTCPConnection -LocalPort 3000 -State Listen -ErrorAction SilentlyContinue
if ($conn) { Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue }

$envLocalPath = Join-Path $projectRoot ".env.local"
$envLocalHeld = $false
if (Test-Path $envLocalPath) {
    Write-Host "Moving .env.local aside so .env.production applies..." -ForegroundColor Cyan
    Move-Item $envLocalPath "$envLocalPath.holding" -Force
    $envLocalHeld = $true
}

try {
    Write-Host "Cleaning previous build..." -ForegroundColor Cyan
    Remove-Item -Recurse -Force (Join-Path $projectRoot ".next") -ErrorAction SilentlyContinue
    Remove-Item -Recurse -Force (Join-Path $projectRoot "out") -ErrorAction SilentlyContinue

    Write-Host "Building against the live API..." -ForegroundColor Cyan
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "Build failed. See output above." }

    $zipDir = Join-Path $projectRoot "zip"
    New-Item -ItemType Directory -Force $zipDir | Out-Null
    $zipPath = Join-Path $zipDir "moveitsolution-out.zip"
    if (Test-Path $zipPath) { Remove-Item $zipPath -Force }

    Write-Host "Zipping build output..." -ForegroundColor Cyan
    Compress-Archive -Path (Join-Path $projectRoot "out\*") -DestinationPath $zipPath -CompressionLevel Optimal

    $size = [math]::Round((Get-Item $zipPath).Length / 1MB, 2)
    Write-Host ""
    Write-Host "Done. Ready to upload: $zipPath" -ForegroundColor Green
    Write-Host "Size: $size MB" -ForegroundColor Green
    Write-Host "Upload it to the live site's document root, extract in place, overwrite existing files." -ForegroundColor Green
}
finally {
    if ($envLocalHeld) {
        Write-Host "Restoring .env.local..." -ForegroundColor Cyan
        Move-Item "$envLocalPath.holding" $envLocalPath -Force
    }
    Write-Host "Restarting local dev server..." -ForegroundColor Cyan
    Start-Process -FilePath "npm" -ArgumentList "run","dev" -WindowStyle Hidden
}
