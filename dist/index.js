"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const stockRoutes = require('./routes/stockDataRoutes');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
// app.use(express.static(path.join(__dirname + "public")))
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET'],
    allowedHeaders: ['Content-Type']
}));
app.use('/', stockRoutes);
exports.server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
