export default cssVar => `
  body {
    color: ${cssVar('--input-text-color')};
    background-color: ${cssVar('--input-background-color')};
    margin: 20px;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
  }
  h1 {
    font-family: 'Merriweather', serif;
    font-size: 44px;
    line-height: 52px;
    font-weight: 300;
    margin-bottom: 0;
  }
  h2 {
    font-size: 34px;
    line-height: 38px;
    font-weight: 600;
    margin-top: 60px;
    margin-bottom: 0;
  }
  h3 {
    font-size: 26px;
    line-height: 31px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 0;
  }
  h4 {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 0;
  }
  h5 {
    font-size: 18px;
    line-height: 26px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 0;
  }
  h6 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 0;
  }
  p {
    font-family: 'Merriweather', serif;
    font-size: 16px;
    line-height: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  a {
    color: #546e7a;
  }
  ul,ol {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    line-height: 34px;
    margin: 24px 0;
  }
  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }
  b,strong {
    font-weight: 600;
  }
  code {
    font-size: 18px;
    line-height: 34px;
    padding: 2px 4px;
    font-family: 'Roboto Mono', monospace;
    background-color: #eceff1;
    border-radius: 3px;
    overflow-wrap: break-word;
  }
  pre {
    font-size: 18px;
    line-height: 24px;
    padding: 20px;
    font-family: 'Roboto Mono', monospace;
    background-color: #eceff1;
    border-radius: 3px;
    overflow: auto;
  }
  blockquote {
    font-family: 'Merriweather', serif;
    font-size: 18px;
    line-height: 34px;
    border-left: 2px solid #546e7a;
    padding-left: 10px;
    margin-left: -10px;
    font-style: italic;
  }
  video,
  iframe,
  img {
    max-width: 100%;
    border-radius: 3px;
    height: auto;
  }
  hr {
    border: 0;
    margin-top: 52px;
    margin-bottom: 56px;
    text-align: center;
  }
  hr:after {
    content: "...";
    font-size: 28px;
    letter-spacing: 16px;
    line-height: 0;
  }
  table {
    border-collapse: collapse;
  }
  table th,
  table td {
    border: 1px solid #cfd8dc;
    padding: 0.4rem;
  }
  figure {
    display: table;
    margin: 1rem auto;
  }
  figure figcaption {
    color: #999;
    display: block;
    margin-top: 0.25rem;
    text-align: center;
  }
  /**
   * prism.js default theme for JavaScript, CSS and HTML
   * Based on dabblet (http://dabblet.com)
   * @author Lea Verou
   */

  pre[class*="language-"],
  code[class*="language-"] {
    color: #d4d4d4;
    font-size: 13px;
    text-shadow: none;
    font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*="language-"]::selection,
  code[class*="language-"]::selection,
  pre[class*="language-"] *::selection,
  code[class*="language-"] *::selection {
    text-shadow: none;
    background: #75a7ca;
  }

  @media print {
    pre[class*="language-"],
    code[class*="language-"] {
      text-shadow: none;
    }
  }

  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    background: #1e1e1e;
  }

  :not(pre) > code[class*="language-"] {
    padding: .1em .3em;
    border-radius: .3em;
    color: #db4c69;
    background: #f9f2f4;
  }
  /*********************************************************
  * Tokens
  */
  .namespace {
    opacity: .7;
  }

  .token.doctype .token.doctype-tag {
    color: #569CD6;
  }

  .token.doctype .token.name {
    color: #9cdcfe;
  }

  .token.comment,
  .token.prolog {
    color: #6a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
    color: #ce9178;
  }

  .language-css .token.string.url {
    text-decoration: underline;
  }

  .token.operator,
  .token.entity {
    color: #d4d4d4;
  }

  .token.operator.arrow {
    color: #569CD6;
  }

  .token.atrule {
    color: #ce9178;
  }

  .token.atrule .token.rule {
    color: #c586c0;
  }

  .token.atrule .token.url {
    color: #9cdcfe;
  }

  .token.atrule .token.url .token.function {
    color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
    color: #d4d4d4;
  }

  .token.keyword {
    color: #569CD6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: #c586c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
    color: #dcdcaa;
  }

  .token.regex {
    color: #d16969;
  }

  .token.important {
    color: #569cd6;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
    color: #4ec9b0;
  }

  .token.console {
    color: #9cdcfe;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.escape {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.tag .token.punctuation {
    color: #808080;
  }

  .token.cdata {
    color: #808080;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
    color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
    color: #d4d4d4;
  }

  .token.entity {
    color: #569cd6;
  }

  .token.namespace {
    color: #4ec9b0;
  }
  /*********************************************************
  * Language Specific
  */

  pre[class*="language-javascript"],
  code[class*="language-javascript"],
  pre[class*="language-jsx"],
  code[class*="language-jsx"],
  pre[class*="language-typescript"],
  code[class*="language-typescript"],
  pre[class*="language-tsx"],
  code[class*="language-tsx"] {
    color: #9cdcfe;
  }

  pre[class*="language-css"],
  code[class*="language-css"] {
    color: #ce9178;
  }

  pre[class*="language-html"],
  code[class*="language-html"] {
    color: #d4d4d4;
  }

  .language-regex .token.anchor {
    color: #dcdcaa;
  }

  .language-html .token.punctuation {
    color: #808080;
  }
  /*********************************************************
  * Line highlighting
  */
  pre[data-line] {
    position: relative;
  }

  pre[class*="language-"] > code[class*="language-"] {
    position: relative;
    z-index: 1;
  }

  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: #f7ebc6;
    box-shadow: inset 5px 0 0 #f7d87c;
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
  }


`;
