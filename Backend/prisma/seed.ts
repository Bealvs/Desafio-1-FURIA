import prisma from "../src/lib/prisma";

async function main() {
  
  await prisma.chatOption.createMany({
    data: [
      {
        option: '1',
        question: 'Curiosidades sobre a FURIA e CS',
        response: [
          "Você sabia que a FURIA foi o primeiro time BR a chegar no Top 3 mundial da HLTV? 🇧🇷🔥",
          "KSCERATO e yuurih são considerados uma das melhores duplas do CS:GO! 🎯",
          "O símbolo da FURIA é um lobo furioso que representa garra e paixão! 🐺",
          "A FURIA estreou seu time de CS:GO em 2017 e já conquistou o mundo! 🌎🏆",
          "FURIA também tem uma linha de roupas própria, focada em lifestyle! 👕🔥"
        ]
      },
      {
        option: '2',
        question: 'Próximos jogos',
        response: ["🏆 Próximo jogo: The Mongolz vs Furia | no dia: 10/05/2025"]
      },
      {
        option: '3',
        question: 'Jogadores do time',
        response: [
          "👥 Jogadores ativos: KSCERATO, yuurih, FalleN, molodoy, YEKINDAR e Sidde."
        ]
      },
      {
        option: '4',
        question: 'Mensagem da torcida',
        response: [
          "🔥 VAMOOOO FURIAAAA! Nunca será só um jogo!",
          "🐺 'O lobo vai uivar, a FÚRIA vai ganhar!'",
          "🔥 'FURIA, FURIA, até o fim!'"
        ]
      },
      {
        option: '5',
        question: 'Títulos da FURIA',
        response: [
          "🏆 ESL Pro League S12 NA - 1º Lugar",
          "🏆 DreamHack Summer 2020 NA - 1º Lugar",
          "🏆 BLAST Premier American Finals - 1º Lugar",
          "🏆 Elisa Masters Espoo 2023 - 1º Lugar, prêmio de $100.000"
        ]
      }
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
