from requests import get
	
class FreeDictionaryAPI:
	def __init__(self) -> None:
		self.api = "https://api.dictionaryapi.dev/api/v2"
		self.headers = {
			"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36"
		}


	def get_word_definitions(
			self,
			word: str) -> list:
		return get(
			f"{self.api}/entries/en/{word}",
			headers=self.headers).json()
