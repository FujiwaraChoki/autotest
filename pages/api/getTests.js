import Datastore from 'nedb';

const handler = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const db = new Datastore({ filename: 'database', autoload: true });

    db.find({}, (err, docs) => {
        if (err) {
            console.error('Error finding tests in the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        return res.status(200).json({ tests: docs });
    });
}

export default handler;
