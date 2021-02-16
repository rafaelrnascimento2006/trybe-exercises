const skills = ["Bash", "Git", "HTML", "CSS", "JavaScript"];

const function1 = name => `Tryber ${name} aqui!`;

const function2 = name => `${function1(name)}
Minhas cinco principais habilidades são:
${skills.sort()}`

console.log(function2('Rafa'))
