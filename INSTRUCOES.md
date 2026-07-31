Passos rápidos para publicar tudo no GitHub:

1) Certifique-se que o repositório tem os arquivos no branch `main` (já feito).
2) Se quiser publicar o site pelo GitHub Pages usando a pasta `portfolio-site`, vá em Settings > Pages e selecione a branch `main` e a pasta `/ (root)` se você mover os arquivos do site para a raiz, ou selecione `/portfolio-site` se preferir manter a pasta. Após salvar, aguarde alguns minutos pelo deploy.

Rodar localmente:
- Site (preview): abra `portfolio-site/index.html` no browser ou use um servidor local (Live Server / http-server).

Rodar o bot localmente:
- cd yuuquebot
- cp .env.example .env  (coloque o token em .env)
- npm install
- npm start

Observações de segurança:
- Nunca comite tokens ou segredos. Use `.env` e o arquivo `.env.example` como modelo.
- Formspree: substitua `YOURENDPOINT` pelo seu endpoint do Formspree.

Próximos passos que posso fazer para automatizar:
- Gerar um workflow GitHub Actions para publicar `portfolio-site/` automaticamente no Pages.
- Adicionar um arquivo CNAME para domínio personalizado.
- Criar um README mais detalhado com badges.

Se quiser que eu gere o workflow agora, diga "Gerar workflow". Se quiser que eu mova o site para a raiz (index.html na raiz) diga "mover site para raiz".
