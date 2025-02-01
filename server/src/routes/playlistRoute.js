import express from "express"
import * as playlistControllers from '../controllers/playlistControllers.js'

const playlistRoute = express.Router();

playlistRoute.get("/owned", playlistControllers.getOwnedPlaylist);
playlistRoute.get("/", playlistControllers.getUserPlaylist);
playlistRoute.get("/:playlistId", playlistControllers.getPlaylistById);

export default playlistRoute;