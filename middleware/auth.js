import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
    try {        

        const authorisationHeader = req.headers['authorization'];        

        if (authorisationHeader) {
            const [bearer, token ] = authorisationHeader.split(' ');

            if (bearer === 'Bearer' && token) {
                const decoded = jwt.verify(token, process.env.TOKEN_KEY);
                req.user = decoded;
                return next();                
            }
        }                                
    } catch (err) {
        console.log(err);
        res.status(400).send('invalid token');        
    }
}