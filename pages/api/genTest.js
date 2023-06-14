import { OpenAIApi, Configuration } from 'openai';
import Datastore from 'nedb';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const generateQuestionsForTest = async (subject, difficulty) => {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const prompt = `Generate questions for ${subject} on ${difficulty} level. Use --- to separate questions.`;

    const completion = await openai.createCompletion(
        {
            model: "text-davinci-003",
            prompt: prompt,
        },
    );

    const questions = completion.data.choices[0].text.split("---");

    return questions;
};

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const db = new Datastore({ filename: 'database', autoload: true }); // Specify the path to the database file

    const { title, subject, description, difficulty } = req.body;

    const questions = await generateQuestionsForTest(subject, difficulty);

    // Store the questions in the database
    db.insert({ title, subject, description, difficulty, questions }, (err, newDoc) => {
        if (err) {
            console.error('Error inserting data into the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        return res.status(200).json({ questions });
    });
}

export default handler;
