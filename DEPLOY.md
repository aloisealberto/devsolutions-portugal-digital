# Guia de Deploy

## Configuração do GitHub Actions

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
