import Datastore from 'nedb';

const db = new Datastore({ filename: 'database', autoload: true });

const handler = async (req, res) => {
    const { email, password } = req.body;

    // Register
    const user = { email, password };

    // Insert the user into the database
    db.insert(user, (err, newUser) => {
        if (err) {
            console.error('Error inserting user into the database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        // Get all users from database for checking
        db.find({}, (err, users) => {
            if (err) {
                console.error('Error finding users in the database:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }
            console.log(users);
        });

        return res.status(200).json({ message: 'Registration successful', user: newUser });
    });
};

export default handler;
