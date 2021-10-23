import sharp from "sharp";

async function lol_builds(req, res) {
    await sharp("./public/lol_builds/mask.png").toFile("./public/test.png")
    res.status(200).json({ body: req })
}

export default lol_builds;