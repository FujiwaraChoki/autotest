import Datastore from 'nedb';

const db = new Datastore({ filename: 'database', autoload: true });

const handler = (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;

    db.findOne({ email }, (err, user) => {
        if (err) {
            console.error('Error finding user in the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (user && user.password === password) {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    });
};

export default handler;
