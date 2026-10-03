(function(){
var $=function(i){return document.getElementById(i)};
var nl=$('nl'),mt=$('mt');
if(mt&&nl){mt.setAttribute('aria-controls','nl');mt.setAttribute('aria-expanded','false');mt.onclick=function(){mt.setAttribute('aria-expanded',nl.classList.toggle('open'))};nl.onclick=function(){nl.classList.remove('open');mt.setAttribute('aria-expanded','false')}}
var S=["Occupational Therapy", "Sensory Integration Therapy", "Play & Engagement Therapy", "Neurodevelopmental Therapy", "Oral Placement Therapy", "Cognitive Behavioral Therapy (CBT)", "Group Therapy", "Social Skills Training", "Activities of Daily Living (ADL) Training"];
var opts='<option value="">Not sure yet</option>'+S.map(function(s){var e=s.replace(/&/g,'&amp;');return '<option value="'+e+'">'+e+'</option>'}).join('');
var d=document.createElement('div');d.className='md';d.id='md';d.setAttribute('role','dialog');d.setAttribute('aria-modal','true');d.setAttribute('aria-labelledby','mdt');d.hidden=true;
d.innerHTML='<div class="mb"><button type="button" class="mx" id="mx" aria-label="Close">&times;</button><h2 id="mdt">Book an appointment</h2><p>Share a few details and we will continue on WhatsApp.</p><form id="bf"><input id="bn" placeholder="Parent\'s name *" maxlength="60" required autocomplete="name"><input id="ba" placeholder="Child\'s age" maxlength="20"><select id="bs" aria-label="Service">'+opts+'</select><textarea id="bm" rows="3" placeholder="Your concern (optional)" maxlength="300"></textarea><button class="btn" type="submit">Send on WhatsApp</button></form><a class="md-call" href="tel:+917507338969">or call 075073 38969</a></div>';
document.body.appendChild(d);
var lf=null;
function open(e){if(e)e.preventDefault();lf=document.activeElement;d.hidden=false;document.body.style.overflow='hidden';setTimeout(function(){$('bn').focus()},50)}
function close(){d.hidden=true;document.body.style.overflow='';if(lf&&lf.focus)lf.focus()}
document.querySelectorAll('.nc a[href$="#contact"],.ct a[href$="#contact"],.cta a[href$="#contact"],.tb a[href$="#contact"],[data-book]').forEach(function(a){a.addEventListener('click',open)});
$('mx').onclick=close;d.addEventListener('click',function(e){if(e.target===d)close()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!d.hidden)close()});
function wa(n,a,s,m){var t="Hello Dr. Devyani, I'd like to book an appointment.\nParent: "+n+(a?"\nChild's age: "+a:"")+(s?"\nService: "+s:"")+(m?"\nConcern: "+m:"");window.open("https://wa.me/917507338969?text="+encodeURIComponent(t),"_blank")}
$('bf').onsubmit=function(e){e.preventDefault();wa($('bn').value,$('ba').value,$('bs').value,$('bm').value);close()};
var af=$('af');if(af)af.onsubmit=function(e){e.preventDefault();wa($('n').value,$('a').value,'',$('m').value)};

var GOOGLE_REVIEW_URL='https://maps.app.goo.gl/2J3wrgFxBeVaxbsd8'; /* replace with your Google "Get more reviews" link when you have it */
var r=document.createElement('div');r.className='md';r.id='rd';r.setAttribute('role','dialog');r.setAttribute('aria-modal','true');r.hidden=true;
r.innerHTML='<div class="mb"><button type="button" class="mx" id="rx" aria-label="Close">&times;</button><h2>Write a Google review</h2><p>Rate your experience and write a few words. We will copy your review so you can paste it on Google.</p><form id="rf"><div class="sr" id="sr" role="radiogroup" aria-label="Rating"><button type="button" data-v="1">&#9733;</button><button type="button" data-v="2">&#9733;</button><button type="button" data-v="3">&#9733;</button><button type="button" data-v="4">&#9733;</button><button type="button" data-v="5">&#9733;</button></div><input id="rn" placeholder="Your name" maxlength="60" required><textarea id="rt" rows="4" placeholder="Share your experience (min. 10 characters)" maxlength="500" required minlength="10"></textarea><button class="btn" type="submit">Continue to Google</button></form><div class="rmsg" id="rmsg"></div></div>';
document.body.appendChild(r);
var rating=0,stars=r.querySelectorAll('#sr button');
function paint(){stars.forEach(function(s){s.classList.toggle('on',+s.dataset.v<=rating)})}
stars.forEach(function(s){s.onclick=function(){rating=+s.dataset.v;paint()}});
var rlf=null;
function ropen(e){if(e)e.preventDefault();rlf=document.activeElement;r.hidden=false;document.body.style.overflow='hidden';$('rmsg').style.display='none';setTimeout(function(){var f=r.querySelector('#sr button');if(f)f.focus()},50)}
function rclose(){r.hidden=true;document.body.style.overflow='';if(rlf&&rlf.focus)rlf.focus()}
document.querySelectorAll('[data-review]').forEach(function(a){a.addEventListener('click',ropen)});
$('rx').onclick=rclose;r.addEventListener('click',function(e){if(e.target===r)rclose()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!r.hidden)rclose()});
$('rf').onsubmit=function(e){e.preventDefault();var m=$('rmsg');
if(!rating){m.textContent='Please tap a star rating first.';m.style.display='block';return}
var txt=$('rt').value.trim();window.open(GOOGLE_REVIEW_URL,'_blank');
var st=rating+' star'+(rating>1?'s':''),show=function(t){m.textContent=t;m.style.display='block'};
var okc=function(){show('Your review text is copied. On Google, choose '+st+' and paste it. Thank you!')},nok=function(){show('On Google, choose '+st+' and write your review. Thank you!')};
try{navigator.clipboard.writeText(txt).then(okc,nok)}catch(x){nok()}
};

document.documentElement.classList.add('js');
var vv=document.querySelector('.vd video');if(vv&&window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches){vv.removeAttribute('autoplay');vv.pause();vv.controls=true}
var hd=document.querySelector('header');if(hd)addEventListener('scroll',function(){hd.classList.toggle('sh',scrollY>10)},{passive:true});
var rv=document.querySelectorAll('section h2,.sk,.rv,.ps,.th img,.sv,.lc,.ab>*,.sp>*,.vd video,details,.pg>*');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});rv.forEach(function(el){el.classList.add('reveal');io.observe(el)})}

var TR=window.TR||{},cur='en',nc=document.querySelector('.nc');
function setLang(l){cur=l;document.documentElement.lang=l;var d=TR[l]||{};
if(l!=='en'&&!$('dvf')){var k=document.createElement('link');k.id='dvf';k.rel='stylesheet';k.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700;800&display=swap';document.head.appendChild(k)}
var h=document.querySelector('.hc h1');if(h){if(h._o===undefined)h._o=h.innerHTML;h.innerHTML=d.__hero||h._o}
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){var p=n.parentNode.nodeName;return p==='SCRIPT'||p==='STYLE'||!n.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n;
while(n=w.nextNode()){if(n._o===undefined)n._o=n.nodeValue;var t=d[n._o.trim().replace(/\s+/g,' ')];n.nodeValue=t?n._o.replace(n._o.trim(),function(){return t}):n._o}
document.querySelectorAll('[placeholder]').forEach(function(e){if(e._p===undefined)e._p=e.placeholder;e.placeholder=d[e._p]||e._p});
var lc=document.querySelector('.lcur');if(lc)lc.textContent={en:'EN',hi:'हिं',mr:'मरा'}[l];document.querySelectorAll('.lm button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l)});try{localStorage.setItem('lang',l)}catch(x){}}
if(nc){var lw=document.createElement('div');lw.className='lw';
lw.innerHTML='<button type="button" class="lb" aria-haspopup="true" aria-expanded="false" aria-label="Change language"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.87 15.07l-2.54-2.51.03-.03A17.52 17.52 0 0014.07 6H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg><span class="lcur">EN</span></button><ul class="lm" hidden><li><button type="button" data-l="en">English</button></li><li><button type="button" data-l="hi">हिन्दी</button></li><li><button type="button" data-l="mr">मराठी</button></li></ul>';
nc.insertBefore(lw,nc.firstChild);var lb=lw.querySelector('.lb'),lm=lw.querySelector('.lm');
function lt(o){lm.hidden=!o;lb.setAttribute('aria-expanded',o?'true':'false')}
lb.onclick=function(e){e.stopPropagation();lt(lm.hidden)};
lm.querySelectorAll('button').forEach(function(b){b.onclick=function(){setLang(b.dataset.l);lt(false)}});
document.addEventListener('click',function(){lt(false)});document.addEventListener('keydown',function(e){if(e.key==='Escape')lt(false)})}
var sv='en';try{sv=localStorage.getItem('lang')||'en'}catch(x){}
if(sv!=='en'&&TR[sv])setLang(sv);
})();
