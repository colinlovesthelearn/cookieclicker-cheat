// Cookie Clicker Cheat - CJLS v2.052
(function(){
    try{
        var intro="Welcome to Colin's Cookie Clicker Variable Editor (CJLS) v2.052\nType \"List\" to view variables\nType \"Help\" for information on variable types";
        alert(intro);
        // Auth check
        if(!(function(){try{return document.createElement("div").innerHTML=intro,intro.includes("CJLS v2.052")}catch(e){return false}})()) return;
        var input=prompt('Enter variable name to edit, or type "List" or "Help"');
        if(!input) return;
        var key=input.trim();
        function makeDraggable(el){
            var p1=0,p2=0,p3=0,p4=0;
            el.onmousedown=function(e){
                e=e||window.event; e.preventDefault();
                p3=e.clientX; p4=e.clientY;
                document.onmouseup=closeDrag; document.onmousemove=dragElement;
                function dragElement(e){
                    e=e||window.event; e.preventDefault();
                    p1=p3-e.clientX; p2=p4-e.clientY; p3=e.clientX; p4=e.clientY;
                    el.style.top=(el.offsetTop-p2)+"px"; el.style.left=(el.offsetLeft-p1)+"px";
                }
                function closeDrag(){ document.onmouseup=null; document.onmousemove=null; }
            }
        }
        if(key.toLowerCase()==="help"){
            var h=document.createElement("div");
            h.style.cssText="position:fixed;top:50px;left:50px;width:300px;background:rgba(0,0,0,.95);color:#fff;padding:10px;border-radius:10px;z-index:9999;font:14px Arial;cursor:move";
            h.innerHTML="<b>Variable Types Info</b><ul style='margin:5px 0;padding-left:18px'><li>number: numeric e.g., 100, Infinity</li><li>string: text e.g., 'christmas'</li><li>boolean: true/false</li><li>object: collection</li><li>function: callable</li></ul><button id='closeHelp' style='margin-top:5px;width:100%'>Close</button>";
            document.body.appendChild(h); makeDraggable(h);
            document.getElementById("closeHelp").onclick=function(){h.remove();}; return;
        }
        if(key.toLowerCase()==="list"){
            var imp=["cookies","lumps","heavenlyChips"], all=Object.keys(Game).sort(), b=document.createElement("div");
            b.style.cssText="position:fixed;top:50px;left:50px;width:400px;max-height:500px;overflow:auto;background:rgba(0,0,0,.95);color:#fff;padding:10px;border-radius:10px;z-index:9999;font:14px Arial;cursor:move";
            b.innerHTML='<div style="font-weight:bold;margin-bottom:8px;cursor:move;">Cookie Clicker Variable Viewer<button id="closeList" style="float:right;background:#c00;color:#fff;border:none;padding:2px 6px;cursor:pointer;">X</button></div>';
            var t=document.createElement("table"); t.style.width="100%"; t.style.borderCollapse="collapse";
            var addRow=function(v){var tr=document.createElement("tr"); tr.innerHTML="<td style='padding:3px;border-bottom:1px solid rgba(255,255,255,.1)'>"+v+"</td><td style='padding:3px;border-bottom:1px solid rgba(255,255,255,.1)'>"+typeof Game[v]+"</td>"; t.appendChild(tr);};
            imp.forEach(addRow); var hr=document.createElement("tr"); hr.innerHTML="<td colspan=2 style='padding:2px;border-bottom:2px solid #fff'></td>"; t.appendChild(hr);
            all.forEach(function(v){if(imp.indexOf(v)===-1) addRow(v);});
            b.appendChild(t); document.body.appendChild(b); makeDraggable(b);
            document.getElementById("closeList").onclick=function(){b.remove();}; return;
        }
        if(!(key in Game)){alert('Variable "'+input+'" not found.'); return;}
        var valInput=prompt('Enter number to set "'+input+'" to (e.g. 100, Infinity)'); if(!valInput) return;
        var val=valInput.trim().toLowerCase()==="infinity"?Infinity:parseFloat(valInput);
        if(isNaN(val)){alert("Invalid number"); return;}
        try{Game[key]=val; alert('Set "'+input+'" to '+val);}catch(e){alert("FAILED: "+e);}
    }catch(err){alert("Error: "+err);}
})();
