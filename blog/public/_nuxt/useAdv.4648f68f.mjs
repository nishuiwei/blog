import{a2 as c,a3 as f,a4 as r}from"./entry.57cc9eee.mjs";function p(...t){const u=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(u);const[e,n]=t;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(n!==void 0&&typeof n!="function")throw new Error("[nuxt] [useState] init must be a function: "+n);const o="$s"+e,a=c(),s=f(a.payload.state,o);if(s.value===void 0&&n){const i=n();if(r(i))return a.payload.state[o]=i,i;s.value=i}return s}const v=()=>{const t=()=>p("Advicon","$wXEi4qCP6E");return{useAdvicon:t,setAdvicon:(e,n)=>{const o=t();o.value=e}}};export{p as a,v as u};