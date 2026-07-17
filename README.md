# Site AZAB — Associação de Zoológicos e Aquários do Brasil

Site institucional remodelado da AZAB. Site **estático** (HTML + CSS + JS puros), sem
dependência de build ou framework. Todo o conteúdo (textos, fotos, logos e documentos)
foi migrado do site original [azab.org.br](https://azab.org.br).

> **Importante:** todas as páginas incluem `<meta name="robots" content="noindex, nofollow">`
> e há um `robots.txt` bloqueando indexação. Este site **não** deve ser indexado por buscadores.

## Estrutura

```
/
├── index.html              Página inicial
├── historia.html           Institucional
├── missao-visao.html
├── diretoria.html
├── comites.html
├── conservacao.html        Áreas de atuação
├── educacao.html
├── educacao-ambiental.html
├── pesquisa.html
├── bem-estar-animal.html
├── nutricao.html
├── aquarios.html
├── lazer.html
├── certificacao.html
├── associados.html         Rede de associados (mapa + grade filtrável)
├── congresso.html          Eventos
├── congressos-anteriores.html
├── encontro-de-educacao.html
├── capacitacoes.html
├── campanhas.html          Recursos
├── comunicacao.html
├── noticias.html
├── biblioteca.html
├── documentos.html
├── legislacao.html
├── associe-se.html
├── contato.html
├── robots.txt
└── assets/
    ├── css/azab.css        Design system completo
    ├── js/azab.js          Navegação, dados dos associados, mapa e interações
    ├── img/                Fotos, logos e o mapa do Brasil (brasil.svg)
    └── docs/               Anais dos congressos, legislação e programações (PDF)
```

## Como editar

- **Textos e imagens de cada página:** edite diretamente o arquivo `.html` correspondente.
- **Menu de navegação, rodapé e lista de associados:** centralizados em `assets/js/azab.js`
  (constantes `NAV`, `MEMBERS`, `PARTNERS`, `SOCIAL`). O cabeçalho e o rodapé são
  injetados automaticamente em todas as páginas por esse arquivo.
- **Cores, tipografia e componentes:** `assets/css/azab.css` (variáveis em `:root`).

## Identidade visual

- Verde-floresta `#3A5148` · Amarelo-ouro `#F2D34A` · Toque oceano `#2E8B84`
- Tipografia: **Fraunces** (títulos) + **Inter** (texto)

## Rodar localmente

Por ser estático, basta um servidor HTTP simples:

```bash
python -m http.server 8099
# abra http://localhost:8099
```
