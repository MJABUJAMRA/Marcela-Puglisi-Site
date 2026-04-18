# Site Dra. Marcela Puglisi

  Site profissional para a Dra. Marcela Puglisi, especialista em Harmonização Orofacial.

  ## Como rodar localmente

  ```bash
  npm install
  npm run dev
  ```

  O site estará disponível em http://localhost:5000

  ## Build de produção

  ```bash
  npm run build
  npm run start
  ```

  ## Stack

  - React 18 + TypeScript + Vite
  - Express 5 (Node.js)
  - Tailwind CSS + shadcn/ui
  - Drizzle ORM (PostgreSQL)
  - Wouter (routing) + TanStack React Query
  - Framer Motion

  ## Estrutura

  - `client/` - Frontend React
  - `server/` - Backend Express
  - `shared/` - Schemas e tipos compartilhados
  - `attached_assets/` - Mídia estática (imagens, vídeos)

  ## Variáveis de ambiente

  - `DATABASE_URL` - String de conexão PostgreSQL

  ## Arquivos de mídia ausentes

  Os seguintes arquivos não puderam ser enviados via API (limite de tamanho do proxy / limite do GitHub) e precisam ser adicionados manualmente via Git LFS ou upload direto na interface web:

  - `attached_assets/IMG_1911_1770074761231.png` (1.7MB)
  - `attached_assets/IMG_1913_1770074761231.png` (1.4MB)
  - `attached_assets/IMG_1914_1770074761231.png` (1.0MB)
  - `attached_assets/IMG_2292_1770657411318.png` (1.2MB)
  - `attached_assets/Lugar_20250410_074247_0000_Original_1770068010747.png` (2.1MB)
  - `attached_assets/Lugar_20250410_074247_0000_Original_1770068107621.png` (2.1MB)
  - `attached_assets/Untitled_design_1770238822059.png` (1.3MB)
  - `attached_assets/_users_118245a9-cc40-4bfd-9e4c-3f593b64dcfe_generated_89c50627_1770068010747.mp4` (1.2MB)
  - `attached_assets/ScreenRecording_02-02-2026_20-11-23_1_1770073919281.mp4` (33MB)
  - `attached_assets/ScreenRecording_02-09-2026_03-37-27_1_1770632416252.mov` (196MB) — requer Git LFS
  - `client/src/assets/videos/dra-marcela-profile.mp4` (196MB) — requer Git LFS

  Os arquivos acima de 100MB excedem o limite padrão do GitHub e necessitam Git LFS.
  