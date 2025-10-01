# Guia de Deploy

## Deploy Manual (Recomendado para HostGator)

### Passo 1: Compilar o Projeto

**Windows:**
```bash
build-manual.bat
```

**Linux/Mac:**
```bash
chmod +x build-manual.sh
./build-manual.sh
```

### Passo 2: Upload via cPanel

1. Aceda ao cPanel da HostGator
2. Abra o **File Manager**
3. Navegue até `public_html/`
4. Faça upload de **TODOS** os ficheiros da pasta `dist/`
5. Certifique-se que o `.htaccess` foi enviado
6. Configure permissões:
   - Ficheiros: **644**
   - Pastas: **755**

### Passo 3: Testar o Deploy

Acesse: `https://seudominio.com/test.html`

Se vir a página de sucesso, o deploy funcionou! ✅

---

## Configuração do GitHub Actions (Automático)

Este projeto está configurado para deploy automático via FTP sempre que houver push na branch `main`.

### Passo 1: Configurar Secrets no GitHub

Acesse `Settings > Secrets and variables > Actions` no seu repositório GitHub e adicione os seguintes secrets:

#### Credenciais FTP:
- `FTP_HOST` - Endereço do servidor FTP (ex: `ftp.seudominio.com`)
- `FTP_USER` - Utilizador FTP
- `FTP_PASSWORD` - Password FTP

#### Variáveis de Ambiente do Supabase:
- `VITE_SUPABASE_URL` - `https://zecmyrrxkogrqynmbkpj.supabase.co`
- `VITE_SUPABASE_PUBLISHABLE_KEY` - `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InplY215cnJ4a29ncnF5bm1ia3BqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNDczNjMsImV4cCI6MjA3NDgyMzM2M30.-WDJsazl4CKGkZ_rIOweKjK_W_xQqdu4RDE_IvtvNvk`
- `VITE_SUPABASE_PROJECT_ID` - `zecmyrrxkogrqynmbkpj`

### Passo 2: Como funciona

1. Quando fizer push para a branch `main`, o GitHub Actions irá:
   - Instalar as dependências
   - Compilar o projeto com as variáveis de ambiente
   - Enviar apenas a pasta `dist/` para o servidor FTP

2. O ficheiro `.htaccess` garante que o roteamento SPA funcione corretamente

### Passo 3: Verificar Deploy

Após o primeiro push:
1. Acesse `Actions` no GitHub para ver o progresso
2. Verifique se o deploy foi concluído com sucesso
3. Acesse o seu domínio para testar

### Troubleshooting

#### Erro 403 - Acesso Negado na Hostgator

Se receber erro 403, siga estes passos:

1. **Verificar estrutura de pastas**:
   - O workflow envia para `/public_html/`
   - Certifique-se que esta pasta existe no seu FTP
   - Alguns planos Hostgator usam apenas `/` ou `/httpdocs/`

2. **Testar acesso básico**:
   - Após o deploy, acesse `https://seudominio.com/test.html`
   - Se este ficheiro aparecer, o FTP está a funcionar

3. **Verificar ficheiros enviados**:
   - Acesse o FTP e verifique se os ficheiros estão em `public_html/`
   - Confirme que o ficheiro `.htaccess` foi enviado
   - Verifique que existe um ficheiro `index.html` na raiz

4. **Permissões de ficheiros**:
   - Ficheiros: 644 (rw-r--r--)
   - Pastas: 755 (rwxr-xr-x)

5. **Limpar cache**:
   - Limpe o cache do browser
   - Tente aceder em modo privado/incógnito

- **Erro de permissões FTP**: Verifique as credenciais nos secrets
- **Página 404**: Certifique-se que o `.htaccess` foi enviado corretamente
- **Funcionalidade não funciona**: Verifique se as variáveis de ambiente do Supabase estão corretas

### Deploy Manual (Opcional)

Para fazer deploy manual:
```bash
npm install
npm run build
```

Depois envie o conteúdo da pasta `dist/` para o servidor via FTP.
