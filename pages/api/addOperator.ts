const fs = require('fs'); 
import type { NextApiRequest, NextApiResponse } from 'next';
let operators = require('./data/operators.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let operator = {
      id: Math.random(),
      title: req.body.title
    }
    
    operators.push(operator);
    updateData();
    
    res.status(200).json({ message: "Оператор добавлен на главный экран." });
}

const updateData = () => {
  fs.writeFileSync('./pages/api/data/operators.json', JSON.stringify(operators, null, 2)); 
}

