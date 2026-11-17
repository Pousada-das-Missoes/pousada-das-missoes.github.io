# Roteiros pelas Missões | Pousada das Missões

Página de ideias de roteiros (1 a 7 dias) para o link da bio do @pousadadasmissoes.
A pousada sugere; não vende pacote nem roteiro.

## Páginas

- `index.html`: **página inicial** (desde 17/11/2026) = "Conheça a pousada", espaços internos com galeria e visualizador em tela cheia. Textos e fotos em `pousada-fotos.js`, fotos em `img/pousada/`.
- `roteiros.html`: ideias de roteiro, com a capa rotativa e os 7 cartões (era a página inicial até 17/11/2026).
- `roteiro.html?dias=N`: página de cada roteiro (N de 1 a 7), dia a dia, com uma foto para cada lugar.
  Uma página só serve para os 7 roteiros: o conteúdo vem de `roteiros.js`.
- `pontos.html`: pontos turísticos.
- `pousada.html`: só redireciona para a página inicial (endereço antigo da pousada, para link já compartilhado não quebrar).

No ar (GitHub Pages): https://pedronicolasmm-coder.github.io/pousada-roteiros/

## Como editar

- **Textos dos roteiros:** `roteiros.js`. Cada lugar tem nome (`t`), descrição (`d`) e, quando falta confirmar, `c`.
- **Etiquetas "a confirmar":** aparecem enquanto `RASCUNHO = true` no topo de `roteiros.js`. Depois da aprovação, trocar para `false`.
- **Cidade de cada lugar:** campo `o` em `roteiros.js` (aparece na legenda da foto e conta as cidades de cada roteiro).
- **Como chegar:** bloco no `roteiros.html` com mapa do Google e tempos de viagem marcados "a confirmar" (a página inicial tem o bloco "Onde fica a pousada").
- **Google:** as páginas estão com `noindex` (rascunho). Tirar essa linha do `index.html`, `roteiros.html`, `roteiro.html` e `pontos.html` quando aprovar.

## Fotos

Basta colocar o arquivo com o nome certo. Ele aparece sozinho no lugar do espaço reservado.

| Arquivo | Onde aparece |
|---|---|
| 12 fotos (sítio, Fonte, Caaró, Catedral, Som e Luz, São João Batista, São Nicolau, San Ignacio...) | Capa rotativa da página de roteiros (troca a cada 3 s; lista e legendas no `roteiros.html`, bloco `hero-fotos`; para cada foto nova, mais um `<i></i>` em `hero-prog`) |
| `img/roteiro-N-a.jpg` | Cartão do roteiro na página de roteiros e capa da página do roteiro |
| `img/lugares/<chave>.jpg` | Foto de cada lugar dentro do roteiro. A chave é o nome do lugar em `roteiros.js` (ex.: `museu`, `praca`, `caaro`) |
| `img/cta.jpg` | Fundo do convite final |

**Lugares ainda sem foto (aparece o espaço reservado):** irmaica, jantar, cotiguacu.

## Atualizar o site

Depois de mudar qualquer arquivo, troque o número `?v=` (ex.: `20261111c`) nos `<link>` e `<script>` do `index.html`, `roteiros.html`, `roteiro.html` e `pontos.html`. Isso faz o navegador de quem já visitou buscar as fotos e textos novos na hora.

## Link direto para um roteiro

`roteiro.html?dias=3` abre o roteiro de 3 dias. O link antigo `index.html#3-dias` (de qualquer página) redireciona para ele.

## Origem das fotos atuais (10/11/2026)

- **Acervo da pousada (Drive):** capa, hero-2 (IMG_9925), hero-4 (IMG_9906), hero-5 (IMG_9946), cta, e em `lugares/`: sitio, someluz, cafe, volta, piscina, livre.
- **Wikimedia Commons (crédito no rodapé e em `creditos.json`):** Fonte, Caaró, Catedral Angelopolitana, São João Batista, São Nicolau, arcos do sítio, San Ignacio Miní, praça de Santo Ângelo, catedral de São Luiz Gonzaga, igreja à noite.
- Ao trocar uma foto do Commons por uma da pousada, tirar o crédito correspondente do rodapé (o mesmo bloco `creditos` nas 4 páginas).

## Versão em espanhol

- Aparece sozinha quando o navegador da pessoa está em espanhol (Argentina, Uruguai, Paraguai...).
- A pessoa pode trocar no seletor **PT | ES** (topo no computador, menu no celular e rodapé). A escolha fica salva e segue nas outras páginas.
- Link direto em espanhol: qualquer página com `?lang=es` (ex.: `?lang=es` no endereço principal, `roteiros.html?lang=es`, `roteiro.html?dias=3&lang=es`). Bom para anúncio no Uruguai ou na Argentina.
- **Onde editar:** textos fixos das páginas ficam no próprio HTML, no atributo `data-es="..."` ao lado do texto em português. Roteiros, lugares, página da pousada e frases do site ficam em `es.js`.
- Ao mudar um texto em português, mude também a versão em espanhol. Lugar ou espaço novo sem tradução em `es.js` aparece em português.
- No espanhol a pousada fala de "habitaciones" (quarto de hotel em espanhol) e "posada".

## Versão em inglês

- Aparece sozinha quando o navegador está em inglês ou em outra língua que não seja português nem espanhol (alemão, francês...), **desde que a pessoa esteja fora do Brasil** (pelo fuso horário). Brasileiro com celular em inglês continua vendo em português.
- Seletor **PT | ES | EN** no topo, no menu do celular e no rodapé. Link direto: qualquer página com `?lang=en`.
- **Onde editar:** textos fixos no HTML, no atributo `data-en="..."`; roteiros, lugares, página da pousada e frases do site em `en.js`; nomes e legendas dos pontos turísticos em `pontos.js` (terceira posição).
- No inglês a pousada é "the inn" e os apartamentos são "rooms" ("apartment" em inglês é imóvel de aluguel). Café = "the best breakfast in the region". Som e Luz = "Sound and Light Show".

## Página dos pontos turísticos (`pontos.html`)

- Um cartão por ponto no topo (índice) e, abaixo, uma parte para cada ponto com texto, etiquetas, "aparece nos roteiros de" e galeria.
- **Onde editar:** `pontos.js` (grupo, nome em português, espanhol e inglês, etiquetas e fotos com legenda). Cidade e texto vêm do `roteiros.js`, pelo mesmo id do lugar.
- Nas páginas de roteiro, cada passeio que tem página própria ganha o link "Saiba mais sobre este ponto".
- Fotos extras dos pontos ficam em `img/pontos/`. Galeria fecha certinho com 1, 2, 3, 5 ou 9 fotos.

## Capas rotativas e qualidade das fotos

- Toda capa em tela cheia pula sozinha a foto que ficaria esticada demais naquela tela (mais de 1,6x). Ela continua aparecendo no passeio, só sai da capa.
- Para a capa ficar boa, use fotos horizontais com 2000 px ou mais de largura.
