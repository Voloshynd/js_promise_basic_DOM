var e=document.querySelector(".logo");function n(e,n){var t=document.createElement("div"),o=document.createElement("p");return t.classList.add("message"),n&&(t.className+=" ".concat(n)),o.textContent=e,t.append(o),t}new Promise(function(n){e.addEventListener("click",function(){n()})}).then(function(){document.body.append(n("Promise was resolved!"))}),new Promise(function(e,n){setTimeout(function(){n(Error("Promise was rejected!"))},3e3)}).catch(function(){document.body.append(n("Promise was rejected!","error-message"))});
//# sourceMappingURL=index.c48a03fa.js.map
