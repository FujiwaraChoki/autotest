import { OpenAIApi, Configuration } from 'openai';
import Datastore from 'nedb';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const generateQuestionsForTest = async (subject, objectives, difficulty) => {
    const configuration = new Configuration({
        apiKey: OPENAI_API_KEY,
    });

    const openai = new OpenAIApi(configuration);

    const prompt = `Generate questions for ${subject} on ${difficulty} level. Use --- to separate questions. I have to fulfill these learning objectives: ${objectives}`;

    const completion = openai.createCompletion(
        {
            model: "gpt-3.5",
            prompt: prompt,
        },
    );

    console.log(completion)

    const questions = completion.data.choices[0].text.split("---");

    console.log(completion.data.choices[0].text);

    return questions;
};

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const db = new Datastore({ filename: 'database', autoload: true }); // Specify the path to the database file

    const { title, subject, objectives, difficulty, email } = req.body;

    // Comment out because no OpenAI API key
    const questions = await generateQuestionsForTest(subject, objectives, difficulty);

    const userEmail = email;

    // Update user in database
    db.update({ email: userEmail }, { $push: { tests: { title, subject, objectives, difficulty, questions } } }, {}, (err, numReplaced) => {
        if (err) {
            console.error('Error updating user in the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        return res.status(200).json({ message: 'Test creation successful' });
    });
}

export default handler;
