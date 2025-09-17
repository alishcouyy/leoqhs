@echo off
echo Compressing all video files...

ffmpeg\ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe -i "images\lankaran.mp4" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart "images\lankaran-compressed.mp4"
ffmpeg\ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe -i "images\ismal.mp4" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart "images\ismal-compressed.mp4"
ffmpeg\ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe -i "images\quba.mp4" -c:v libx264 -crf 28 -preset fast -c:a aac -b:a 128k -movflags +faststart "images\quba-compressed.mp4"

echo Compression completed!
pause
