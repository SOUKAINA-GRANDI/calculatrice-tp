const app = require('./index');
const port = 3000;

app.listen(port, () => {
    console.log(`Serveur calculatrice lancé sur http://localhost:${port}`);
});

//// test test 