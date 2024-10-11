class FreeDictionaryApi {
	constructor() {
		this.api = "https://api.dictionaryapi.dev/api/v2"
		this.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
		}
	}

	async getWordDefinitions(word) {
		const response = await fetch(
			`${this.api}/entries/en/${word}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
 }

module.exports = {FreeDictionaryApi}
