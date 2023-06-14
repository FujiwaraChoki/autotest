import Datastore from 'nedb';

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const db = new Datastore({ filename: 'database', autoload: true });

    const { email } = req.body;

    // Find tests with the given email (tests are seperate datasets)
    db.find({ email }, (err, tests) => {
        if (err) {
            console.error('Error finding tests in the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        console.log(tests);
        return res.status(200).json({ message: 'Tests found successfully', tests });
    });
}

export default handler;
