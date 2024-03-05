const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const message = `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .container {
                        text-align: center;
                    }
                    .emoji {
                        font-size: 48px;
                    }
                    .message {
                        font-size: 18px;
                        margin-top: 20px;
                    }
                    .hashtag {
                        color: blue;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="emoji">👋</div>
                    <div class="message">
                        Hey! Aditya Lad here. I am currently studying at Vishwakarma Institute of Technology, Pune, in the Computer Engineering department. I'm passionate about tech! Currently diving into DevOps. Let's connect and learn together!
                    </div>
                    <div class="hashtags">
                        <span class="hashtag">#NewToTwitter</span>
                        <span class="hashtag">#DevOps</span>
                        <span class="hashtag">#TechLearning</span>
                    </div>
                </div>
            </body>
        </html>
    `;
    res.send(message);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});