<template>
  <div>
    <input id="autoComplete" type="text" dir="ltr" spellcheck=false autocorrect="off" autocomplete="off"
           autocapitalize="off" maxlength="2048" tabindex="1">
  </div>
</template>

<script>
import AutoComplete from '@tarekraafat/autocomplete.js'

export default {
  name: "SearchBox",
  mounted() {
    const autoCompleteJS = new AutoComplete({
      data: {                              // Data src [Array, Function, Async] | (REQUIRED)
        src: async () => {
         const response = await fetch("https://edu.donstu.ru/api/raspGrouplist?year=2020-2021");
         const json = await response.json();
         console.log(json.data);
         return json.data;
        },
        key: ["name"],
        cache: true
      },
      placeHolder: "Search",     // Place Holder text                 | (Optional)
      selector: "#autoComplete",           // Input field selector              | (Optional)
      observer: true,                      // Input field observer | (Optional)
      threshold: 2,                        // Min. Chars length to start Engine | (Optional)
      debounce: 300,                       // Post duration for engine to start | (Optional)
      searchEngine: "strict",              // Search Engine type/mode           | (Optional)
      resultsList: {                       // Rendered results list object      | (Optional)
        container: source => {
          source.setAttribute("id", "result_list");
        },
        destination: "#autoComplete",
        position: "afterend",
        element: "ul",
        idName: 'result_list'
      },
      maxResults: 6,                         // Max. number of rendered results | (Optional)
      resultItem: {                          // Rendered result item            | (Optional)
        content: (data, source) => {
          source.innerHTML = data.match;
        },
        element: "li"
      },
      noResults: (dataFeedback, generateList) => {
        // Generate autoComplete List
        generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
        // No Results List Item
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;

        document.querySelector(`#${autoCompleteJS.resultsList.idName}`).appendChild(result);
      },
      onSelection: feedback => {             // Action script onSelection event | (Optional)
        console.log(feedback.selection.value);
      }
    });
  },
}
</script>

<style lang="scss">
#autoComplete {
  border: 0 solid white;
  border-radius: 10px;
  opacity: 0.5;
  outline: none;
  transition: all ease 0.3s;
  padding: 0.1rem 0.5rem;
  width: 50%;
  position: relative;

  &:focus {
    opacity: 0.9;
    width: 100%;
  }
}

#result_list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  width: 100%;
  top: 2rem;
  border-radius: 5px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 3px lightgray;
  background: white;
  opacity: 1;
}

#result_list li {
  padding: 0.2rem;
  display: block;
  outline: none;

  &:hover {
    background: #EEEEEE;
  }
}

</style>