// console.log(document);
// console.dir(document);
// console.log(document.body);
console.dir(document.body.childNodes[1]);
// console.log(document.body);
// console.dir(document.body);
console.log(document.body.childNodes);
// NodeList(17) [text, div, text, h4, text, p, text, button, text, div, text, script, text, comment, text, script, text]0: text1: div2: text3: h44: text5: paccessKey: ""align: ""ariaAtomic: nullariaAutoComplete: nullariaBrailleLabel: nullariaBrailleRoleDescription: nullariaBusy: nullariaChecked: nullariaColCount: nullariaColIndex: nullariaColSpan: nullariaCurrent: nullariaDescription: nullariaDisabled: nullariaExpanded: nullariaHasPopup: nullariaHidden: nullariaInvalid: nullariaKeyShortcuts: nullariaLabel: nullariaLevel: nullariaLive: nullariaModal: nullariaMultiLine: nullariaMultiSelectable: nullariaOrientation: nullariaPlaceholder: nullariaPosInSet: nullariaPressed: nullariaReadOnly: nullariaRelevant: nullariaRequired: nullariaRoleDescription: nullariaRowCount: nullariaRowIndex: nullariaRowSpan: nullariaSelected: nullariaSetSize: nullariaSort: nullariaValueMax: nullariaValueMin: nullariaValueNow: nullariaValueText: nullassignedSlot: nullattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}autocapitalize: ""autofocus: falsebaseURI: "http://127.0.0.1:5500/web-JS/java-script/DOM/index.html"childElementCount: 0childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']className: ""clientHeight: 18clientLeft: 0clientTop: 0clientWidth: 799contentEditable: "inherit"dataset: DOMStringMap {}dir: ""draggable: falseelementTiming: ""enterKeyHint: ""firstChild: textfirstElementChild: nullhidden: falseid: ""inert: falseinnerHTML: "Lets learn about DOM concept in detail"innerText: "Lets learn about DOM concept in detail"inputMode: ""isConnected: trueisContentEditable: falselang: ""lastChild: textlastElementChild: nulllocalName: "p"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: buttonnextSibling: textnodeName: "P"nodeType: 1nodeValue: nullnonce: ""offsetHeight: 18offsetLeft: 8offsetParent: bodyoffsetTop: 87offsetWidth: 799onabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprogress: nullonratechange: nullonreset: nullonresize: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullouterHTML: "<p>Lets learn about DOM concept in detail</p>"outerText: "Lets learn about DOM concept in detail"ownerDocument: documentparentElement: bodyparentNode: bodypart: DOMTokenList [value: '']popover: nullprefix: nullpreviousElementSibling: h4previousSibling: textrole: nullscrollHeight: 18scrollLeft: 0scrollTop: 0scrollWidth: 799shadowRoot: nullslot: ""spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "P"textContent: "Lets learn about DOM concept in detail"title: ""translate: truevirtualKeyboardPolicy: ""[[Prototype]]: HTMLParagraphElement(...)6: text7: button8: text9: div10: text11: script12: text13: comment14: text15: script16: textlength: 17[[Prototype]]: NodeList
// document
// #document (http://127.0.0.1:5500/web-JS/java-script/DOM/index.html)
document.body.childNodes[1].innerText="change kar diya ";
// document.body.childNodes[1].style.size=18px;
document.body.childNodes[3].innerText="apple mango banana";

let div=document.querySelector("div");
console.log(div);
div.innerHTML="<h3>helo thre</h3>"

let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let parab=document.querySelector("p");
console.log(parab.getAttribute("id"));
console.log(parab.setAttribute("id","newid"));

// DOM to access/ alter style
console.log(div.style);
div.style.backgroundColor="green";
div.style.fontSize="26px";
div.innerText="hello !!";

// To create a new element OR delete a new element 
let newbtn=document.createElement("button");
newbtn.innerText="Click me!!";
// to add in the web page
para.after(newbtn); 

let head=document.createElement("h1");
head.innerText="I'M learning DOM with JS";
div.before(head);
div.remove();

// Question 1
let btn=document.createElement("button");
btn.innerText="click me";
btn.style.backgroundColor="red";
btn.style.color="white";
console.log(btn);
// document.body.prepend(btn);
document.querySelector("body").prepend(btn);
console.log("Hello");

// Question 2:  adding a new class or removing existing CLASS
let para=document.querySelector("p");
para.classList
// DOMTokenList ['helo', value: 'helo']
para.classList.add("newclass");
para.classList
// DOMTokenList(2) ['helo', 'newclass', value: 'helo newclass']
para.classList.remove;
para.classList.remove("newclass");