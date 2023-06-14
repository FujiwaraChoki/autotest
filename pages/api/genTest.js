import openai from 'openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const generateQuestionsForTest = async (subject, difficulty) => {
    const prompt = `Generate questions for ${subject} on ${difficulty} level. Use --- to separate questions.`;
    const engine = "text-davinci-003";

    const openai_ = new openai(OPENAI_API_KEY);

    const gptResponse = await openai_.complete({
        engine,
        prompt,
        maxTokens: 500,
        temperature: 0.7,
    });

    const questions = gptResponse.data.choices[0].text.split("---");

    return questions;
};


const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { subject, difficulty } = req.body;

    const questions = await generateQuestionsForTest(subject, difficulty);

    return res.status(200).json({ questions });
}

export default handler;
