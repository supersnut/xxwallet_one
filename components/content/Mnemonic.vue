<script>
export default {
  // By moving the code that needs window & document to mounted,
  // now it will only be executed client-side
  mounted() {

Window.copyToClickBoard = (e) => {
    // As the API is only available to Secure Contexts,
    // it cannot be used from a content script running on http:-pages, only https:-pages.
    // https://developer.mozilla.org/en-US/docsMozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
    if (!navigator || !navigator.clipboard) {
        console.log("Clipboard API not available...");
        return;
    }
    const attributes = e.target.attributes;
    if (!attributes) {
        console.log("Missing attributes on target");
        console.log(e.target);
        return;
    }
    const attribute = attributes["name"];
    if (!attribute) {
        console.log("Missing attribute 'name'");
        return;
    }
    const id = attribute.nodeValue;
    if (!id) {
        console.log("Missing element id:" + id);
        return;
    }
    const elem = document.getElementById(`${id}.0`);
    if (!elem) {
        console.log("Element not found for id:" + id);
        return;
    }
    let content = elem.innerHTML;
    for (let i = 1; i < 24; i++) {
        const elem = document.getElementById(`${id}.${i}`);
        if (!elem) break;
        content += ` ${elem.innerHTML}`;
    }
    navigator.clipboard.writeText(content).then(() => {
        const text = `${id} copied to clipboard.`;
        console.log(text);
        Snackbar.show({text, pos: 'bottom-center'});
    }).catch(err => {
        console.log('Something went wrong', err);
    });
};

} // CLOSING mounted() {

}; // CLOSING export default {
</script>
<script setup>
const props = defineProps({
  title: {type: String, required: true},
  id: {type: String, required: true},
  mnemonic: {type: String, required: false, default:"                       "}
});
</script>
<template>
  <div class="container" style='display:none' :id="`${props.id}`">
      <div class="column is-8 is-offset-2 cursor-grab"
        :name="`${props.id}`" onclick="javascript:Window.copyToClickBoard(event);">
        <section class="card event-disabled">
          <div class="pt-4 pb-1 media-content has-text-centered event-disabled">
              <h2 class="subtitle has-text-weight-bold event-disabled no-select">
                {{ props.title }}
              </h2>
              <div class="tags level-item are-medium event-disabled">
                <!-- public address -->
                <span v-if="props.id === 'PublicAddress'"
                      :id="`${props.id}.0`"
                      translate="no"
                      class="notranslate custom-tag public-address tag-color-0">{{ props.mnemonic }}</span>
                <!-- mnemonic -->
                <div v-else="">
                  <div v-for="(item,index) in props.mnemonic.split(' ')"
                      style='display:inline-flex; align-items: baseline;'>
                      <p class='no-select' style='display:inline-flex;'>{{ index+1 }}.</p>
                    <span
                      :id="`${props.id}.${index}`"
                      translate="no"
                      :class="`notranslate custom-tag mnemonic tag-color-${(index-(index%4))/4}`">{{ item }}</span>
                  </div>
                </div>
              </div>
              <div v-if="props.id === 'PublicAddress'"
                class="is-size-6 has-text-grey event-disabled no-select">
                <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" style="display: inline-block;">
                    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                Touch to copy
              </div>
              <div class="m-4 no-select" >
                 <slot/>
              </div>
          </div>
        </section>
      </div>
  </div>
</template>

<style>
.event-disabled {
    pointer-events: none;
}
.cursor-grab {
    cursor: grab;
}
.custom-tag {
    border-radius: 9999px;
    align-items: center;
    display: inline-flex;
    line-height: 2;
    padding-left: 0.75em;
    margin-right: 0.85em;
    margin-bottom: 0.5em;
    padding-right: 0.75em;
    white-space: nowrap;
}
.tag-color-0 { background-color: #0A2; color: #FFF; }
.tag-color-1 { background-color: #C00; color: #FFF; }
.tag-color-2 { background-color: #02A; color: #FFF; }
.tag-color-3 { background-color: #FE3; color: #000; }
.tag-color-4 { background-color: #F98; color: #000; }
.tag-color-5 { background-color: #2EE; color: #000; }
.mnemonic {
  font-size: 1rem;
  font-weight: bold;
}
@media (max-width: 359px) {
  .public-address {
    font-size: .65rem;
  }
}
@media (min-width:360px) {
  .public-address {
    font-size: .72rem;
    font-weight: bold;
  }
}
@media (min-width:420px) {
  .public-address {
    font-size: .85rem;
    font-weight: bold;
  }
}
@media (min-width:480px) {
  .public-address {
    font-size: 1rem;
    font-weight: bold;
  }
}
.touch-to-copy::after {
  content: ""
}
.no-select {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
}
</style>
