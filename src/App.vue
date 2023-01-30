<template>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Thin.ttf");
  font-weight: 100;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-ThinItalic.ttf");
  font-style: italic;
  font-weight: 100;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Italic.ttf");
  font-style: italic;
  font-weight: 400;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Bold.ttf");
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-BoldItalic.ttf");
  font-style: italic;
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  src: url("assets/fonts/Montserrat-Black.ttf");
  font-weight: 700;
}

@font-face {
  src: url("@/assets/fonts/Unbounded.ttf");

  font-family: "Unbounded";
}

:root {
  --primary: #151c0d;
  --secondary: #0a0e06;
  --clear: #fefae0;
  --accent: #dda15e;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--secondary);
  color: var(--accent);
}

.background {
  height: 100vh;
  display: flex;
  flex-flow: row nowrap;
}

.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-end;
}

.header h1 {
  font-size: 5rem;
  font-family: "Unbounded";
  font-variation-settings: "wght" 100;
}

.header p {
  font-size: 1rem;
  font-style: italic;
  font-weight: 400;
  opacity: 0.5;
  margin-bottom: 1rem;
  color: var(--clear);
}

.subheader {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  position: absolute;
  top: 6rem;
  left: 0;
  height: 2rem;
  width: 23rem;
  z-index: 101;
}

.subheader a,
.subheader a:visited {
  color: var(--accent);
  text-decoration: none;
  font-weight: 400;
  font-size: 1.2rem;
  transition: 0.2s;
}

.subheader a:hover {
  color: var(--clear);
}
</style>
