import axios from "axios"


const authApiURL = "localhost:3001/api/auth/login";//process.env.REACT_APP_AUTH_API_URL;

export const authLogin = async (req) => {
  try {
    // backend Fe do...
    const { email, password } = req
    // login  post method
    const { data } = await axios.get(authApiURL)  // get all data dari DB
    console.log(req)
    // backend actually do...
    alert(data)
    localStorage.setItem(
      "token",
      JSON.stringify({
        ...res.data,
        email: email,
      })
    );
    
    if (user.length > 0) return { sucess: true, code: 200, status: "success", data, msg: "login sukses" }
    return { success: false, code: 404, status: "not found", data: null, msg: "User not found" }
  } catch (e) {
    return { success: false, code: 400, status: "error", data: null, msg: "Service Error" }
  }
}
