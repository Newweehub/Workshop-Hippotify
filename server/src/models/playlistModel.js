import db from "../config/database.js"

export const getOwnedPlaylist = async(userId) => {  //export ให้ใช้ได้
    const [response] = await db.promise().query(  //ข้างหน้าเป็น query ข้างหลังเป็นตัวแปรที่เอาไปใช้กับ query
        `select id, title
        from playlists
        where user_id = ?`, [userId] 
    );
    console.log("model:", response);
    return response;
}