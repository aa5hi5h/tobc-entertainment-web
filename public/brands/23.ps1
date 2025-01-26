$files = Get-ChildItem -File
$counter = 1

foreach ($file in $files) {
    $newName = "$counter$($file.Extension)"
    Rename-Item -Path $file.FullName -NewName $newName
    $counter++
}

Write-Host "Renaming complete. $($counter - 1) files processed."