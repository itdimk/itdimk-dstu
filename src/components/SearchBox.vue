<template>
  <div>
    <input
      id="autoComplete"
      type="text"
      spellcheck="false"
      autocorrect="off"
      autocomplete="off"
      autocapitalize="off"
      maxlength="256"
      tabindex="1"
      :value="text"
      @blur="handleBlur"
      @focus="$emit('focus', $event)"
    />
  </div>
</template>

<script>
import AutoComplete from "@tarekraafat/autocomplete.js";

export default {
  name: "SearchBox",
  emits: {
    itemSelected: (item) => !!item,
    blur: null,
    focus: null,
  },
  props: {
    autocompleteSource: {
      type: Array,
      required: true,
    },
    keyProperty: {
      type: String,
      required: true,
    },
    placeHolder: {
      default: "Search",
      type: String,
      required: false,
    },
    maxResults: {
      type: Number,
      default: 6,
      required: false,
    },
    threshold: {
      type: Number,
      default: 1,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
  },

  methods: {
    handleBlur(event) {
      // if the blur was because of outside focus
      // currentTarget is the parent element, relatedTarget is the clicked element
      if (!event.relatedTarget || event.relatedTarget.id !== "result_list") {
        this.$emit("blur", event);
      }
    },
  },
  mounted() {
    const autoCompleteJS = new AutoComplete({
      data: {
        src: this.autocompleteSource,
        key: [this.keyProperty],
        cache: true,
      },
      trigger: {
        event: ["click", "input"],
      },
      placeHolder: this.placeHolder,
      selector: "#autoComplete",
      threshold: this.threshold,
      debounce: 300,
      searchEngine: "strict",
      resultsList: {
        container: (source) => {
          source.setAttribute("id", "result_list");
        },
        destination: "#autoComplete",
        position: "afterend",
        element: "ul",
        idName: "result_list",
      },
      maxResults: this.maxResults,
      resultItem: {
        content: (data, source) => {
          source.innerHTML = data.match;
        },
        element: "li",
      },
      noResults: (dataFeedback, generateList) => {
        // Generate autoComplete List
        generateList(autoCompleteJS, dataFeedback, dataFeedback.results);
        // No Results List Item
        const result = document.createElement("li");
        result.setAttribute("class", "no_result");
        result.setAttribute("tabindex", "1");
        result.innerHTML = `<span style="display: flex; align-items: center; font-weight: 100; color: rgba(0,0,0,.2);">Found No Results for "${dataFeedback.query}"</span>`;

        document
          .querySelector(`#${autoCompleteJS.resultsList.idName}`)
          .appendChild(result);
      },
      onSelection: (feedback) => {
        this.$emit("itemSelected", feedback.selection.value);
        this.$emit("blur");
      },
    });
  },
};
</script>

<style lang="scss">
#autoComplete {
  border: 0 solid white;
  border-radius: 5px;
  opacity: 0.5;
  outline: none;
  transition: all ease 0.3s;
  padding: 0.1rem 0.5rem;
  width: 75%;
  position: relative;
  margin: 0.1rem 0;

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
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
}
</style>