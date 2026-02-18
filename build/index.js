"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
app.get('/', (_req, res) => {
    return res.send('Express Typescript on Vercel');
});
app.get('/ping', (_req, res) => {
    return res.send('pong 🏓');
});
// Only start listening when not running on Vercel (serverless)
if (process.env.VERCEL !== '1') {
    app.listen(port, () => {
        return console.log(`Server is listening on ${port}`);
    });
}
exports.default = app;
//# sourceMappingURL=index.js.map