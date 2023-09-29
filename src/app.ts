import express, { Request, Response, NextFunction } from 'express';
import statusRoutes from './routes/statusRoutes';

const app = express();
const port = process.env.PORT || 3000;

app.use('/status', statusRoutes);

// Middleware de Logs
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Middleware de Tratamento de Erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
