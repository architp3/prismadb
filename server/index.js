const PrismaClient = require('@prisma/client');
const prisma = new PrismaClient.PrismaClient();


const express = require('express');
const cors = require('cors');
const app = express();
 
 
app.use(express.json());
app.use(cors());
 

 

 
app.listen(3000, async() => {
    const test = await prisma.mysqltest.findMany();
   console.log("Running server on localhost:3001");
   console.log(test);
});

