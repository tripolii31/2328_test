// IC1 – COSC 2328 – Professor McCurry
   // Implemented by: [Your Full Name]
   const express = require("express");
   const path = require("path");
   const app = express();
   const PORT = 3000;                                      // your computer reaches it at localhost:3000

   app.use(express.static(path.join(__dirname, "public"))); // share ONLY the public/ folder

   app.listen(PORT, "0.0.0.0", () =>                        // 0.0.0.0 lets the droplet reach it later (IC2)
     console.log(`Running on http://localhost:${PORT}`)
   );