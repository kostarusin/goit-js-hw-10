!function(){var e,t,n=document.querySelector(".breed-select");document.querySelector(".loader"),document.querySelector(".error");(e="live_SDJfjf9E0X2uVriMzqSf9tkCykdZHjTUlvRyzBvs0606uMElytt8Ik8nWjeysbdc",t="https://api.thecatapi.com/v1/breeds",fetch(t,{headers:{"x-api-key":e}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){!function(e){e.forEach((function(e){n.insertAdjacentHTML("beforeend","<option value='".concat(e.id,"'>").concat(e.name,"</option>"))}))}(e)})).catch((function(e){console.log(e)}))}();
//# sourceMappingURL=index.fd9fba81.js.map
