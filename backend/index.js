const express = require('express')
const app = express()
const port = 3001
const placesRouter = require('./routes/places-routes');


app.use('/api/places', placesRouter);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500).json({ mess: error.message || "could not find" });
})


app.listen(port)