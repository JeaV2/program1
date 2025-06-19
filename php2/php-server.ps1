do {
    Write-Host "Starting PHP server..."
    $phpProcess = Start-Process -FilePath "C:\php\php.exe" -ArgumentList "-S 127.0.0.1:5500" -PassThru -WindowStyle Hidden

    Write-Host "Press Ctrl+R to restart the server or Ctrl+C to exit."

    while ($true) {
        if ([console]::KeyAvailable) {
            $key = [console]::ReadKey($true)
            if ($key.Modifiers -eq "Control" -and $key.Key -eq "R") {
                Write-Host "Restarting server..."
                Stop-Process -Id $phpProcess.Id -Force
                break
            }
        }
    }
} while ($true)