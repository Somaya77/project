import { fetchAdvice } from '../services/advice.service.js';

export const getAdvice = async (req, res) => {
  try {
    const advice = await fetchAdvice();
    res.json({ advice });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching advice' });
  }
};
