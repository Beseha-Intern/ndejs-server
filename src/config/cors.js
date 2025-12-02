import cors from "cors";

const corsConfig = cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "X-API-Key", "Authorization"]
});

export default corsConfig;