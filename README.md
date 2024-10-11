# free_dictionary_api.js
Web-API for [dictionaryapi.dev](https://dictionaryapi.dev) website that provides an API to users so that they can use it to build a game, learning application, or next-generation speech and text technology

## Example
```JavaScript
async function main() {
	const { FreeDictionaryApi } = require("./free_dictionary_api.js")
	const freeDictionaryApi = new FreeDictionaryApi()
	const wordDefinitions = await freeDictionaryApi.getWordDefinitions("word")
  	console.log(wordDefinitions)
}

main()
```
