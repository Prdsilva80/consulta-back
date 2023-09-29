// statusController.ts
import { Request, Response } from 'express';

const statusData: Record<string, string> = {
    '123': 'Em trânsito',
    '456': 'Entregue',
    '789': 'Aguardando retirada',
};

export const getStatus = (req: Request, res: Response) => {
    const orderNumber = req.params.orderNumber;
    const status = statusData[orderNumber];

    if (status) {
        res.json({ orderNumber, status });
    } else {
        res.status(404).json({ error: 'Número do pedido não encontrado' });
    }
};
