import dotenv from 'dotenv';
dotenv.config();

interface Config{
    port:number | string
}


export const config:Config={
    port:process.env.PORT || 3001,
}