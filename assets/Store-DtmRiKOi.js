import{P as l}from"./Pop-DGAA2sEZ.js";const f="corner";function i(a,r){try{const o=`${f}_${a}`;let t=r;typeof r!="string"&&(t=JSON.stringify(t)),window.localStorage.setItem(o,t),(typeof r>"u"||r==null)&&window.localStorage.removeItem(o)}catch(o){console.error("[SAVING_STATE]",{key:a,value:r}),l.error(o)}}function m(a,r){try{const o=`${f}_${a}`;if(!r)return window.localStorage.getItem(o);const t=Array.isArray(r)?"[]":"{}";let e=JSON.parse(window.localStorage.getItem(o)||t);return r=Array.isArray(r)?r[0]:r,Array.isArray(e)&&r?e.map(A=>new r(A)):r&&e?new r(e):t=="{}"&&!Object.keys(e).length?null:e}catch(o){console.error("[ATTEMPTING_TO_LOAD_STATE]",{key:a,instanceType:r}),l.error(o)}}export{m as l,i as s};
