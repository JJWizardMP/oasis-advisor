(this.$WP=this.$WP||[]).push(["3btuy0",(r,n)=>{var e,u,t,c,l=(r,n=0,c=0)=>{var l=e(null),i=e(null),s=e(null),o=e(null),b=e("unknown"),v=n=>{var e,u=s.current,t=n.reduce((r,n)=>("unknown"===b.current?e=void 0:n.boundingClientRect.y<b.current?e="DOWN":n.boundingClientRect.y>b.current&&(e="UP"),b.current=n.boundingClientRect.y,r||n.isIntersecting),!1),c=null===u||!u&&t||u&&!t;r&&c&&r(t,e),s.current=t},a=e(v);u(()=>{a.current=v});var f=t(r=>{a.current(r)},[]),d=!!r;return u(()=>(d&&"undefined"!=typeof IntersectionObserver&&(o.current=new IntersectionObserver(f,{rootMargin:"number"==typeof n?`${n}px`:n,threshold:c})),()=>{o.current&&o.current.disconnect(),i.current=null,b.current="unknown"}),[d,f,n,c]),u(()=>{if(null!==o.current&&l.current&&(null===i.current||l.current!==i.current)){var r=o.current;r.observe(l.current),i.current&&(r.unobserve(i.current),b.current="unknown"),i.current=l.current}}),l},i=(r,n,u)=>{var t=e(!1);return c(t.current?null:n=>{!t.current&&n&&(r&&r(),t.current=!0)},n,u)};return[()=>{r({useOnVisible:i,useVisibleEffect:c=l})},[r=>(e=r.useRef,u=r.useEffect,t=r.useCallback)]]},["o4yt4q"]]);
