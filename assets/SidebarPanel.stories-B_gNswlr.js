import{R as e,r as m}from"./index-Bc2G9s8g.js";/* empty css               */import{o as d,e as o,A as V}from"./GlassPopover-C2tPgYDT.js";import{L as Z}from"./layout-dashboard-DYnp7BhA.js";import{F as G}from"./folder-DmFmzjTz.js";import{S as R,a as j}from"./shield-check-cuagztGv.js";import{S as _}from"./settings-CNv3kTv6.js";import"./createLucideIcon-BUYvj0_X.js";const J=""+new URL("camtom-tim-logo-DYf6vtJs.svg",import.meta.url).href,O="data:image/svg+xml,%3csvg%20width='43'%20height='47'%20viewBox='0%200%2043%2047'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M33.1493%208.45303L41.9678%2014.9779V30.0429L33.1493%2024.8831V8.45303Z'%20fill='%23004A7C'%20stroke='%23FBFBFB'%20stroke-miterlimit='10'/%3e%3cpath%20d='M10.2635%2021.5434V37.9004L1.0232%2031.3754V16.5705L10.2635%2021.5434Z'%20fill='%23004A7C'%20stroke='%23FBFBFB'%20stroke-miterlimit='10'/%3e%3cpath%20d='M14.6767%2045.6767L41.9678%2030.0428L33.1493%2024.883L10.2634%2037.9004L14.6767%2045.6767Z'%20fill='%23004A7C'%20stroke='%23FBFBFB'%20stroke-miterlimit='10'/%3e%3cpath%20d='M33.1493%208.45292L28.3223%200.676655L1.0232%2016.5705L10.2635%2021.5434L33.1493%208.45292Z'%20fill='%23004A7C'%20stroke='%23FBFBFB'%20stroke-miterlimit='10'/%3e%3c/svg%3e";function u(){return e.createElement("img",{src:J,alt:"Camtom",style:{height:28}})}function v({showFull:t=!1}){return t?e.createElement("img",{src:J,alt:"Camtom",style:{height:24}}):e.createElement("img",{src:O,alt:"Camtom",style:{height:28,width:24}})}const f=e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2}},e.createElement(o,{icon:e.createElement(Z,{size:20}),active:!0},"Dashboard"),e.createElement(o,{icon:e.createElement(G,{size:20})},"Projects"),e.createElement(o,{icon:e.createElement(R,{size:20})},"Classify"),e.createElement(o,{icon:e.createElement(j,{size:20})},"Compliance"),e.createElement(o,{icon:e.createElement(_,{size:20})},"Settings")),E=e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2,alignItems:"center"}},e.createElement(o,{icon:e.createElement(Z,{size:20}),active:!0},""),e.createElement(o,{icon:e.createElement(G,{size:20})},""),e.createElement(o,{icon:e.createElement(R,{size:20})},""),e.createElement(o,{icon:e.createElement(j,{size:20})},""),e.createElement(o,{icon:e.createElement(_,{size:20})},""));function h(){return e.createElement("div",{style:{display:"flex",alignItems:"center",gap:10}},e.createElement(V,{initials:"CG",size:32}),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2,minWidth:0}},e.createElement("span",{style:{fontSize:13,fontWeight:500,color:"var(--malix-foreground)"}},"Carlos Garcia"),e.createElement("span",{style:{fontSize:11,color:"var(--malix-foreground-secondary)"}},"Admin")))}function C(){return e.createElement("div",{style:{display:"flex",justifyContent:"center"}},e.createElement(V,{initials:"CG",size:32}))}const oe={title:"Malix/SidebarPanel",component:d,args:{logo:e.createElement(u,null),navigation:f,footer:e.createElement(h,null)},decorators:[t=>e.createElement("div",{style:{height:540}},e.createElement(t,null))]},r={},s={args:{collapsed:!0,logo:e.createElement(v,null),navigation:E,footer:e.createElement(C,null),onToggleCollapse:()=>{}}},n={args:{onToggleCollapse:()=>{}}},i={args:{footer:void 0}},l={render:()=>{const[t,p]=m.useState(!0),[g,a]=m.useState(!1);return e.createElement("div",{style:{display:"flex",gap:24,height:540}},e.createElement(d,{logo:e.createElement(u,null),navigation:f,footer:e.createElement(h,null),onToggleCollapse:()=>{}}),e.createElement("div",{onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{height:"100%"}},e.createElement(d,{logo:e.createElement(v,{showFull:g}),navigation:E,footer:e.createElement(C,null),collapsed:!0,onToggleCollapse:()=>p(!t)})))}},c={render:()=>{const[t,p]=m.useState(!1),[g,a]=m.useState(!1);return e.createElement("div",{style:{height:540},onMouseEnter:()=>t&&a(!0),onMouseLeave:()=>a(!1)},e.createElement(d,{logo:t?e.createElement(v,{showFull:g}):e.createElement(u,null),navigation:t?E:f,footer:t?e.createElement(C,null):e.createElement(h,null),collapsed:t,onToggleCollapse:()=>{p(!t),a(!1)}}))}};var y,F,S;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(S=(F=r.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var x,L,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    logo: <Isotype />,
    navigation: collapsedNavigation,
    footer: <CollapsedUserFooter />,
    onToggleCollapse: () => {}
  }
}`,...(w=(L=s.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};var z,B,M;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    onToggleCollapse: () => {}
  }
}`,...(M=(B=n.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var T,H,I;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    footer: undefined
  }
}`,...(I=(H=i.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var k,b,D,U,A;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(true);
    const [hovered, setHovered] = useState(false);
    return <div style={{
      display: 'flex',
      gap: 24,
      height: 540
    }}>
        {/* Expanded */}
        <SidebarPanel logo={<FullLogo />} navigation={sampleNavigation} footer={<UserFooter />} onToggleCollapse={() => {}} />

        {/* Collapsed with hover interaction */}
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{
        height: '100%'
      }}>
          <SidebarPanel logo={<Isotype showFull={hovered} />} navigation={collapsedNavigation} footer={<CollapsedUserFooter />} collapsed onToggleCollapse={() => setCollapsed(!collapsed)} />
        </div>
      </div>;
  }
}`,...(D=(b=l.parameters)==null?void 0:b.docs)==null?void 0:D.source},description:{story:`Interactive example: collapsed sidebar expands the logo on hover,
switching the isotype for the full Camtom wordmark.`,...(A=(U=l.parameters)==null?void 0:U.docs)==null?void 0:A.description}}};var N,P,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState(false);
    return <div style={{
      height: 540
    }} onMouseEnter={() => collapsed && setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <SidebarPanel logo={collapsed ? <Isotype showFull={hovered} /> : <FullLogo />} navigation={collapsed ? collapsedNavigation : sampleNavigation} footer={collapsed ? <CollapsedUserFooter /> : <UserFooter />} collapsed={collapsed} onToggleCollapse={() => {
        setCollapsed(!collapsed);
        setHovered(false);
      }} />
      </div>;
  }
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const ae=["Default","Collapsed","WithToggle","WithoutFooter","HoverInteraction","FullExample"];export{s as Collapsed,r as Default,c as FullExample,l as HoverInteraction,n as WithToggle,i as WithoutFooter,ae as __namedExportsOrder,oe as default};
