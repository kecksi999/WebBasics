import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3001;

// Middleware
app.use(cookieParser());
app.use(express.json());

// Root endpoint - Check cookie and manage session ID
app.get('/', (req: Request, res: Response) => {
  const existingId = req.cookies.id;

  if (existingId) {
    // Cookie exists, send it back
    res.json({
      message: 'Session ID found',
      id: existingId
    });
  } else {
    // Generate new session ID
    const newSessionId = uuidv4();
    
    // Set cookie (expires in 24 hours)
    res.cookie('id', newSessionId, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      sameSite: 'strict'
    });

    res.json({
      message: 'New session ID generated',
      id: newSessionId
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
