//server 세팅
import morgan from "morgan";
import express from "express";

const PORT = 4000;

const app = express();
//morgan("dev") = 식별자
const morganMiddleWare = morgan("dev");
app.use(morganMiddleWare);

//Global Router
const globalRouter = express.Router();
const handleHome = (req, res) => {
  // 요청 값을 전달하고 끝내라 res.end();
  return res.send("Home");
};

globalRouter.get("/", handleHome);

const userRouter = express.Router();
const handleEditUser = (req, res) => {
  return res.send("Edit User");
};
userRouter.get("/user", handleEditUser);

const videoRouter = express.Router();
const handleWatvhVideo = (req, res) => {
  return res.send("Watch Video");
};
videoRouter.get("/watch", handleWatvhVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

// 반드시 get보다 먼저 써야함 . middleWare 먼저 실행됨,
app.use(morganMiddleWare);

//get() 파이널웨어에 값 보낸 후 종결
app.get("/", handleHome);

const handleListening = () =>
  console.log(`Server Listening on Port 4000 : ${PORT}`);

//server는 리스너 역할 4000포트에 가서 handleListening 실행하겠다
app.listen(4000, handleListening);
