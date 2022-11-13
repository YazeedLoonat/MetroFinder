const fs = require("fs")
const divergenceData = require("../outputs/divergenceData.json")
const costOfLivingData = require("../outputs/costOfLiving.json")

const results = []
const dataToStitch = [divergenceData, costOfLivingData]

for (const dataSet of dataToStitch) {
	for (const data of dataSet) {
		const { metroAreaName, ...rest } = data
		const foundIndex = results.findIndex(elem => elem.metroAreaName === metroAreaName)
		if (foundIndex !== -1) {
			results[foundIndex] = {
				...results[foundIndex],
				...rest
			}
		} else {
			results.push(data)
		}
	}
}

fs.writeFile("../outputs/stitched.json", JSON.stringify(results), err => {
	if (err) {
		console.error(err)
	}
})