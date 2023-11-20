import express from 'express';
import MainRouter from './rotas/MainRoutes';
import UserRouter from './rotas/RotasUsuarios';

const app = express();
app.use(express.json());

app.use(MainRouter);
app.use(UserRouter);

app.listen(3000, function(){
    console.log("Server running on port 3000");
})