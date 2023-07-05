import Datastore from 'nedb';

const db = new Datastore({ filename: '../../public/database', autoload: true });

const handler = async (req, res) => {
    // Delete all users
    db.remove({}, { multi: true }, (err, numRemoved) => {
        if (err) {
            console.error('Error deleting users from the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        return res.status(200).json({ message: `Deleted ${numRemoved} users` });
    });
};

export default handler;
