import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
    fileName: "api",
    title: "devops-notepad-api",
    url: "http://localhost:5000",
    port: 3000,
    storageLocation: path.join(__dirname, "../../../../documentation"),
};
