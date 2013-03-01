/*
 * FIx 31 css bug in IE (9 and less)
 * https://github.com/lusever/ie31css
 * MIT Licensed
 */
function fixIESheets() {
    var linksList = document.getElementsByTagName('link'),
        links = [],
        i, style, styleSheet;

    for (i = linksList.length - 1; i >= 0; i = i - 1) {
        if (linksList[i].rel === 'stylesheet' && linksList[i].href) {
            links.push(linksList[i]);
        }
    }

    // remove all but first
    for (i = links.length - 1; i >= 1; i = i - 1) {
        links[i].removeNode();
    }

    // create new style with imports
    for (i = links.length - 1; i >= 0; i = i - 1) {
        if (!styleSheet || styleSheet.imports.length === 30) {
            style = document.createElement('style');
            links[0].insertAdjacentElement('afterEnd', style);
            styleSheet = style.styleSheet;
        }
        styleSheet.addImport(links[i].href);
    }

    if (links[0]) {
        links[0].removeNode();
    }
}
