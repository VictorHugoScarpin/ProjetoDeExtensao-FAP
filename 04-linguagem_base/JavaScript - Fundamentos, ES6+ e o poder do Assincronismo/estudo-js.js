// 1. Declaração do Array de Objetos (Ativos)
const ativos = [
  { nome: "Servidor AWS", tipo: "Infraestrutura", valor: 15000 },
  { nome: "Licença Angular", tipo: "Software", valor: 1200 },
  { nome: "Notebook Dell", tipo: "Hardware", valor: 7500 },
  { nome: "Monitor Ultrawide", tipo: "Hardware", valor: 2500 }
];

// 2. Filter: Criando uma lista apenas com ativos acima de R$ 5.000
const ativosAltoValor = ativos.filter(ativo => ativo.valor > 5000);
console.log("--- Ativos de Alto Valor ---");
console.log(ativosAltoValor);

// 3. Map: Gerando uma lista apenas com os nomes dos ativos em UPPERCASE
const nomesEmCaixaAlta = ativos.map(ativo => ativo.nome.toUpperCase());
console.log("\n--- Nomes dos Ativos (Uppercase) ---");
console.log(nomesEmCaixaAlta);

// 4. Async/Await: Simulando a busca de um ativo pelo nome
const buscarAtivoPorNome = async (nomeBuscado) => {
  console.log(`\nBuscando o ativo: "${nomeBuscado}" no sistema...`);

  // Simulando o tempo de resposta de uma requisição a um banco de dados (1.5 segundos)
  await new Promise(resolve => setTimeout(resolve, 1500));

  // O método find retorna o primeiro elemento que satisfaz a condição
  const ativoEncontrado = ativos.find(ativo => 
    ativo.nome.toLowerCase() === nomeBuscado.toLowerCase()
  );

  if (ativoEncontrado) {
    console.log("✅ Ativo encontrado com sucesso:");
    console.log(ativoEncontrado);
  } else {
    console.log("❌ Erro: Ativo não localizado.");
  }
};

// Executando a função assíncrona
buscarAtivoPorNome("Licença Angular");