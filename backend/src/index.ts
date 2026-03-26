import express from 'express';

// Create an instance of the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'UP' });
});

// Value Stream API routes
app.get('/api/v1/streams', (req, res) => {
    // TODO: Implement logic to get value streams
    res.json({ message: 'Value streams retrieved successfully.' });
});

app.post('/api/v1/streams', (req, res) => {
    // TODO: Implement logic to create a new value stream
    res.json({ message: 'Value stream created successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;