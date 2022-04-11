"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.app.listen(process.env.PORT || 5000, () => {
    console.log(`Server on port ${process.env.PORT} \nhttp://localhost:${process.env.PORT}`);
});
