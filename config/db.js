const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect('mongodb+srv://ravneetkang2003:Qub96c6xBOb9nkak@cluster0.tdraycq.mongodb.net/ChopX')
        .then(() => console.log('db connected'))
        .catch((error) => {
            console.log('Error while Connecting to DB')
            process.exit();
        });
}

module.exports = dbConnect