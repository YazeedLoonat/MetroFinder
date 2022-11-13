const stitchedData = require("./outputs/stitched.json")

const keysToFind = [
	"metroAreaName",
	"divergence",
	"costOfLiving",
]

for (const elem of stitchedData) {
	let allValuesFound = true
	keysToFind.forEach(key => {
		if (!elem[key]) {
			allValuesFound = false
		}
	})

	if (!allValuesFound) {
		console.error("key missing from: ", elem.metroAreaName)
	}
}