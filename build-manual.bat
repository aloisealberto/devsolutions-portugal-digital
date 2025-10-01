@echo off
chcp 65001 >nul
echo.
echo 🚀 DevSoluctions - Build Manual Script
echo ======================================
echo.

REM Verificar se node_modules existe
if not exist "node_modules\" (
    echo 📦 Instalando dependências...
    call npm install
)

echo 🏗️  Compilando projeto...
call npm run build

if %errorlevel% equ 0 (
    echo.
    echo ✅ Build concluído com sucesso!
    echo.
    echo 📂 Ficheiros prontos em: dist\
    echo.
    echo 📋 Próximos passos para deploy manual:
    echo 1. Aceda ao cPanel da HostGator
    echo 2. Abra o File Manager
    echo 3. Navegue até public_html/
    echo 4. Faça upload de TODOS os ficheiros da pasta 'dist\'
    echo 5. Certifique-se que .htaccess foi enviado
    echo 6. Configure permissões: ficheiros 644, pastas 755
    echo.
    echo 🧪 Teste: https://seudominio.com/test.html
    echo.
) else (
    echo.
    echo ❌ Erro ao compilar o projeto
    exit /b 1
)

pause
