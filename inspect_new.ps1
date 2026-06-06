Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\KIIT\.gemini\antigravity-ide\brain\943b2983-41f5-4329-84ca-5582272ba0bb"
$files = @("media__1780594459821.jpg", "media__1780594459921.jpg", "media__1780594459965.jpg")

foreach ($f in $files) {
    $p = Join-Path $dir $f
    $img = [System.Drawing.Image]::FromFile($p)
    Write-Output "$f : $($img.Width) x $($img.Height)"
    $img.Dispose()
}
