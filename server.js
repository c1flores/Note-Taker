// Direct server to use routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Create server
const app = express();

// Set PORT
const PORT = process.env.PORT || 3001;

// Middleware to complete request - response cycle
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`API server is ready on port ${PORT}!`);
});