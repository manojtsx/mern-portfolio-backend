const express = require("express");
const dotenv = require("dotenv");
const adminRouter = require("./routes/admin-route");
const authRouter = require("./routes/auth-route");
const utilRouter = require("./routes/util-route");
const blogRouter = require("./routes/blog-route");
const categoryRouter = require("./routes/category-route");
const commentRouter = require("./routes/comment-route");
const connectDB = require("./utils/db");
const path = require("path");
const cors = require("cors");
const app = express();
dotenv.config();

 
const PORT = process.env.PORT || 3000;
const corsOptions = {
  origin: ['http://localhost:5173',process.env.FRONTEND_API_URL],
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors(corsOptions));
app.use(express.json({limit : '50mb'}));
app.use(express.urlencoded({limit : '50mb', extended : true}));
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/util", utilRouter);
app.use("/api/content", blogRouter);
app.get("/", (_, res) => {
  res.status(200).status("Hello world");
});
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
