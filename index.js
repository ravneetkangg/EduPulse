const express = require('express');
const app = express();
const subject = require('./routes/subjectRoutes')
app.use('/subject', subject)

app.listen('8080', () => {
    console.log("Server has Started for Edupulse");
})