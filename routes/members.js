const express = require("express");
const router = express.Router();
const { newFileDB } = require("trdb");
const db = newFileDB("./db/members.json");

router.get("/", async (req, res, next) => {
	const membersCollection = db.collection("members");
	const members = await membersCollection.find({});
	res.status(200).send({ success: true, members });
});

router.put("/:id", async (req, res, next) => {
	const { id } = req.params;
	const body = req.body;

	if (!id) {
		return res.status(400).send({ error: "Must provide id" });
	}

	const membersCollection = db.collection("members");
	const member = await membersCollection.findOne({ id });
	if (!member) {
		return res.status(404).send({ error: "No member found" });
	}

	await membersCollection.update({ id }, body);
	res.status(200).send({ success: true });
});

module.exports = router;
