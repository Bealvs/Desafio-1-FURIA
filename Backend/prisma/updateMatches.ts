import prisma from '../src/lib/prisma';
import cron from 'node-cron';
import axios from 'axios';



export async function fetchFuriaGames() {
  try {
    const { data } = await axios.get('https://api.pandascore.co/csgo/matches/upcoming', {
      headers: {
        Authorization: `Bearer ${process.env.PANDA_API_KEY}`,
      },
      params: {
        per_page: 50, 
      },
    });

   
    const furiaMatches = data.filter((match: any) =>
      match.opponents.some((opponent: any) => opponent.opponent.name.toLowerCase().includes('furia'))
    );

    if (furiaMatches.length === 0) {
      await prisma.chatOption.update({
        where: { option: '2' },
        data: {
          response: ['📅 Não há jogos agendados no momento.'],
        },
      });
      console.log('Nenhum jogo encontrado.');
    } else {
      const formattedMatches = furiaMatches.map((match: any) => {
        const teamNames = match.opponents.map((o: any) => o.opponent.name).join(' vs ');
        const date = new Date(match.begin_at).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
        return `${teamNames} em ${date}`;
      }).join('\n');

      await prisma.chatOption.update({
        where: { option: '2' },
        data: {
          response: [`📅 Próximos jogos:\n${formattedMatches}`],
        },
      });
      console.log('Jogos da FURIA atualizados no banco!');
    }
  } catch (error) {
    console.error('Erro ao buscar partidas:', error.response?.data || error.message);
  }
}


if (import.meta.url === `file://${process.argv[1]}`) {
  fetchFuriaGames().finally(() => {
    prisma.$disconnect();
  });
} else {
  
  cron.schedule('0 8 * * *', () => {
    console.log('Atualizando jogos da FURIA...');
    fetchFuriaGames();
  });
}
