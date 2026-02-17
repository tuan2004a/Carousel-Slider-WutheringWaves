@echo off
echo Starting JSON Server and Vite Dev Server...
echo.

REM Chạy JSON Server trong cửa sổ mới
start "JSON Server" cmd /k "pnpm json"

REM Đợi một chút để JSON Server khởi động
timeout /t 2 /nobreak >nul

REM Chạy Vite Dev Server trong cửa sổ hiện tại
echo Starting Vite Dev Server...
pnpm dev