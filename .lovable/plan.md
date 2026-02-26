

## Refinamento: Site Acadêmico Sóbrio e Cinematográfico

O usuário solicita uma revisão estética significativa do site existente. O tom atual é expressivo e gráfico (glows neon, gradientes magenta pulsantes, texto com sombras brilhantes). O tom desejado é **sóbrio, elegante, cinematográfico e academicamente rigoroso** — sem perder a identidade autoral.

### Diagnóstico do estado atual vs. o desejado

| Atual | Desejado |
|-------|----------|
| Glow neon intenso nos títulos | Tipografia limpa, hierarquia por peso/tamanho |
| Orbs pulsantes de cor no hero | Fundo escuro simples, talvez uma linha sutil |
| `gradient-text` em todos os títulos de seção | Títulos em branco/foreground, com acento pontual |
| `border-glow` (box-shadow neon) nos cards | Bordas finas, sem glow |
| Linguagem informal em trechos ("inscrita no asfalto") | Texto acadêmico preciso conforme fornecido |
| `text-glow-primary` (text-shadow neon) | Sem text-shadow |
| `animate-pulse-glow` no background | Estático ou transição muito sutil |

### Mudanças planejadas

**1. Identidade Visual (CSS / Tailwind)**
- Reduzir intensidade do `--primary` de magenta 100% para algo mais contido (ex: `300 70% 55%`)
- Remover ou atenuar `text-glow-primary`, `border-glow`, `animate-pulse-glow`
- Manter `gradient-primary` apenas para linhas decorativas finas, não para texto de títulos
- Ajustar `gradient-text` para ser usado apenas no título principal (hero), não em seções internas

**2. SectionTitle — sobriedade**
- Títulos de seção em `text-foreground` (branco), sem `gradient-text`
- Manter a linha decorativa fina abaixo, mas mais discreta

**3. Home / Hero — cinematográfico e contido**
- Remover os orbs pulsantes de fundo
- Manter fundo escuro limpo, possivelmente com uma linha horizontal sutil ou vinheta
- Título com hierarquia clara: "LOWMOVIE™" grande, subtítulo menor
- Remover `text-glow-primary` do título; usar cor magenta sem glow
- CTA mais discreto

**4. Conteúdo textual — atualizar para a versão definitiva**
- **Apresentação**: Atualizar texto para a versão fornecida (deslocamento epistemológico, linguagem mais precisa)
- **Metodologia**: Atualizar descrições dos eixos (Afeto = vínculo sensível com o campo, etc.)
- **Estrutura**: Adicionar seção "Operadores e Campo Simbólico" separada ou integrada
- **FAQ**: Atualizar para 7 questões na versão definitiva (remover "Qual é a contribuição inédita?" como pergunta separada, adicionar "Contribuição — deslocamento epistemológico")
- **Conclusão**: Atualizar texto final para versão definitiva ("O LowMovie™ evidencia que práticas subculturais podem produzir linguagem audiovisual autônoma...")

**5. Cards e elementos interativos**
- Remover `border-glow` dos hover states
- Manter hover sutil (apenas mudança de border-color, sem glow)
- Tipografia dos cards: reduzir uppercase onde excessivo

**6. Navbar**
- Renomear "FAQ" para "Questões Críticas" no menu
- Manter estrutura atual (já está sóbria)

### Arquivos a modificar

1. `src/index.css` — atenuar utilities de glow, ajustar primary
2. `src/components/SectionTitle.tsx` — remover gradient-text
3. `src/pages/Index.tsx` — hero sóbrio, sem orbs, sem glow
4. `src/pages/Apresentacao.tsx` — texto atualizado
5. `src/pages/Metodologia.tsx` — texto atualizado
6. `src/pages/Estrutura.tsx` — texto atualizado + operadores/campo simbólico
7. `src/pages/Filme.tsx` — texto atualizado
8. `src/pages/Coletivo.tsx` — texto atualizado
9. `src/pages/Contribuicoes.tsx` — texto atualizado
10. `src/pages/FAQ.tsx` — 7 questões atualizadas
11. `src/pages/Conclusao.tsx` — texto final atualizado
12. `src/components/Navbar.tsx` — renomear "FAQ" para "Questões"

### Arquitetura de páginas
Mantém-se a mesma estrutura de 9 páginas com rotas separadas. Nenhuma página nova é necessária.

