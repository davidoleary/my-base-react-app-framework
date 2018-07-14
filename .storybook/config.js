import { configure } from '@storybook/react';

// function loadStories() {
//   require('../src/stories');
// }

// configure(loadStories, module);


// import { configure } from '@kadira/storybook';

function requireAll(requireContext) {
  console.log(requireContext)
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src/", true, /\/*.story\.js?$/));
}

configure(loadStories, module);