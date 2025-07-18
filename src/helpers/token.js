import jwt from 'jsonwebtoken';

export function getToken(payload) {
    return new Promise((res, rej)=> {
        jwt.sign(payload, "secret", {expiresIn: "2m"}, (error, token)=>{
            if (error) {
                rej(error)
            } else {
                res(token)
            }
        })
    })
}