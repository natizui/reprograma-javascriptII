function getRandomHSLColor() {
  //variavel h armazena o valor de Hue (matriz), a roda de cores vai de 0 a 360, onde 0 é vermelho, 120 é verde e 240 é azul
  let h = Array(361).fill().map(function(v, i) { return i; })
  //variavel s armazena o valor de Saturação, onde 0% é um valor de escala de cinza e 100% é a cor cheia. Aqui s começa com 30% pq a barra de fundo (que repreesenta os 100%) já é cinza
  let s = []
  for (let i = 30; i <= 100; i++) { s.push(i) }
  //a variavel l represeenta Lightness (luminosidade), onde 0% é preto e 100% é branco. Aqui estamos pegando valores até 70% pra não ter nenhuma cor tão clara que fique ruim de ver por causa do fundo branco da página
  let l = Array(71).fill().map((v, i) => i )
  //agora pra definir a cor precisamos criar uma variável com o formato hsl(valor-aleatório-de-h, valor-aleatório-de-s% , valor-aleatório-de-l%)
  let color = "hsl(" + Math.floor(Math.random() * h.length) + ", " + Math.floor(Math.random() * s.length) + "%, " + Math.floor(Math.random() * l.length) + "%)"

  return color
}



const progresses = document.querySelectorAll(".progress")

for (const div of progresses) {
  const percentage = div.dataset.percentage

  let percentageText = document.createElement("h1")
  percentageText.textContent =  percentage + "%"
  div.appendChild(percentageText)
  
  
  let progressTotal = document.createElement("div")
  progressTotal.classList.add("total")
  div.appendChild(progressTotal)
  
  let progressDiv = document.createElement("div")
  progressDiv.classList.add("actualProgress")
  progressDiv.style.backgroundColor = getRandomHSLColor()

  setTimeout(() => {
    progressDiv.style.width = percentage + "%"
  }, 100)

  progressTotal.appendChild(progressDiv)

}






