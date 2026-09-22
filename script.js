const KEY="loopify_content_calendar_v3";
const clientsDefault=["Aqua Care RO System","E2FIT"];
let data=JSON.parse(localStorage.getItem(KEY)||"null")||[
{id:1,client:"Aqua Care RO System",date:"2026-09-28",time:"19:30",platform:"Instagram",type:"Static Post",title:"Is Your Drinking Water Really Safe?",status:"Idea",caption:"The water looks clean. But can you actually see what's inside it?",cta:"DM WATER",creative:"",postUrl:""},
{id:2,client:"Aqua Care RO System",date:"2026-09-30",time:"19:30",platform:"Instagram",type:"Carousel",title:"5 Signs Your RO Needs Attention",status:"Idea",caption:"Your RO may be warning you before it stops working.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:3,client:"Aqua Care RO System",date:"2026-10-02",time:"19:30",platform:"Instagram",type:"Static Post",title:"RO Filter Replacement",status:"Idea",caption:"Changing the RO filter only when the water tastes bad? Think again.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:4,client:"Aqua Care RO System",date:"2026-10-05",time:"19:30",platform:"Instagram",type:"Carousel",title:"RO vs UV vs UF",status:"Idea",caption:"RO, UV or UF? Your water source matters.",cta:"DM RO",creative:"",postUrl:""},
{id:5,client:"Aqua Care RO System",date:"2026-10-07",time:"19:30",platform:"Instagram",type:"Static Post",title:"Is Your RO Taking Forever to Fill One Glass?",status:"Idea",caption:"Reduced water flow can have different causes. Inspect first, then repair what actually needs repair.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:6,client:"Aqua Care RO System",date:"2026-10-09",time:"19:30",platform:"Instagram",type:"Story",title:"RO Service Before & After",status:"Idea",caption:"Show actual service footage: Before → Service → After.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:7,client:"Aqua Care RO System",date:"2026-10-12",time:"19:30",platform:"Instagram",type:"Carousel",title:"What's Inside an RO?",status:"Idea",caption:"You drink RO water every day. But do you know what's inside the machine?",cta:"Save + DM RO",creative:"",postUrl:""},
{id:8,client:"Aqua Care RO System",date:"2026-10-14",time:"19:30",platform:"Instagram",type:"Static Post",title:"Why the RO Membrane Matters",status:"Idea",caption:"The RO membrane is one of the most important components in an RO system.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:9,client:"Aqua Care RO System",date:"2026-10-16",time:"19:30",platform:"Instagram",type:"Carousel",title:"5 RO Buying Mistakes",status:"Idea",caption:"Planning to buy an RO? Don't make these 5 mistakes.",cta:"DM BUY",creative:"",postUrl:""},
{id:10,client:"Aqua Care RO System",date:"2026-10-19",time:"19:30",platform:"Instagram",type:"Static Post",title:"Cheap RO vs Proper RO",status:"Idea",caption:"The cheapest RO isn't always the cheapest decision. Consider filters, membrane, maintenance, service and suitability.",cta:"DM BUY",creative:"",postUrl:""},
{id:11,client:"Aqua Care RO System",date:"2026-10-21",time:"19:30",platform:"Instagram",type:"Carousel",title:"RO Maintenance Checklist",status:"Idea",caption:"Save this checklist: water flow, taste/odour, leakage, filters, membrane, tank and overall system.",cta:"Save this post",creative:"",postUrl:""},
{id:12,client:"Aqua Care RO System",date:"2026-10-23",time:"19:30",platform:"Instagram",type:"Story",title:"Customer Testimonial",status:"Idea",caption:"Don't take our word for it. Hear it from our customer.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:13,client:"Aqua Care RO System",date:"2026-10-26",time:"19:30",platform:"Instagram",type:"Static Post",title:"Before Buying an RO, Understand Your Water",status:"Idea",caption:"Don't start with which purifier is cheapest. Start with what your water actually needs.",cta:"DM WATER",creative:"",postUrl:""},
{id:14,client:"Aqua Care RO System",date:"2026-10-28",time:"19:30",platform:"Instagram",type:"Carousel",title:"7 Questions Before Buying RO",status:"Idea",caption:"Ask about water source, treatment need, technology, filters, maintenance, warranty and local service.",cta:"Save + DM BUY",creative:"",postUrl:""},
{id:15,client:"Aqua Care RO System",date:"2026-10-30",time:"19:30",platform:"Instagram",type:"Static Post",title:"Local RO Service",status:"Idea",caption:"Buying an RO is easy. Finding someone to service it when it fails is the real test.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:16,client:"Aqua Care RO System",date:"2026-11-02",time:"19:30",platform:"Instagram",type:"Carousel",title:"When Should You Service Your RO?",status:"Idea",caption:"Don't wait until your RO stops working. Watch for reduced flow, leakage, taste change, strange noise and other issues.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:17,client:"Aqua Care RO System",date:"2026-11-04",time:"19:30",platform:"Instagram",type:"Static Post",title:"RO Service Check",status:"Idea",caption:"System inspection, performance check, filter assessment, leakage check and basic cleaning/check — only services actually provided.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:18,client:"Aqua Care RO System",date:"2026-11-06",time:"19:30",platform:"Instagram",type:"Story",title:"What Actually Happens During an RO Service?",status:"Idea",caption:"Show technician arrival, inspection, filter checking, internal cleaning, component checking, testing and finished system.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:19,client:"Aqua Care RO System",date:"2026-11-09",time:"19:30",platform:"Instagram",type:"Carousel",title:"Which RO Is Right For You?",status:"Idea",caption:"Answer four questions: water source, number of users, current problems and maintenance/service expectations.",cta:"DM BUY",creative:"",postUrl:""},
{id:20,client:"Aqua Care RO System",date:"2026-11-11",time:"19:30",platform:"Instagram",type:"Static Post",title:"Looking for a New RO Purifier in Coimbatore?",status:"Idea",caption:"Show the actual product with model name, real features, service support, installation support and actual price.",cta:"DM BUY for price & availability",creative:"",postUrl:""},
{id:21,client:"Aqua Care RO System",date:"2026-11-13",time:"19:30",platform:"Instagram",type:"Carousel",title:"Why Service Matters",status:"Idea",caption:"Your RO doesn't end at installation: purchase → installation → maintenance → filter replacement → service.",cta:"Save this if you own an RO",creative:"",postUrl:""},
{id:22,client:"Aqua Care RO System",date:"2026-11-16",time:"19:30",platform:"Instagram",type:"Static Post",title:"RO Myths You Should Stop Believing",status:"Idea",caption:"Every house needs the same purifier? Price alone tells quality? Clear water means everything is fine? RO needs no maintenance?",cta:"DM WATER",creative:"",postUrl:""},
{id:23,client:"Aqua Care RO System",date:"2026-11-18",time:"19:30",platform:"Instagram",type:"Story",title:"Another RO Installation Completed",status:"Idea",caption:"Show genuine customer location, installation, product, technician and customer feedback with permission.",cta:"DM BUY",creative:"",postUrl:""},
{id:24,client:"Aqua Care RO System",date:"2026-11-20",time:"19:30",platform:"Instagram",type:"Static Post",title:"RO Replacement / Upgrade",status:"Idea",caption:"Still using an old RO that keeps giving you problems? Show assessment, recommendation, installation and service support.",cta:"DM UPGRADE",creative:"",postUrl:""},
{id:25,client:"Aqua Care RO System",date:"2026-11-23",time:"19:30",platform:"Instagram",type:"Carousel",title:"Why Customers Choose Us",status:"Idea",caption:"Local service, installation support, technician support, transparent communication, after-sales service and customer support — only where true.",cta:"DM SERVICE",creative:"",postUrl:""},
{id:26,client:"Aqua Care RO System",date:"2026-11-25",time:"19:30",platform:"Instagram",type:"Static Post",title:"Need an RO? Let's Make the Decision Simple",status:"Idea",caption:"Tell us your location, water source, number of people at home and approximate budget.",cta:"DM RO",creative:"",postUrl:""},
{id:27,client:"Aqua Care RO System",date:"2026-11-27",time:"19:30",platform:"Instagram",type:"Story",title:"Is Your Home RO Due for Service?",status:"Idea",caption:"Are you due for service, planning to buy a new purifier, or considering replacement/upgrade? We can help with the relevant service.",cta:"DM WATER",creative:"",postUrl:""},
{id:28,client:"Aqua Care RO System",date:"2026-11-30",time:"19:30",platform:"Instagram",type:"Carousel",title:"RO Buying Checklist",status:"Idea",caption:"Review your water source, treatment requirement, technology, filters, maintenance and local service before buying.",cta:"Save + DM BUY",creative:"",postUrl:""},
{id:29,client:"Aqua Care RO System",date:"2026-12-02",time:"19:30",platform:"Instagram",type:"Static Post",title:"Water / Service / Upgrade — What Do You Need?",status:"Idea",caption:"Make the decision simple: BUY / SERVICE / UPGRADE. Tell us what you need and we'll take it from there.",cta:"DM WATER",creative:"",postUrl:""},
{id:30,client:"Aqua Care RO System",date:"2026-12-04",time:"19:30",platform:"Instagram",type:"Static Post",title:"30 Days of Water Tips. Now Let's Check Your Water.",status:"Idea",caption:"RO service, maintenance, new installation, replacement/upgrade or product guidance.",cta:"DM WATER",creative:"",postUrl:""}
];
data=data.filter(x=>clientsDefault.includes(x.client));

const dailyStories=[
["2026-09-28","When did you last service your RO?","Technician / RO installation / service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-09-29","Do you check your RO water regularly?","Filter / product / customer visit","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-09-30","What is your RO's biggest problem right now?","Before/after service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-01","How often do you think an RO needs service?","Technician checking an RO","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-02","Would you know if your RO filter needs replacement?","RO filter close-up","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-03","Do you know what is inside your RO?","RO internal components","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-04","When was your last RO maintenance?","Customer visit / service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-05","RO, UV or UF — which one do you use?","Technician explaining water treatment","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-06","Is your RO taking longer to fill?","Before/after water-flow service","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-07","Have you noticed a change in water taste?","Filter inspection / service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-08","Do you wait until the RO stops before servicing it?","Technician performing preventive check","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-09","How old is your current RO?","RO installation / product","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-10","Would you choose price or service support first?","Technician / customer visit","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-11","Have you ever had an RO leakage problem?","Leakage check / service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-12","Can you name one RO component?","RO components / filter","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-13","Do you know when your RO membrane needs attention?","RO membrane / technician","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-14","How often do you clean/check your RO?","Technician service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-15","Would you buy an RO without checking your water source?","Technician assessing water / product","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-16","What matters more: RO price or after-sales service?","Customer visit / service work","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-17","Have you compared your RO service options?","Technician / installation","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-18","Would you like an RO buying checklist?","Product / installation / technician","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-19","Is your RO due for a service check?","Service inspection / filter","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-20","Do you know what your technician checks during service?","Technician performing service","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-21","Have you checked your RO for leakage recently?","Leakage check / before-after","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-22","Would you like to see a real RO installation?","RO installation / technician","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-23","Are you happy with your current RO?","Customer visit / testimonial","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-24","Are you planning to buy a new RO?","Product showcase","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-25","Do you know when to replace an old RO?","Old vs replacement / installation","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-26","What would you ask before buying an RO?","Technician explaining product","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"],
["2026-10-27","SERVICE or BUY — what do you need?","Customer visit / completed service","Need RO Service? 🔧 Need a New RO? 💧 DM SERVICE / BUY"]
];
let storyId=1001;
dailyStories.forEach(([date,engagement,authority,conversion])=>{
 data.push({id:storyId++,client:"Aqua Care RO System",date,time:"09:00",platform:"Instagram",type:"Story",title:"Story 1 — Engagement",status:"Idea",caption:engagement,cta:"Vote / Answer / Reply",creative:"",postUrl:""});
 data.push({id:storyId++,client:"Aqua Care RO System",date,time:"13:00",platform:"Instagram",type:"Story",title:"Story 2 — Authority",status:"Idea",caption:authority,cta:"Show real work / real proof",creative:"",postUrl:""});
 data.push({id:storyId++,client:"Aqua Care RO System",date,time:"20:30",platform:"Instagram",type:"Story",title:"Story 3 — Conversion",status:"Idea",caption:conversion,cta:"DM SERVICE / BUY",creative:"",postUrl:""});
});

let view="dashboard", current=new Date(2026,8,22);
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
function localISO(d){return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")}
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
 const y=current.getFullYear(),m=current.getMonth(), first=new Date(y,m,1), start=new Date(y,m,1-first.getDay());
 $("#monthLabel").textContent=current.toLocaleDateString("en-IN",{month:"long",year:"numeric"});
 let html=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(x=>'<div class="weekday">'+x+"</div>").join("");
 for(let i=0;i<42;i++){let d=new Date(start);d.setDate(start.getDate()+i);let iso=localISO(d);let other=d.getMonth()!==m;let cls="day "+(other?"other ":"")+(iso===localISO(new Date())?"today":"");let items=filtered().filter(x=>x.date===iso);
 html+=`<div class="${cls}" data-date="${iso}" onclick="quickAdd('${iso}')"><div class="day-num">${d.getDate()}</div>${items.slice(0,4).map(x=>`<div class="event" onclick="event.stopPropagation();editContent(${x.id})"><b>${esc(x.title)}</b><span>${x.platform} · ${x.time||""}</span></div>`).join("")}</div>`}
 $("#calendar").innerHTML=html;
}
function filtered(){let c=$("#filterClient")?.value||"",p=$("#filterPlatform")?.value||"",s=$("#filterStatus")?.value||"";return data.filter(x=>(!c||x.client===c)&&(!p||x.platform===p)&&(!s||x.status===s))}
function renderContent(){let q=($("#search")?.value||"").toLowerCase(),s=$("#listStatus")?.value||"";let rows=data.filter(x=>(!q||[x.title,x.client,x.caption].join(" ").toLowerCase().includes(q))&&(!s||x.status===s)).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));$("#allContent").innerHTML=`<table class="table"><thead><tr><th>Date</th><th>Content</th><th>Client</th><th>Platform</th><th>Type</th><th>Status</th><th>Actions</th></tr></thead><tbody>${rows.map(x=>`<tr><td>${fmtDate(x.date)}</td><td><b>${esc(x.title)}</b></td><td>${esc(x.client)}</td><td>${x.platform}</td><td>${x.type}</td><td>${statusBadge(x.status)}</td><td class="actions"><button onclick="editContent(${x.id})">Edit</button><button onclick="deleteContent(${x.id})">Delete</button></td></tr>`).join("")}</tbody></table>`}
function renderClients(){let cs=clients();$("#clientCards").innerHTML=cs.map(c=>{let n=data.filter(x=>x.client===c);return `<div class="stat"><span>${esc(c)}</span><b>${n.length}</b><small>${n.filter(x=>x.status==="Published").length} published · ${n.filter(x=>x.status==="Approval").length} pending approval</small></div>`}).join("")}
function show(v){view=v;$$(".view").forEach(x=>x.classList.add("hidden"));$("#"+v+"View").classList.remove("hidden");$$(".nav").forEach(x=>x.classList.toggle("active",x.dataset.view===v));let titles={dashboard:["Dashboard","Your social media content at a glance."],calendar:["Content Calendar","Plan, schedule and manage every post."],content:["All Content","Search and manage your content pipeline."],clients:["Clients","View content volume and status by client."]};$("#pageTitle").textContent=titles[v][0];$("#pageSub").textContent=titles[v][1];if(v==="dashboard")renderStats();if(v==="calendar")renderCalendar();if(v==="content")renderContent();if(v==="clients")renderClients()}
function openModal(item=null,presetDate=""){ $("#modal").classList.remove("hidden");$("#modalTitle").textContent=item?"Edit Content":"Add Content";$("#editId").value=item?.id||"";$("#client").value=item?.client||clients()[0];$("#date").value=item?.date||presetDate||localISO(new Date());$("#platform").value=item?.platform||"Instagram";$("#type").value=item?.type||"Static Post";$("#title").value=item?.title||"";$("#status").value=item?.status||"Idea";$("#time").value=item?.time||"18:00";$("#caption").value=item?.caption||"";$("#cta").value=item?.cta||"";$("#creative").value=item?.creative||"";$("#postUrl").value=item?.postUrl||""}
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