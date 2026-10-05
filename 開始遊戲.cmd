@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo 請先安裝 Node.js 24，再重新開啟這個檔案。
  pause
  exit /b 1
)
node scripts\serve.mjs
pause
