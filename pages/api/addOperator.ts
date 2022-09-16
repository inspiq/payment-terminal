const fs = require('fs'); 
import type { NextApiRequest, NextApiResponse } from 'next';
import operators from './data/J_n5Fz-ImaCg1gCf33PMO/index.json';

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
  fs.writeFileSync('./data/J_n5Fz-ImaCg1gCf33PMO/index.json', JSON.stringify(operators, null, 2)); 
}

