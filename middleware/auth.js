import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        console.log(token);
        if (!token) return res.status(403).send('Access Denied');

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).send('invalid token');        
    }
}