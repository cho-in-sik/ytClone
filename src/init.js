import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";


const PORT = 3000;



const handleListening= () => console.log(`✅ Server listening on port https://yt-clone-gnylx.run.goorm.io/`);

app.listen(PORT, handleListening);