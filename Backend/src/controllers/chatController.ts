import { Request, Response } from 'express';
import { chatRepository } from '../repository/chatRepository.ts';

export const chatController = {
  async listMessage(req: Request, res: Response) {
    const messages = await chatRepository.searchMessage();
    return res.status(200).json(messages);
  },

  async getMessage(req: Request, res: Response) {
    const {id} = req.params;

    if (!id) {
      return res.status(400).json({ erro: 'ID é obrigatório.' });
    }

    let response;
    
    try { 
      const message = await chatRepository.getMessageById(parseInt(id));
      let index;
    

    switch(parseInt(id)) {
      case 1: 
      index = Math.floor(Math.random() * message?.response.length);
      index = index == message.response.length ? index - 1 : index;
      response = message?.response[index]
        break;
      case 2: response = message?.response
        break;
      case 3: response = message?.response
        break;
      case 4: 
      index = Math.floor(Math.random() * message?.response.length);
      index = index == message.response.length ? index - 1 : index;
      response = message?.response[index]
        break;
      case 5: response = message?.response
        break;
        }
  } catch (error: any) {
    response = "Mensagem não considerada.";
    return res.status(400).json({response});
  }
    return res.status(200).json({response});
  }
};
