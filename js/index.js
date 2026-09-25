/* Carrossel de depoimentos */
(function () {
  var quotes = [
    {
      text: "A Tradição transformou nosso sonho em realidade. Acabamento impecável e entrega no prazo. Morar aqui superou tudo.",
      name: "Marina S.",
      role: "Moradora · Bloco A"
    },
    {
      text: "Do atendimento à entrega das chaves, tudo transparente. O apartamento é ainda melhor que o decorado.",
      name: "Carlos H.",
      role: "Morador · Bloco B"
    }
  ];
  var i = 0;
  var tText = document.getElementById("tText");
  var tName = document.getElementById("tName");

  function show(n) {
    i = (n + quotes.length) % quotes.length;
    tText.textContent = quotes[i].text;
    tName.textContent = quotes[i].name;
    tName.nextElementSibling.textContent = quotes[i].role;
  }

  document.getElementById("tPrev").addEventListener("click", function () { show(i - 1); });
  document.getElementById("tNext").addEventListener("click", function () { show(i + 1); });
})();
