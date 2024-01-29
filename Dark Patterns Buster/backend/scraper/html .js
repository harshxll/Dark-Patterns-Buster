 const BLOCK_ELEMENTS = {
    ADDRESS: 'address',
    ARTICLE: 'article',
    ASIDE: 'aside',
    BLOCKQUOTE: 'blockquote',
    DETAILS: 'details',
    DIALOG: 'dialog',
    DD: 'dd',
    DIV: 'div',
    DL: 'dl',
    DT: 'dt',
    FIELDSET: 'fieldset',
    FIGCAPTION: 'figcaption',
    FIGURE: 'figure',
    FOOTER: 'footer',
    FORM: 'form',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEADER: 'header',
    HGROUP: 'hgroup',
    HR: 'hr',
    LI: 'li',
    MAIN: 'main',
    NAV: 'nav',
    OL: 'ol',
    P: 'p',
    PRE: 'pre',
    SECTION: 'section',
    TABLE: 'table',
    UL: 'ul',
  }
 const INLINE_ELEMENT = {
    A: 'a',
    ABBR: 'abbr',
    ACRONYM: 'acronym',
    AUDIO: 'audio',
    B: 'b',
    BDI: 'bdi',
    BDO: 'bdo',
    BIG: 'big',
    BR: 'br',
    BUTTON: 'button',
    CANVAS: 'canvas',
    CITE: 'cite',
    CODE: 'code',
    DATA: 'data',
    DATALIST: 'datalist',
    DEL: 'del',
    DFN: 'dfn',
    EM: 'em',
    EMBED: 'embed',
    I: 'i',
    IFRAME: 'iframe',
    IMG: 'img',
    INPUT: 'input',
    INS: 'ins',
    KBD: 'kbd',
    LABEL: 'label',
    MAP: 'map',
    MARK: 'mark',
    METER: 'meter',
    NOSCRIPT: 'noscript',
    OBJECT: 'object',
    OUTPUT: 'output',
    PICTURE: 'picture',
    PROGRESS: 'progress',
    Q: 'q',
    RUBY: 'ruby',
    S: 's',
    SAMP: 'samp',
    SCRIPT: 'script',
    SELECT: 'select',
    SLOT: 'slot',
    SMALL: 'small',
    SPAN: 'span',
    STRONG: 'strong',
    SUB: 'sub',
    SUP: 'sup',
    SVG: 'svg',
    TEMPLATE: 'template',
    TEXTAREA: 'textarea',
    TIME: 'time',
    U: 'u',
    TT: 'tt',
    VAR: 'var',
    VIDEO: 'video',
    WBR: 'wbr',
  } 
 const NODE_TYPES = {
    ELEMENT_NODE: 1,
    ATTRIBUTE_NODE: 2,
    TEXT_NODE: 3,
    CDATA_SECTION_NODE: 4,
    PROCESSING_INSTRUCTION_NODE: 7,
    COMMENT_NODE: 8,
    DOCUMENT_NODE: 9,
    DOCUMENT_TYPE_NODE: 10,
    DOCUMENT_FRAGMENT_NODE: 11,
  } 
  module.exports={BLOCK_ELEMENTS,INLINE_ELEMENT,NODE_TYPES}