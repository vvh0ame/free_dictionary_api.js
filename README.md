# free_dictionary_api.py
Web-API for [dictionaryapi.dev](https://dictionaryapi.dev) website that provides an API to users so that they can use it to build a game, learning application, or next-generation speech and text technology

## Example
```python
import free_dictionary_api
free_dictionary_api = free_dictionary_api.FreeDictionaryAPI()
word_definitions = free_dictionary_api.get_word_definitions(word="")
print(word_definitions)
```
