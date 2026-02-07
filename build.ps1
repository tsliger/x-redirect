$distFolder = ".\dist"
$targetFolder = ".\out"
$sourceZip = "$targetFolder\source.zip"
$extensionZip = "$targetFolder\extension.zip"

bun run build

if (-Not (Test-Path -Path $targetFolder)) {
    New-Item -Path "." -Name "out" -ItemType "Directory" | Out-Null
}

if (Test-Path -Path $distFolder) {
    Write-Host "Zipping extension from $distFolder..." -ForegroundColor Cyan
    if (Test-Path $extensionZip) { Remove-Item $extensionZip }
    Compress-Archive -Path "$distFolder\*" -DestinationPath $extensionZip
} else {
    Write-Host "ERR: Distribution folder NOT found. Run 'bun run build' first." -ForegroundColor Red
}

Write-Host "Zipping source code (respecting .gitignore)..." -ForegroundColor Cyan
if (Test-Path $sourceZip) { Remove-Item $sourceZip }

git archive -o $sourceZip HEAD

Write-Host "Success! Bundles are in $targetFolder" -ForegroundColor Green
