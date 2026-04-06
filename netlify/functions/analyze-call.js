[17:39, 06/04/2026] Meu Cel: <!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estrutura P5</title>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background: radial-gradient(circle at top, #001a00, #000);
  color: #fff;
}

section {
  padding: 80px 20px;
  max-width: 1000px;
  margin: auto;
}

h1, h2, h3 {
  color: #00ff88;
}

h1 {
  font-size: 42px;
  text-align: center;
}

.subtitle {
  text-align: center;
  font-size: 16px;
  color: #aaa;
  margin-top: -10px;
}

button {
  background: linear-gradient(90deg, #00ff88, #00cc66);
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  transition: 0.3s;
}

button:hove…
[17:44, 06/04/2026] Meu Cel: <!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Estrutura P5</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: radial-gradient(circle at top, #001a00, #000);
  color: #fff;
  overflow-x: hidden;
}

section {
  padding: 80px 20px;
  max-width: 1100px;
  margin: auto;
}

h1, h2, h3 {
  color: #00ff88;
  text-shadow: 0 0 10px rgba(0,255,136,0.6);
}

h1 {
  font-size: 48px;
  text-align: center;
}

.subtitle {
  text-align: center;
  font-size: 18px;
  color: #aaa;
}

button {
  background: linear-gradient(90deg, #00ff88, #00cc66);
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  color: #000;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #00ff88;
}

.card {
  background: rgba(0,255,136,0.05);
  border: 1px solid rgba(0,255,136,0.2);
  padding: 20px;
  margin: 15px 0;
  border-radius: 12px;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0 20px rgba(0,255,136,0.4);
}

.grid {
  display: grid;
  gap: 20px;
}

@media(min-width: 768px){
  .grid-2 {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
</head>

<body>

<section>
  <h1>Estrutura P5</h1>
  <div class="subtitle">"Estruturando seu negócio"</div>

  <p style="text-align:center; margin-top:30px;">
    Você não precisa de mais clientes.<br>
    Você precisa de estrutura para crescer.
  </p>

  <div style="text-align:center;">
    <button onclick="scrollToSection('servico')">Entender como funciona</button>
  </div>
</section>

<section id="servico">
<h2>🔧 Execução do Serviço (Funcionário)</h2>

<div class="card">
<h3>Modelo de Vaga</h3>
<p>Captação de candidatos alinhados com responsabilidade, comunicação e crescimento.</p>
</div>

<div class="card">
<h3>Triagem</h3>
<p>Perguntas estratégicas para filtrar comportamento e mentalidade.</p>
</div>

<div class="card">
<h3>Entrevista</h3>
<p>Avaliação de clareza, responsabilidade e reação sob pressão.</p>
</div>

<div class="card">
<h3>Avaliação</h3>
<p>Comunicação + Responsabilidade + Vontade (mínimo 20 pontos).</p>
</div>

<div class="card">
<h3>Treinamento</h3>
<p>5 dias de imersão completa: cultura, produto, cliente e operação.</p>
</div>

<div class="card">
<p><strong>“Você representa a empresa, não só executa tarefas.”</strong></p>
</div>
</section>

<section>
<h2>🚀 Máquina de Crescimento (P5)</h2>

<div class="grid grid-2">

<div class="card">
<h3>1. Estruturação</h3>
<p>Organizar base da empresa e preparar pessoas para sustentar crescimento.</p>
</div>

<div class="card">
<h3>2. Aquisição</h3>
<p>Gerar demanda qualificada com posicionamento estratégico.</p>
</div>

<div class="card">
<h3>3. Qualificação</h3>
<p>Filtrar empresas com dor real e intenção de crescimento.</p>
</div>

<div class="card">
<h3>4. Conversão</h3>
<p>Transformar conversa em resultado com proposta baseada em performance.</p>
</div>

<div class="card">
<h3>5. Retenção</h3>
<p>Acompanhamento contínuo para evolução e melhoria constante.</p>
</div>

</div>
</section>

<section>
<h2>🎯 Posicionamento</h2>

<div class="card">
❌ Não é marketing<br>
❌ Não é recrutamento<br>
❌ Não é consultoria
</div>

<div class="card">
✔ É estrutura de crescimento real
</div>
</section>

<section>
<h2>📢 Aquisição (Criativos)</h2>

<div class="card">"Você quer crescer, mas tudo ainda depende de você?"</div>
<div class="card">"Já contratou e deu errado?"</div>
<div class="card">"O problema não é cliente. É falta de estrutura."</div>
<div class="card">"Eu estruturo empresas para crescer com pessoas."</div>

</section>

<section>
<h2>❤️ Qualificação</h2>

<div class="card">Hoje, o que mais trava o crescimento da sua empresa?</div>
<div class="card">Você já tentou contratar antes? Como foi?</div>
<div class="card">Hoje você quer crescer ou só manter?</div>

</section>

<section>
<h2>💰 Conversão</h2>

<div class="card">
O problema não é cliente.<br>
É que sua empresa não está estruturada para crescer com pessoas.
</div>

<div class="card">
- Encontrar a pessoa certa<br>
- Treinar essa pessoa<br>
- Estruturar operação<br>
- Escalar com clientes<br><br>

Você só paga quando isso acontece de verdade.
</div>
</section>

<section>
<h2>🔁 Retenção</h2>

<div class="card">
Como está o desempenho?<br>
Algo que podemos melhorar?
</div>

</section>

<section>
<h2>👥 Operação</h2>

<div class="grid grid-2">

<div class="card">
<h3>Você</h3>
<p>Estratégia, fechamento, treinamento e crescimento.</p>
</div>

<div class="card">
<h3>Sua Esposa</h3>
<p>Contato inicial, qualificação, organização e follow-up.</p>
</div>

</div>
</section>

<section>
<h2>📊 Sistema</h2>

<div class="card">1 cliente → validação</div>
<div class="card">2–3 clientes → ajuste</div>
<div class="card">4+ clientes → previsibilidade</div>
</section>

<section>
<h2>🔥 Frases-chave</h2>

<div class="card">Você não precisa de mais cliente. Precisa de estrutura.</div>
<div class="card">Eu não vendo marketing. Eu estruturo crescimento.</div>
<div class="card">Sem estrutura, crescer quebra sua empresa.</div>

</section>

<section>
<h2>🚀 Resultado</h2>

<div class="card">
Estrutura + Pessoas + Crescimento + Clientes
</div>

<div style="text-align:center;">
<button>Conversar sobre meu negócio</button>
</div>

</section>

<script>
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
</script>

</body>
</html>
