import prisma from "../lib/prisma";
export const chatRepository = {
  async searchMessage() {
    return prisma.chatOption.findMany();
  },

  async getMessageById(id: number) {
    const option = await prisma.chatOption.findUnique({
        where: { id }
        });
    
    if (!option){
      throw new Error("Mensagem não encontrada.");
    }
    return option;
  }
}
