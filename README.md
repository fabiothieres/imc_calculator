# Calculadora de IMC Dinâmica

🔗 **[Testar a calculadora online](https://fabiothieres.github.io/imc_calculator/)**

A ideia desse projeto foi sair um pouco do console do navegador e colocar a mão na massa com **manipulação de DOM** e **lógica condicional** usando JavaScript puro. 

Foi um exercício prático construído a partir das aulas de operadores relacionais do Curso em Vídeo (Prof. Gustavo Guanabara), mas decidi ir além do escopo da aula e criar uma interface visual completa para ele.

## O que tem por baixo do capô?

O foco aqui não foi só fazer a matemática básica do IMC funcionar, mas sim pensar na experiência do usuário e na prevenção de bugs:

* **Feedback Visual Dinâmico:** A interface reage ao resultado. Usando JS, a caixa de resposta muda de cor e exibe alertas específicos dependendo da gravidade do IMC (verde para normal, tons de vermelho para obesidade).
* **Tratamento de Input:** No Brasil, é comum o usuário digitar a altura com vírgula (ex: 1,80). Adicionei um `.replace(",", ".")` no código para capturar isso e evitar que o cálculo retorne `NaN`.
* **Estrutura de Controle Limpa:** O código usa uma cascata de `if` e `else if` que lê de cima para baixo de forma otimizada, sem precisar de verificações redundantes.

## Stack
* HTML5
* CSS3 (Responsivo com Media Queries)
* JavaScript (Vanilla)

---
Criado por [Fábio Thieres](https://github.com/fabiothieres)
