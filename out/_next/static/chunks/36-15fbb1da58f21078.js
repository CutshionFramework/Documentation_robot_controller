"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{825:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var s=a(7437),r=a(4508),n=a(7648),o=a(9376);function l(e){let{absolute:t,className:a="",activeClassName:l="",disabled:d,children:i,...c}=e,f=(0,o.usePathname)(),u=t?c.href.toString().split("/")[1]==f.split("/")[1]:f===c.href;return d?(0,s.jsx)("div",{className:(0,r.cn)(a,"cursor-not-allowed"),children:i}):(0,s.jsx)(n.default,{className:(0,r.cn)(a,u&&l),...c,children:i})}},2013:function(e,t,a){a.d(t,{default:function(){return j}});var s=a(7437),r=a(3247),n=a(3315),o=a(8736),l=a(2265),d=a(4508);let i=l.forwardRef((e,t)=>{let{className:a,type:r,...n}=e;return(0,s.jsx)("input",{type:r,className:(0,d.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n})});i.displayName="Input";var c=a(9027);let f=c.fC,u=c.xz,m=c.h_,p=c.x8,x=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.aV,{ref:t,className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r})});x.displayName=c.aV.displayName;let h=l.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(m,{children:[(0,s.jsx)(x,{}),(0,s.jsxs)(c.VY,{ref:t,className:(0,d.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...n,children:[r,(0,s.jsxs)(c.x8,{className:"absolute right-4 top-3.5 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)("div",{className:"rounded-sm text-xs border py-1 px-2 hover:bg-muted",children:"Esc"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});h.displayName=c.VY.displayName;let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...a})};g.displayName="DialogHeader",l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold leading-none tracking-tight",a),...r})}).displayName=c.Dx.displayName,l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(c.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",a),...r})}).displayName=c.dk.displayName;let b=[{title:"Getting Started",href:"getting-started",items:[{title:"Introduction",href:"/introduction"},{title:"Operation Process",href:"/operation-process"},{title:"Tabs",href:"/tabs"}]}].map(e=>{let{href:t,items:a}=e;return a.map(e=>({title:e.title,href:t+e.href}))}).flat();var N=a(9378),y=a(825);function j(){let[e,t]=(0,l.useState)(""),[a,d]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=e=>{e.ctrlKey&&"k"===e.key&&(e.preventDefault(),d(!0))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[]);let c=(0,l.useMemo)(()=>b.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())),[e]);return(0,s.jsx)("div",{children:(0,s.jsxs)(f,{open:a,onOpenChange:e=>{e||t(""),d(e)},children:[(0,s.jsx)(u,{asChild:!0,children:(0,s.jsxs)("div",{className:"relative flex-1 max-w-md cursor-pointer",children:[(0,s.jsx)(r.Z,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 dark:text-neutral-400"}),(0,s.jsx)(i,{className:"w-full rounded-md bg-muted border h-9 pl-10 pr-4 text-sm shadow-sm ",placeholder:"Search documentation...",type:"search"}),(0,s.jsxs)("div",{className:"sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-neutral-700 bg-zinc-200 p-1 rounded-sm",children:[(0,s.jsx)(n.Z,{className:"w-3 h-3"}),(0,s.jsx)("span",{children:"k"})]})]})}),(0,s.jsxs)(h,{className:"p-0 max-w-[650px] sm:top-[38%] top-[45%]",children:[(0,s.jsx)(g,{children:(0,s.jsx)("input",{value:e,onChange:e=>t(e.target.value),placeholder:"Type something to search...",autoFocus:!0,className:"h-14 px-4 bg-transparent border-b text-[15px] outline-none"})}),0==c.length&&e&&(0,s.jsxs)("p",{className:"text-muted-foreground mx-auto mt-2 text-sm",children:["No results found for"," ",(0,s.jsx)("span",{className:"text-primary",children:'"'.concat(e,'"')})]}),(0,s.jsx)(N.ScrollArea,{className:"max-h-[350px]",children:(0,s.jsx)("div",{className:"flex flex-col items-start overflow-y-auto sm:px-3 px-1 pb-4 gap-0.5",children:c.map(e=>(0,s.jsx)(p,{onChange:e=>console.log(e),asChild:!0,children:(0,s.jsxs)(y.default,{className:"dark:hover:bg-neutral-900 hover:bg-neutral-100 w-full p-2.5 px-3 rounded-sm text-[15px] flex items-center gap-2.5",href:"/docs/".concat(e.href),activeClassName:"dark:bg-neutral-900 bg-neutral-100",children:[(0,s.jsx)(o.Z,{className:"h-[1.1rem] w-[1.1rem]"})," ",e.title]})},e.href))})})]})]})})}},2489:function(e,t,a){a.d(t,{ModeToggle:function(){return b}});var s=a(7437),r=a(2265),n=a(5929),o=a(7226),l=a(5922),d=a(2869),i=a(7611),c=a(407),f=a(401),u=a(519),m=a(4508);let p=i.fC,x=i.xz;i.ZA,i.Uv,i.Tr,i.Ee,r.forwardRef((e,t)=>{let{className:a,inset:r,children:n,...o}=e;return(0,s.jsxs)(i.fF,{ref:t,className:(0,m.cn)("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",r&&"pl-8",a),...o,children:[n,(0,s.jsx)(c.Z,{className:"ml-auto h-4 w-4"})]})}).displayName=i.fF.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.tu,{ref:t,className:(0,m.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...r})}).displayName=i.tu.displayName;let h=r.forwardRef((e,t)=>{let{className:a,sideOffset:r=4,...n}=e;return(0,s.jsx)(i.Uv,{children:(0,s.jsx)(i.VY,{ref:t,sideOffset:r,className:(0,m.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...n})})});h.displayName=i.VY.displayName;let g=r.forwardRef((e,t)=>{let{className:a,inset:r,...n}=e;return(0,s.jsx)(i.ck,{ref:t,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r&&"pl-8",a),...n})});function b(){let{setTheme:e}=(0,l.F)();return(0,s.jsxs)(p,{children:[(0,s.jsx)(x,{asChild:!0,children:(0,s.jsxs)(d.z,{variant:"ghost",size:"icon",children:[(0,s.jsx)(n.Z,{className:"h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,s.jsx)(o.Z,{className:"absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,s.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}),(0,s.jsxs)(h,{align:"end",children:[(0,s.jsx)(g,{onClick:()=>e("light"),children:"Light"}),(0,s.jsx)(g,{onClick:()=>e("dark"),children:"Dark"}),(0,s.jsx)(g,{onClick:()=>e("system"),children:"System"})]})]})}g.displayName=i.ck.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,checked:n,...o}=e;return(0,s.jsxs)(i.oC,{ref:t,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),checked:n,...o,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.wU,{children:(0,s.jsx)(f.Z,{className:"h-4 w-4"})})}),r]})}).displayName=i.oC.displayName,r.forwardRef((e,t)=>{let{className:a,children:r,...n}=e;return(0,s.jsxs)(i.Rk,{ref:t,className:(0,m.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",a),...n,children:[(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(i.wU,{children:(0,s.jsx)(u.Z,{className:"h-2 w-2 fill-current"})})}),r]})}).displayName=i.Rk.displayName,r.forwardRef((e,t)=>{let{className:a,inset:r,...n}=e;return(0,s.jsx)(i.__,{ref:t,className:(0,m.cn)("px-2 py-1.5 text-sm font-semibold",r&&"pl-8",a),...n})}).displayName=i.__.displayName,r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(i.Z0,{ref:t,className:(0,m.cn)("-mx-1 my-1 h-px bg-muted",a),...r})}).displayName=i.Z0.displayName},2869:function(e,t,a){a.d(t,{z:function(){return i}});var s=a(7437),r=a(2265),n=a(7495),o=a(7712),l=a(4508);let d=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-9 w-9",xs:"h-7 rounded-md px-2"}},defaultVariants:{variant:"default",size:"default"}}),i=r.forwardRef((e,t)=>{let{className:a,variant:r,size:o,asChild:i=!1,...c}=e,f=i?n.g7:"button";return(0,s.jsx)(f,{className:(0,l.cn)(d({variant:r,size:o,className:a})),ref:t,...c})});i.displayName="Button"},9378:function(e,t,a){a.d(t,{ScrollArea:function(){return l}});var s=a(7437),r=a(2265),n=a(314),o=a(4508);let l=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,s.jsxs)(n.fC,{ref:t,className:(0,o.cn)("relative overflow-hidden",a),...l,children:[(0,s.jsx)(n.l_,{className:"h-full w-full rounded-[inherit]",children:r}),(0,s.jsx)(d,{}),(0,s.jsx)(n.Ns,{})]})});l.displayName=n.fC.displayName;let d=r.forwardRef((e,t)=>{let{className:a,orientation:r="vertical",...l}=e;return(0,s.jsx)(n.gb,{ref:t,orientation:r,className:(0,o.cn)("flex touch-none select-none transition-colors","vertical"===r&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===r&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",a),...l,children:(0,s.jsx)(n.q4,{className:"relative flex-1 rounded-full bg-border"})})});d.displayName=n.gb.displayName},9304:function(e,t,a){a.r(t),a.d(t,{Sheet:function(){return i},SheetClose:function(){return f},SheetContent:function(){return x},SheetDescription:function(){return N},SheetFooter:function(){return g},SheetHeader:function(){return h},SheetOverlay:function(){return m},SheetPortal:function(){return u},SheetTitle:function(){return b},SheetTrigger:function(){return c}});var s=a(7437),r=a(2265),n=a(9027),o=a(7712),l=a(2224),d=a(4508);let i=n.fC,c=n.xz,f=n.x8,u=n.h_,m=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.aV,{className:(0,d.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...r,ref:t})});m.displayName=n.aV.displayName;let p=(0,o.j)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),x=r.forwardRef((e,t)=>{let{side:a="right",className:r,children:o,...i}=e;return(0,s.jsxs)(u,{children:[(0,s.jsx)(m,{}),(0,s.jsxs)(n.VY,{ref:t,className:(0,d.cn)(p({side:a}),r),...i,children:[o,(0,s.jsxs)(n.x8,{className:"absolute right-4 top-7 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});x.displayName=n.VY.displayName;let h=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...a})};h.displayName="SheetHeader";let g=e=>{let{className:t,...a}=e;return(0,s.jsx)("div",{className:(0,d.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...a})};g.displayName="SheetFooter";let b=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.Dx,{ref:t,className:(0,d.cn)("text-lg font-semibold text-foreground",a),...r})});b.displayName=n.Dx.displayName;let N=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)(n.dk,{ref:t,className:(0,d.cn)("text-sm text-muted-foreground",a),...r})});N.displayName=n.dk.displayName},4508:function(e,t,a){a.d(t,{cn:function(){return n}});var s=a(1994),r=a(3335);function n(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.m6)((0,s.W)(t))}}}]);