async function hypixel(req, res) {
    const hypixelAPIKey = process.env.HYPIXEL_API_KEY;

    const name = req.query.name;

    try {
        var data = await (await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)).json();

        var uuid = data?.id;

        var params = {
            "key": hypixelAPIKey,
            "uuid": uuid,
        };
        params = `key=${params.key}&uuid=${params.uuid}&player=${params.uuid}`;

        var player = await (await fetch(`https://api.hypixel.net/player?${params}`)).json();
        var status = await (await fetch(`https://api.hypixel.net/status?${params}`)).json();
        var guild = await (await fetch(`https://api.hypixel.net/guild?${params}`)).json();

        var data = {
            "name": data?.name,
            "id": uuid,
            "rank": player.player?.newPackageRank,
            "status": status.session?.online,
            "guild": guild?.guild?.name,
        };

        res.status(200).json({ data })
    } catch (_) {
        res.status(404).json({ message: "Data not found" })
    }
}

export default hypixel;