import {useEffect,useRef,useState} from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {experience} from './data.js'
gsap.registerPlugin(ScrollTrigger)
function Photo({src,alt,className='',priority=false}){return <img src={src} alt={alt} className={className} loading={priority?'eager':'lazy'} fetchPriority={priority?'high':'auto'}/>}
export default function App(){
 const [entered,setEntered]=useState(false);const root=useRef(null)
 useEffect(()=>{document.body.style.overflow=entered?'':'hidden';if(!entered)scrollTo(0,0);return()=>{document.body.style.overflow=''}},[entered])
 useEffect(()=>{if(!entered||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ctx=gsap.context(()=>{gsap.utils.toArray('.reveal').forEach(el=>gsap.fromTo(el,{y:36,opacity:0},{y:0,opacity:1,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 86%',once:true}}));gsap.utils.toArray('.drift').forEach(el=>gsap.to(el,{yPercent:6,ease:'none',scrollTrigger:{trigger:el,scrub:true}}))},root);return()=>ctx.revert()},[entered])
 const s=experience.scenes,p=experience.photos
 return <main ref={root} className="site-shell">
  {!entered&&<section className="entry"><div className="entry-glow"/><p>COCKTAIL NIGHT · UDAIPUR</p><h1>MIDNIGHT<br/>COURTYARD</h1><button onClick={()=>setEntered(true)}>Enter after dark</button><small>{experience.couple.date}</small></section>}
  <div className={`story ${entered?'is-live':''}`} aria-hidden={!entered}>
   <section className="scene hero"><Photo src={p[0]} alt="Couple in evening celebration" className="cover drift" priority/><div className="scrim"/><div className="hero-copy reveal"><p>{s[0].label}</p><h2>{s[0].title}</h2><span>{s[0].note}</span></div></section>
   <section className="scene split dark"><div className="copy reveal"><p>{s[1].label}</p><h2>{s[1].title}</h2><span>{s[1].note}</span></div><Photo src={p[1]} alt="Blue hour celebration setting" className="portrait"/></section>
   <section className="scene arch"><Photo src={p[2]} alt="Editorial celebration portrait" className="arch-photo"/><div className="arch-copy reveal"><p>{s[2].label}</p><h2>{s[2].title}</h2><span>{s[2].note}</span></div></section>
   <section className="scene tiles"><div className="tile wide"><Photo src={p[3]} alt="Celebration tables"/></div><div className="tile"><Photo src={p[4]} alt="Wedding details"/></div><div className="tile note reveal"><p>{s[3].label}</p><h2>{s[3].title}</h2><span>{s[3].note}</span></div></section>
   <section className="scene toast"><div className="toast-copy reveal"><p>{s[4].label}</p><h2>{s[4].title}</h2><span>{s[4].note}</span></div><Photo src={p[5]} alt="Guests celebrating" className="toast-photo"/></section>
   <section className="scene passage"><div className="lanterns"/><div className="center reveal"><p>{s[5].label}</p><h2>{s[5].title}</h2><span>{s[5].note}</span></div></section>
   <section className="scene contacts">{[p[0],p[6],p[2],p[4],p[1],p[5]].map((src,i)=><Photo key={i} src={src} alt={`Guest frame ${i+1}`} className="contact"/>)}<div className="contact-copy reveal"><p>{s[6].label}</p><h2>{s[6].title}</h2></div></section>
   <section className="scene courtyard"><Photo src={p[6]} alt="Courtyard celebration" className="cover"/><div className="round reveal"><p>{s[7].label}</p><h2>{s[7].title}</h2><span>{s[7].note}</span></div></section>
   <section className="scene music"><div className="bars"/><div className="music-copy reveal"><p>{s[8].label}</p><h2>{s[8].title}</h2><span>{s[8].note}</span></div></section>
   <section className="scene midnight"><div className="clock">00:17</div><div className="copy reveal"><p>{s[9].label}</p><h2>{s[9].title}</h2><span>{s[9].note}</span></div></section>
   <section className="scene last"><Photo src={p[7]} alt="Last celebration frame" className="cover"/><div className="scrim"/><div className="hero-copy reveal"><p>{s[10].label}</p><h2>{s[10].title}</h2><span>{s[10].note}</span></div></section>
   <section className="scene finale"><p>{s[11].label}</p><h2>{s[11].title}</h2><span>{s[11].note}</span><div className="meta"><b>{experience.couple.first} + {experience.couple.second}</b><b>{experience.couple.location}</b></div></section>
  </div>
 </main>
}
