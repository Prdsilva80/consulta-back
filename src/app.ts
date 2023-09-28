import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Simulando uma fonte de dados de status de envio (substitua com dados reais)
const statusData: Record<string, string> = {
    '123': 'Em trânsito',
    '456': 'Entregue',
    '789': 'Aguardando retirada',
};

app.get('/status/:orderNumber', (req: Request, res: Response) => {
    const orderNumber = req.params.orderNumber;

    // Consultar a fonte de dados para obter o status do pedido (substitua com sua lógica real)
    const status = statusData[orderNumber];

    if (status) {
        res.json({ orderNumber, status });
    } else {
        res.status(404).json({ error: 'Número do pedido não encontrado' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
