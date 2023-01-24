<template>
  <h1>Olá!</h1>
  <p>
    Meu nome é Magno Oliveira e sou Desenvolvedor Web
    <span
      data-text="Desenvolvedor responsável simultaneamente pela interface (Front-end) e pelas funcionalidades relacionadas com o servidor e bancos de dados (Back-end)"
      class="tooltip"
    >
      Fullstack
    </span>
  </p>
  <p>Sou formado em Ciência da Computação pela Unifesp.</p>
  <p>
    Possuo 2 anos de experiência com HTML e CSS, e no momento estou me
    especializando em Vue.js para o desenvolvimento de Front-end, mas também
    utilizo React.js.
  </p>
  <p>
    Utilizo principalmente Javascript e Node, além de também utilizar
    arquitetura serverless.
  </p>
  <p>
    Meu foco é trazer interfaces
    <span
      data-text="A interface é fácil de utilizar, independente do conhecimento técnico do usuário"
      class="tooltip"
    >
      intuitivas
    </span>
    e
    <span
      data-text="A interface fica perfeitamente visível, independente da resolução do seu computador ou smartphone"
      class="tooltip"
    >
      responsivas
    </span>
  </p>
  <h2>Fique à vontade</h2>
</template>

<style scoped>
.tooltip {
  position: relative; /* making the .tooltip span a container for the tooltip text */
  border-bottom: 1px dashed #000; /* little indicater to indicate it's hoverable */
}

.tooltip:before {
  content: attr(data-text); /* here's the magic */
  position: absolute;

  /* vertically center */
  top: 50%;
  transform: translateY(-50%);

  /* move to right */
  left: 100%;
  margin-left: 15px; /* and add a small left margin */

  /* basic styles */
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background: #000;
  color: #fff;
  text-align: center;

  display: none; /* hide by default */
}

.tooltip:hover:before {
  display: block;
}
</style>
