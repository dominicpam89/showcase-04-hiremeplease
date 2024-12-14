import sanitizeHtml from "sanitize-html"

export const sanitizeHtmlOptions: sanitizeHtml.IOptions = {
     allowedTags: sanitizeHtml.defaults.allowedTags.concat([
          "span",
          "div",
          "blockquote",
          "pre",
          "code",
          "table",
          "thead",
          "tbody",
          "tr",
          "td",
          "th",
          "sup",
          "sub",
     ]),
     allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          span: ["style"], // Allow inline styles for spans
          div: ["style"], // Allow inline styles for divs
          table: ["border", "cellspacing", "cellpadding"],
     },
     allowedStyles: {
          "*": {
               // Allow only safe inline CSS properties
               color: [
                    /^#(0x)?[0-9a-f]+$/i,
                    /^rgb\(/,
                    /^rgba\(/,
               ],
               "text-align": [
                    /^left$/,
                    /^right$/,
                    /^center$/,
               ],
               "font-size": [/^\d+(?:px|em|%)$/],
          },
     },
     allowedSchemes: ["http", "https", "data"],
     allowedSchemesByTag: {
          img: ["http", "https", "data"],
     },
}
