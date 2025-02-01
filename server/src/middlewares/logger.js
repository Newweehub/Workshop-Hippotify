export const logger = (req, res, next) => {  //ไว้ดูสถานะการ request
    console.log(`${req.method} ${req.path}`);
    next();
    
}