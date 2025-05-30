---
layout: post
title: Game Design Comportamental
image: assets/images/uploads/comportamentalcapa.jpg
date: 2014-10-06T17:09:19.000Z
categories: Texto Game
tags: Game-design Behaviorismo Psicologia
permalink: /gamedesigncomportamental
published: true
---
<h4><p style="text-align:center">Como a psicologia behaviorista é utilizada em jogos eletrônicos.</p></h4>
<!--more-->

>###### *John Hopson é o Chefe do Departamento de Pesquisa de Usuário da Bungie e foi o pesquisador chefe de jogos como Halo e Age of Empires. O artigo a seguir foi escrito por ele e postado no >>[então Gamasutra.com, agora Game Developer](https://www.gamedeveloper.com/design/behavioral-game-design) em 21 de Abril de 2001, disponível agora em português numa tradução livre feita por mim sob a revisão de Larissa Brito. Este texto serve como conteúdo extra para o meu artigo “[Como Games Viciam Você](https://jogazera.com.br/como-os-games-viciam-voce/)”, postado no site [Jogazera](https://jogazera.com.br/).*

---

Todo jogo de computador é desenvolvido em torno do mesmo elemento central: o jogador. Enquanto *hardware* e *software* mudam, a psicologia fundamental de como os jogadores aprendem e reagem aos games é uma constante. O estudo da mente já teve várias descobertas que podem auxiliar o game designer, mas a maioria delas são publicadas em jornais científicos e outros formatos inacessíveis. Ironicamente, boa parte dessas descobertas usam simples jogos como ferramentas para explorar como as pessoas aprendem e agem sob condições diferentes.

As técnicas que discutirei nesse artigo são as mais relevantes na Psicologia Comportamental. Mais conhecida pelas pesquisas com animais, ela foca em experiências e ações observadas. Uma marca dessa linha de pesquisa é que a maioria das descobertas são independentes de espécies e podem ser encontradas em vários seres vivos como pássaros, peixes e humanos. O que os psicólogos behavioristas procuram (e será o nosso foco aqui) são “regras” gerais de como as mentes aprendem e respondem ao ambiente. Devido a amplitude de espécies e contextos, essas regras são facilmente aplicáveis a novos domínios como a comunidade de desenvolvimento de jogos. Diferente da teoria dos jogos, que destaca como um jogador deve reagir a uma situação, esse artigo focará em como eles *realmente* reagem a certas condições gerais.

O que será mostrado aqui não é um projeto para jogos perfeitos, mas a apresentação de algumas formas básicas das reações de pessoas à diferentes camadas de recompensas. Todo jogo está implicitamente fazendo o jogador reagir de determinadas formas. A psicologia pode nos mostrar um quadro e um vocabulário para entender o que estamos dizendo aos nossos jogadores.

#### **Contingências e Esquemas**

A tradução concreta de “O que estamos dizendo aos nossos jogadores?” é “Quais são as contingências?” Contingência é uma ou várias regras que controlam quando as recompensas deverão ser entregues. A anedota sobre essa descoberta (passada a mim por um de seus estudantes) é que um dia B. F. Skinner ficou com pouca comida para alimentar os ratos que participavam de suas experiências e para evitar o risco de ter que parar de trabalhar no dia, ao invés de dar comida sempre que os ratos puxavam a alavanca, ele começou a fazê-lo só na décima vez. Testando vários regimes diferentes de recompensa, ele descobriu que havia produzido diferentes padrões de resposta. Disso nasceu uma nova área da psicologia, com inúmeras e fortes aplicações ao game design.

As contingências nos jogos são mais complexas, mas a analogia com os ratos é bem clara. Por exemplo, jogadores em um RPG ganham XP para subir níveis ou coletar itens bônus para ganhar vidas extras. Num jogo arcade, power-ups podem aparecer em intervalos aleatórios ou apenas quando certas condições forem encontradas. Como em toda contingência, existem ações por parte do participante que dão as recompensas sob circunstâncias específicas. Isso não é o mesmo que dizer que os jogadores são como ratos, mas que essas regras gerais se aplicam a ambos.

>
*Alguns termos comuns na psicologia comportamental que se encaixam nas considerações de Game Design:*
>
**Reforço**: um resultado ou consequência, geralmente usado pra se referir a recompensa. Exemplo: um ponto de XP, subir um nível, uma arma melhor.
>
**Contingência**: Uma ou várias regras que controlam quando os reforços são dados. Também chamado de “Esquema de Reforço”. Exemplo: um nível a cada 1.000 XP, um nível bônus que só está disponível se você matar um certo inimigo.
>
**Resposta**: Uma ação do jogador que pode completar a contingência. Pode ser matando um monstro, visitando uma área do jogo ou usando uma habilidade especial.


#### **Razões e Intervalos**

Existem essencialmente duas contingências fundamentais: razões e intervalos. O esquema de razão fixa disponibiliza recompensas quando um certo número de ações é completado. Por exemplo, um jogador pode receber uma vida depois de matar 20 oponentes. Isso pode ser chamado de esquema de “razão fixa”, porque o mesmo número de kills é requerido toda vez. Outros tipos de relações serão discutidas posteriormente.

Sendo uma das contingências mais comuns achada nos jogos, o esquema de razão fixa produz um padrão bem distinto no participante. Primeiro há uma longa pausa, seguida de uma explosão de atividade até a recompensa ser dada. Isso faz sentido quando você leva em consideração que a primeira ação imediata não traz a recompensa, então há um pequeno incentivo para haver aquele primeiro kill. Uma vez que o participante resolve alcançar aquela recompensa ele age o mais rápido possível para consegui-la.

A pausa mostrada no esquema de razão fixa pode ser um problema sério para os game designers. Caso exista um período de tempo onde há pouco incentivo para o jogador, ele pode ser levado a abandonar o game. Além disso, o tamanho da pausa é relativo ao tamanho da razão (aquele número de ações), então quanto mais ações forem necessárias, maior será a pausa. Isso significa que a razão cresce com o tempo, como o número de XP necessário para subir de nível em *Dungeons & Dragons.* Eventualmente, a pausa se torna infinita e o jogador decide que aquilo simplesmente não vale a pena e larga o jogo.

{% include image.html
            img="assets/images/uploads/tatubola.jpg"
            title="tatubola"
            caption="Como em toda contingência, ações do participante sob circunstâncias específicas dão recompensas."
            layout="inline"
            align="right"
%}

Pelo lado positivo, durante uma pausa e outra, atividades menos gratificantes geralmente vem à tona. Por exemplo, se os jogadores souberem que demorará muito para chegarem no próximo nível, poderão tentar uma nova tática ou testar outros aspectos do jogo.

Há também o esquema de razão variável, onde um número específico de ações é necessário, mas esse número sempre muda. Um jogador pode ter de matar aproximadamente 20 inimigos para ganhar um item extra, mas toda vez esse número é gerado aleatoriamente. É importante frisar que o jogador não sabe quantas ações são necessárias dessa vez, tendo apenas como base os números da última vez.

Sob o esquema de razão variável os participantes respondem com um fluxo estável de atividade numa taxa razoavelmente elevada. Mesmo que não tenha a alta taxa do esquema de razão fixa, esse esquema é mais consistente e não tem a pausa que pode causar desistências. Já que é possível (apesar de improvável) que o jogador ganhe uma vida derrubando apenas um inimigo, ele sempre terá um motivo pra continuar caçando.

Geralmente o esquema de razão variável produz as maiores taxas de atividades de todos os esquemas que discutirei aqui. Isso não significa necessariamente que ele é o melhor, mas se o que você procura é uma taxa alta e constante de horas de jogo, você quer uma contingência de razão variável.

Do outro lado da moeda temos o esquema de intervalos. Ao invés de dar uma recompensa após um certo número de ações, o esquema de intervalos o fará após uma certa quantidade de tempo. Num esquema de intervalo fixo a primeira resposta depois de um determinado período de tempo produz uma recompensa. Por exemplo, o jogo pode introduzir um power-up 30 minutos depois que o jogador pegou o último.

Jogadores normalmente respondem às contingências de intervalo fixo pausando um tempo após a recompensa e gradualmente respondendo cada vez mais rápido até outra recompensa ser dada. No nosso exemplo do power-up, o jogador se concentrará em outras partes do jogo e voltará pra lá depois para ver se aquele power-up apareceu. Caso não tenha aparecido, o jogador irá para outro lugar de novo. Gradualmente as checagens ao local do power-up se tornarão mais frequentes conforme o tempo se aproxime até o momento que o jogador sentará lá e esperará por ele.

{% include image.html
            img="assets/images/uploads/dragoa.jpg"
            title="cuidadocumdragoa"
            caption="Matar um oponente para ganhar experiência e subir de nível é um exemplo de contingência de razão."
            layout="inline"
            align="left"
%}

Como na razão fixa, há uma pausa que pode causar problemas ao game designer. Diferente da anterior, não há um corte abrupto para a alta taxa de atividade. Ao invés disso, há um crescimento gradual conforme o tempo certo se aproxima. Mas a pausa continua, período cuja motivação é baixa.

Existe também o esquema de intervalo variável, onde o período de tempo envolvido muda após cada recompensa. Contraparte do esquema de razão variável, esse também produz um nível estável e contínuo de atividade, porém num ritmo menor. Como no esquema de razão variável, há sempre um motivo para estar ativo. O exemplo do power-up mencionado anteriormente pode reaparecer imediatamente depois de ser coletado ou uma hora depois. A motivação é distribuída uniformemente conforme o tempo, então não existem pontos baixos onde a atenção dos jogadores pode acabar. A atividade é menor que no esquema de razão variável porque a aparição do power-up não depende da atividade. Se o jogador procurar 1,000 vezes durante o intervalo, isso não fará aparecer antes. Experimentos mostraram que nós somos boníssimos em determinar quais consequências são resultados de nossas ações e quais não são.

Esses são blocos de construção básica, de forma alguma é uma lista exaustiva. Cada contingência é uma combinação de tempo, atividade e recompensa, e existe um número infinito de formas em que esses elementos podem ser combinados para produzir o padrão de atividade que você quer de seus jogadores.

#### **Casos Especiais**

Existem alguns casos especiais no estudo das contingências que merecem uma menção especial. Primeiramente existem os “esquemas em cadeia”, situações onde existem níveis múltiplos de contingência. Por exemplo, os jogadores devem matar 10 orcs antes de entrarem na caverna do dragão, mas o dragão aparecer cada vez em um ponto aleatório. Esses esquemas são facilmente achados em puzzles multiníveis e quests de RPG, e as pessoas normalmente respondem a eles de uma forma muito específica. No exemplo que usei, a maioria dos jogadores tratariam a primeira parte como um esquema de razão fixa, sendo o acesso à caverna a recompensa para o esquema de intervalo variável subsequente.

Mas há a questão do que acontece quando você para de distribuir as recompensas, chamada de “extinção”. O jogador está feliz derrubando dragões sempre que eles aparecem, mas depois de alguns kills os bichos não mais aparecem. O que o jogador fará? A resposta é que o comportamento no fim de uma contingência é moldado pelo o que a contingência era. No esquema de razão o jogador continuará a jogar numa taxa alta por um longo período de tempo antes de gradualmente parar. Num esquema de intervalo fixo a atividade continuará a subir até a hora em que ele espera ser recompensado, até notar que não será e cessar a atividade.

Como regra geral, a extinção envolve muita frustração e raiva da parte do objeto. Esperamos que o universo faça sentido, tenha consistência, e quando as contingências mudam ficamos irritados. Curiosamente isso não é único em humanos. Num experimento, dois pombos foram colocados numa gaiola. Um foi preso embaixo da gaiola enquanto o outro estava livre para ir onde quisesse. A cada 30 segundos, um funil dava uma pequena quantidade de comida (esquema de intervalo fixo, como descrito anteriormente). O pombo livre poderia alcançar a comida, mas o preso não e o livre comia toda a comida com felicidade. Depois de uma hora de condicionamento o funil parou de dar a comida. O pombo continuou a checar o funil a cada 30 segundos por um tempo, mas quando ficou claro que a comida não viria, ele foi pra baixo da gaiola bater no pombo preso. O interessante é que o pombo preso nunca comeu a comida e o livre não tinha motivo algum pra pensar que o outro era responsável pela comida ter parado de vir. A frustração é irracional, mas real.

Um fenômeno relativo, chamado de “comportamento contrastante”, ocorre em chimpanzés, entre outras espécies. Um chimpanzé está fazendo uma tarefa simples, como puxar uma alavanca e é recompensado com uma uva, a qual eles realmente amam comer. Na próxima puxada, o macaco recebe um legume e fica realmente puto, jogando o vegetal no experimentalista. Eles poderiam ficar perfeitamente felizes com o legume antes, mas a apresentação das uvas criam expectativas e quando essas expectativas não se encontram, a frustração e raiva são resultados invariáveis.

A moral aqui é que reduzir o nível de reforço é uma coisa muito punitiva para os jogadores e pode funcionar como um ímpeto para eles saírem do jogo. Isso tem de ser feito com cuidado e gradualmente, ou pode se tornar uma reação indesejável. Isso se aplica até às reduções temporárias, como quando matar ocs para de produzir pontos, mas o jogador não descobriu ainda que ao invés disso ele pode matar trolls. Perdas de recompensa súbitas são muito aversivas e devem ser evitadas quando possível.

O caso especial final que vale a pena mencionar é chamado de “evitação”, contingências onde os participantes trabalham para evitar que coisas aconteçam. Um exemplo simples de laboratório envolve um rato em uma gaiola com uma pequena alavanca. De vez em quando um pequeno choque é dado pelo chão de metal da gaiola. No entanto, se o rato puxar a alavanca, o choque não acontecerá em 30 segundos. O rato rapidamente aprende a puxar a alavanca em um ritmo lento e contínuo, que previne o choque.

{% include image.html
            img="assets/images/uploads/carlosmassa.jpg"
            title="rati1"
            caption="Esse simples experimento ilustra o princípio da evitação. O nível de atividade é a função breve em que o participante espera que a recompensa ocorrerá. Quanto mais certos eles estiverem que algo bom ou interessante acontecerá logo, mais eles vão jogar."
            layout="inline"
            align="left"
%}

O melhor exemplo disso que conheço é em Ultima Online, onde os jogadores que tem castelos ou casas precisam visitará-las regularmente ou elas começarão a decair. Como o exemplo do laboratório acima, você tem participantes que estão trabalhando para evitar que coisas aconteçam e manter o status quo. Isso é uma estratégia relativamente barata do ponto de vista dos desenvolvedores de games, já que eles não precisam disponibilizar novos brinquedos e recompensas para os jogadores.

Contingências se tornaram a maior ferramenta da psicologia por mais de 50 anos, então há uma variedade abrangente de casos especiais e esquemas incomuns. Esses são só três exemplos de casos especiais que são particularmente aplicáveis para os desenvolvedores.

### **Receitas**

Para ajudar a colocar em prática as ideias que discuti, eis aqui algumas fórmulas simples sobre qual contingência usar para conquistar um resultado específico. Elas não são a única forma de resolver os problemas, mas são simples, confiáveis e extremamente efetivas.

#### **Como fazer os jogadores jogarem muito.**

Traduzindo para a linguagem que venho usando, como fazer os jogadores manterem uma alta e consistente taxa de atividade? Olhando para os quatro esquemas básicos a resposta é o esquema de razão variável, que é onde cada resposta tem uma chance de produzir recompensa. O nível de atividade é a função breve em que o participante espera que a recompensa ocorrerá. Quanto mais certos eles estiverem de que algo bom ou interessante acontecerá logo, mais eles vão jogar. Quando o jogador sabe que a recompensa vai demorar, como quando ele acaba de chegar num nível e sabe que precisará de milhares de pontos pra alcançar um novo, a motivação é baixa assim como a atividade do jogador.

#### **Como fazer os jogadores jogarem para sempre.**

Uma resposta curta é garantir que sempre, sempre haja um motivo para o jogador continuar jogando. Os esquemas variáveis que falei antes produzem uma probabilidade constante de recompensa, o que dá ao jogador um motivo para fazer o próximo objetivo. O que um desenvolvedor quer de seus jogadores é uma “dinâmica comportamental”, uma tendência a continuar fazendo o que estão fazendo mesmo nas partes que não há uma recompensa imediata. Um esquema que produz muita dinâmica é o esquema de evitação, onde os jogadores trabalham para prevenir que coisas ruins aconteçam. Até quando não está ocorrendo nada o jogador pode conseguir algo positivo para adiar uma consequência negativa.

{% include image.html
            img="assets/images/uploads/tuntstunts.jpg"
            title="TUNTSTUNTS"
            caption="O nível de atividade é a função breve em que o participante espera que a recompensa ocorrerá. Quanto mais certos eles estiverem que algo bom ou interessante acontecerá logo, mais eles vão jogar."
            layout="inline"
            align="left"
%}

#### **Como fazer os jogadores pararem.**

Em outras palavras, sob quais circunstâncias os jogadores param de jogar e como você pode evitar isso? Discuti duas principais condições onde os jogadores pararão de jogar. A primeira é pausar, onde a motivação para eles fazerem algo é baixa. Motivação é relativa: o desejo de jogar é sempre medido em relação a outras atividades. Enquanto possa haver uma alta motivação para jogar, durante a jogatina o jogador está sempre comparando sua vontade de jogar com sua vontade de fazer qualquer outra coisa que ele poderia estar fazendo. Se ele acabar de subir um nível e souber que ainda tem uma hora de jogatina antes que haja algo interessante, sua motivação será baixa em comparação a todas as outras atividades que ele poderia estar fazendo.

Uma forma de contornar esse problema é ter múltiplas atividades possíveis a qualquer hora. Isso significa que mesmo que matar monstros se torne chato, haverão outras atividades no jogo que possam ser interessantes. Se monstros não dão lucro, explorar pode ser melhor. O jogador pode gastar um tempo melhorando seu equipamento ou praticar uma nova tática. Note que o mesmo fenômeno que leva a evasão, a queda de motivação na atividade principal, eleva a motivação em atividades menores. Nesse caso as atividades menores também são partes do jogo, redirecionando a atenção e mantendo a alta taxa de atividade.

A outra situação que pode levar o jogador a parar de jogar é uma queda abrupta nos níveis de recompensa que citei no exemplo dos chimpanzés. Como a motivação, recompensas são relativas. O valor atual da recompensa é comparado ao valor das recompensas anteriores. Se a recompensa atual é 10 vezes o valor da última, isso causará um grande impacto no participante. Se a recompensa atual é mais fraca que a experiência o fez acreditar, o jogador sentirá frustração e raiva. A violação de expectativas é visto como um ato agressivo, uma decisão injusta dos desenvolvedores. Enquanto o jogo se torna mais difícil com o tempo, é melhor evitar mudanças bruscas nos níveis de recompensa. Isso é particularmente aplicável nos jogos puzzle, onde o jogador pode gastar horas no mesmo problema antes de ir para o próximo. Se o problema atual for muito mais difícil que os últimos puzzles, o jogador pode simplesmente largar o jogo.

### **Conclusão**

A aplicação das regras gerais para um caso específico é geralmente complicada, especialmente em situações onde há mais de uma contingência operando. A maioria dos experimentos em psicologia comportamental são desenvolvidos para iluminar um fenômeno em particular, como um raio x revelando os ossos de um braço. A pele, os músculos e outras coisas não são mostradas, então o quadro inteiro está incompleto. Mas mesmo só com os ossos, nós podemos ter uma noção de como o braço funciona, com suas limitações e flexibilidades. Os princípios behavioristas discutidos aqui devem ser entendidos como tendo benefícios e limitações semelhantes. Há várias outras coisas que influenciam os jogadores, mas os padrões básicos de consequências e recompensas formam um quadro que poderá servir para todo o resto. Entendendo os padrões fundamentais que subjazem como os jogadores respondem ao que pedimos deles podemos desenvolver jogos que trazem o tipo de jogador que queremos.

{% include image.html
            img="assets/images/uploads/comportamental.jpg"
            title="comportamental"
            alt-text="imagem de capa - fundo sóbrio de um mar calmo em preto e branco" 
            caption=""
            layout="inline"
            align="left"
%}