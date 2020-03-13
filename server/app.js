const app = require('./index');
const PORT = 3001;

app.listen(PORT, () =>console.log('You are listening to port: ', { PORT }));
