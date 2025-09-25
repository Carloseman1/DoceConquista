const mensagem = "Oii, gostaria de saber mais sobre os seus produtos! ❤️"
const link = "https://wa.me/554791221007?text=" + encodeURIComponent(mensagem)
for (
  let i = 0;
  i < document.getElementsByClassName("link-whatsapp").length;
  i++
) {
  document.getElementsByClassName("link-whatsapp")[i].href = link
}

const clickNossaHistoria = () => {
  alert("Em breve!")
}

const clickCardario = () => {
  alert("Em breve!")
}

const clickWhatsApp = () => {
  const mensagem =
    "Oii, gostaria de saber mais sobre os seus produtos! ;) &#10084;"
  const msg =
    "Olá, gostaria de encomendar alfajores!! Sendo eles \n 8 de chocolate, 8 de ninho com nutella e 8 de paçoca. &#10084;"
  const link = "https://wa.me/554791221007?text=" + mensagem
  window.open(link, "_blank")
}
