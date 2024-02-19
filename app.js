const express = require('express');
const app = express ();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
 });



app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT
    );
  });

  
