import app from "./app";

// import server server type definition
import { Server } from "http";

// initialize port 
const PORT: string  | 3000 = process.env.PORT || 3000;

// intialize server
const server: Server = app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});

// export server for testing
export default server;
