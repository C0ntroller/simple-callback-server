import express from "express";
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
const port = Number.parseInt(process.env.PORT) || 8080;

// Express route that prints request body and query parameters
app.all("*", (req, res) => {
    console.log("------------------------------");
    console.log(`New HTTP ${req.method} Request to ${req.path}`);
    console.log(`Headers:\n${JSON.stringify(req.headers, null, 2)}`);
    if (req.query && Object.keys(req.query).length > 0) console.log(`Query Parameters:\n${JSON.stringify(req.query, null, 2)}`);
    if (req.body && Object.keys(req.body).length > 0) {
        try {
            console.log(`Body Parameters:\n${JSON.stringify(req.body, null, 2)}`);
        } catch {
            console.log(`Body Parameters:\n${req.body}`);
        }
    }

    res.status(204).end();
});

app.listen(port, () => console.log(`Callback server listening on port ${port}!`));