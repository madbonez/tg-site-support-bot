import * as express from 'express';
import * as bodyParser from 'body-parser';
import { getConfig } from '../src/config/getConfig';
import { initSession } from '../src/newSessionInitializer';

getConfig();

const app = express()
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.post('/', async (req, res) => {
    const messageId = await initSession(req.body.text);
    res.send({
        messageId,
    });
})

app.listen(port, () => {
    console.log(`Dev session stater FN started on port ${port}`)
})
