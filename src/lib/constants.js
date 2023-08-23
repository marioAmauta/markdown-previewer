export const PLACEHOLDER_TEXT = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  
  ### And here's some other cool stuff:
  
  Heres some code, \`<div></div>\`, between 2 backticks.
  
  \`\`\`
  // this is multi-line code:

  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;
    }
  }
  \`\`\`
  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org/), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:
  
  ![Random Image](https://fastly.picsum.photos/id/609/500/300.jpg?hmac=meMxkbekXo5xeKGLzKyKrMM2wQNNf-A0HfNW6C0h9_0)
  `.trim();

export const BUTTON_ACTIONS = {
  CLEAR: 'CLEAR',
  COPY: 'COPY',
  EXPAND: 'EXPAND',
  COMPRESS: 'COMPRESS',
  LIGHT: 'LIGHT',
  DARK: 'DARK'
};

export const SELECT_OPTIONS = {
  PREVIEW: 'PREVIEW',
  HTML: 'HTML',
  LIGHT_MODE: 'LIGHT MODE',
  DARK_MODE: 'DARK MODE'
};

export const COPY_TYPES = {
  HTML: 'HTML',
  MARKDOWN: 'MARKDOWN'
};

export const LOCAL_STORAGE_KEYS = {
  EDITOR_TEXT: 'editorText',
  LAST_SAVED: 'lastSaved'
};
