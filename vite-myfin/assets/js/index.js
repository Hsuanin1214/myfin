// export function helperFunction() {
//     console.log('這是 helper 函數');
// }
console.log("hi");
import axios from "axios";
  //取得測試
axios
  .get("http://localhost:3000/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("There was an error!", error);
  });
  //新增測試
// axios
//   .post("http://localhost:3000/users", {
//     email: "test2@gmail.com",
//     userName: "hiTest2",
//     realName: "test2",
//     password: "01234",
//     birthday: "19951112",
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error("There was an error!", error);
//   });
