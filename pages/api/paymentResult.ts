import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const random = Math.random() > 0.5
  random ? res.status(200).json({message: "Оператор успешно оплачен!", isBool: true}) : res.status(200).json({message: "Ошибка оплаты оператора.", isBool: false})
}