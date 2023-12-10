import jwt from 'jsonwebtoken';
const isLoggedin =(request,response,next)=>{
    const {token} = request.cookies;
    const tokenDetails = jwt.verify(token,process.env.JWT_PASSWORD);
    if(!token || !tokenDetails){
        response.status(401).send("Login is required");
    }
    request.user=token;
    next();
}
export default isLoggedin;