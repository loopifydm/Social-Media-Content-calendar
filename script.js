const KEY="loopify_content_calendar_v1";
const clientsDefault=["Aqua Care RO System","KPR IAS Academy","E2FIT","Loopify"];
let data=JSON.parse(localStorage.getItem(KEY)||"null")||[
 {id:1,client:"Aqua Care RO System",date:"2026-09-24",time:"18:00",platform:"Instagram",type:"Static Post",title:"The Water Looks Clean. But What's Inside It?",status:"Approved",caption:"Clear water doesn't automatically tell you everything about its quality.",cta:"DM us to know your water quality.",creative:"",postUrl:""},
 {id:2,client:"KPR IAS Academy",date:"2026-09-26",time:"19:00",platform:"Instagram",type:"Carousel",title:"TNPSC Group 2/2A: 5 Topics You Must Revise",status:"Approval",caption:"Save this revision checklist for your preparation.",cta:"Comment REVISION",creative:"",postUrl:""},
 {id:3,client:"E2FIT",date:"2026-09-28",time:"08:00",platform:"Facebook",type:"Static Post",title:"Healthy Breakfast Subscription",status:"Design",caption:"A fresh start to your morning.",cta:"DM for subscription details.",creative:"",postUrl:""}
];
let view="dashboard", current=new Date(2026,8,22);
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function save(){localStorage.setItem(KEY,JSON.stringify(data))}
function fmtDate(d){return new Date(d+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short"})}
function statusBadge(s){return '<span class="badge '+s+'">'+s+"</span>"}
function clients(){return [...new Set([...clientsDefault,...data.map(x=>x.client)])]}
function refreshClientOptions(){
 const opts=clients().map(c=>'<option>'+c+"</option>").join("");
 $("#client").innerHTML=opts; $("#filterClient").innerHTML='<option value="">All Clients</option>'+opts;
}
function renderStats(){
 $("#statTotal").textContent=data.length;
 $("#statApproval").textContent=data.filter(x=>x.status==="Approval").length;
 $("#statApproved").textContent=data.filter(x=>x.status==="Approved").length;
 $("#statPublished").textContent=data.filter(x=>x.status==="Published").length;
 const upcoming=[...data].filter(x=>x.date>=new Date().toISOString().slice(0,10)&&x.status!=="Published").sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)).slice(0,7);
 $("#upcoming").innerHTML=upcoming.length?upcoming.map(x=>`<div class="content-row"><div class="datebox"><b>${new Date(x.date+"T00:00:00").getDate()}</b><span>${new Date(x.date+"T00:00:00").toLocaleDateString("en-IN",{month:"short"})}</span></div><div><div class="item-title">${esc(x.title)}</div><div class="item-meta">${esc(x.client)} · ${x.platform} · ${x.type}</div></div><div>${statusBadge(x.status)}</div><div class="item-meta">${x.time||""}</div><div><button class="ghost" onclick="editContent(${x.id})">Edit</button></div></div>`).join(""):"<div class='item-meta'>No upcoming content.</div>";
}
function renderCalendar(){
 const y=current.getFullYear(),m=current.getMonth(), first=new Date(y,m,1), start=new Date(y,m,1-first.getDay()), days=new Date(y,m+1,0).getDate();
 $("#monthLabel").textContent=current.toLocaleDateString("en-IN",{month:"long",year:"numeric"});
 let html=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>'<div class="weekday">'+x+"</div>").join("");
 for(let i=0;i<42;i++){let d=new Date(start);d.setDate(start.getDate()+i);let iso=d.toISOString().slice(0,10);let other=d.getMonth()!==m;let cls="day "+(other?"other ":"")+(iso===new Date().toISOString().slice(0,10)?"today":"");let items=filtered().filter(x=>x.date===iso);
 html+=`<div class="${cls}" data-date="${iso}" onclick="quickAdd('${iso}')"><div class="day-num">${d.getDate()}</div>${items.slice(0,4).map(x=>`<div class="event" onclick="event.stopPropagation();editContent(${x.id})"><b>${esc(x.title)}</b><span>${x.platform} · ${x.time||""}</span></div>`).join("")}</div>`}
 $("#calendar").innerHTML=html;
}
function filtered(){let c=$("#filterClient")?.value||"",p=$("#filterPlatform")?.value||"",s=$("#filterStatus")?.value||"";return data.filter(x=>(!c||x.client===c)&&(!p||x.platform===p)&&(!s||x.status===s))}
function renderContent(){let q=($("#search")?.value||"").toLowerCase(),s=$("#listStatus")?.value||"";let rows=data.filter(x=>(!q||[x.title,x.client,x.caption].join(" ").toLowerCase().includes(q))&&(!s||x.status===s)).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));$("#allContent").innerHTML=`<table class="table"><thead><tr><th>Date</th><th>Content</th><th>Client</th><th>Platform</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows.map(x=>`<tr><td>${fmtDate(x.date)}</td><td><b>${esc(x.title)}</b></td><td>${esc(x.client)}</td><td>${x.platform}</td><td>${x.type}</td><td>${statusBadge(x.status)}</td><td class="actions"><button onclick="editContent(${x.id})">Edit</button><button onclick="deleteContent(${x.id})">Delete</button></td></tr>`).join("")}</tbody></table>`}
function renderClients(){let cs=clients();$("#clientCards").innerHTML=cs.map(c=>{let n=data.filter(x=>x.client===c);return `<div class="stat"><span>${esc(c)}</span><b>${n.length}</b><small>${n.filter(x=>x.status==="Published").length} published · ${n.filter(x=>x.status==="Approval").length} pending approval</small></div>`}).join("")}
function show(v){view=v;$$(".view").forEach(x=>x.classList.add("hidden"));$("#"+v+"View").classList.remove("hidden");$$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));let titles={dashboard:["Dashboard","Your social media content at a glance."],calendar:["Content Calendar","Plan, schedule and manage every post."],content:["All Content","Search and manage your content pipeline."],clients:["Clients","View content volume and status by client."]};$("#pageTitle").textContent=titles[v][0];$("#pageSub").textContent=titles[v][1];if(v==="dashboard")renderStats();if(v==="calendar")renderCalendar();if(v==="content")renderContent();if(v==="clients")renderClients()}
function openModal(item=null,presetDate=""){ $("#modal").classList.remove("hidden");$("#modalTitle").textContent=item?"Edit Content":"Add Content";$("#editId").value=item?.id||"";$("#client").value=item?.client||clients()[0];$("#date").value=item?.date||presetDate||new Date().toISOString().slice(0,10);$("#platform").value=item?.platform||"Instagram";$("#type").value=item?.type||"Static Post";$("#title").value=item?.title||"";$("#status").value=item?.status||"Idea";$("#time").value=item?.time||"18:00";$("#caption").value=item?.caption||"";$("#cta").value=item?.cta||"";$("#creative").value=item?.creative||"";$("#postUrl").value=item?.postUrl||""}
function closeModal(){$("#modal").classList.add("hidden")}
function editContent(id){openModal(data.find(x=>x.id===id))}
function quickAdd(date){openModal(null,date)}
function deleteContent(id){if(confirm("Delete this content?")){data=data.filter(x=>x.id!==id);save();refresh()}}
function refresh(){refreshClientOptions();renderStats();if(view==="calendar")renderCalendar();if(view==="content")renderContent();if(view==="clients")renderClients()}
function esc(v=""){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
$$(".nav").forEach(b=>b.addEventListener("click",()=>show(b.dataset.view)));
$$("[data-view='calendar']").forEach(b=>b.addEventListener("click",()=>show("calendar")));
$("#addBtn").onclick=()=>openModal();$("#closeModal").onclick=closeModal;$("#cancelBtn").onclick=closeModal;
$("#prevMonth").onclick=()=>{current.setMonth(current.getMonth()-1);renderCalendar()};$("#nextMonth").onclick=()=>{current.setMonth(current.getMonth()+1);renderCalendar()};$("#todayBtn").onclick=()=>{current=new Date();renderCalendar()};
["filterClient","filterPlatform","filterStatus"].forEach(id=>$("#"+id).addEventListener("change",renderCalendar));["search","listStatus"].forEach(id=>$("#"+id).addEventListener("input",renderContent));
$("#contentForm").onsubmit=e=>{e.preventDefault();let id=$("#editId").value;let item={id:id?Number(id):Date.now(),client:$("#client").value,date:$("#date").value,time:$("#time").value,platform:$("#platform").value,type:$("#type").value,title:$("#title").value,status:$("#status").value,caption:$("#caption").value,cta:$("#cta").value,creative:$("#creative").value,postUrl:$("#postUrl").value};if(id)data=data.map(x=>x.id===Number(id)?item:x);else data.push(item);save();closeModal();refresh()};
refreshClientOptions();show("dashboard");