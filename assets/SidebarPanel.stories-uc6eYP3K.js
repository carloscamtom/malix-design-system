import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{k as s,f as l}from"./GlassPopover-Dg_qYBMk.js";function W(){return e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),e.createElement("polyline",{points:"9 22 9 12 15 12 15 22"}))}function M(){return e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"}))}function b(){return e.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("circle",{cx:"12",cy:"12",r:"3"}),e.createElement("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1.08 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.604.852.997 1.51 1.08H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.08Z"}))}function i(){return e.createElement("span",{style:{fontWeight:700,fontSize:18,color:"var(--malix-text-primary, #fff)"}},"Malix")}const c=e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2}},e.createElement(l,{icon:e.createElement(W,null),active:!0},"Dashboard"),e.createElement(l,{icon:e.createElement(M,null)},"Projects"),e.createElement(l,{icon:e.createElement(b,null)},"Settings")),m=e.createElement("span",{style:{fontSize:12,opacity:.5}},"v1.0.0"),j={title:"Malix/SidebarPanel",component:s,args:{logo:e.createElement(i,null),navigation:c,footer:m},decorators:[F=>e.createElement("div",{style:{height:480}},e.createElement(F,null))]},o={},a={args:{collapsed:!0,onToggleCollapse:()=>{}}},t={args:{onToggleCollapse:()=>{}}},r={args:{footer:void 0}},n={render:()=>e.createElement("div",{style:{display:"flex",gap:24,height:480}},e.createElement(s,{logo:e.createElement(i,null),navigation:c,footer:m,onToggleCollapse:()=>{}}),e.createElement(s,{logo:e.createElement(i,null),navigation:c,footer:m,collapsed:!0,onToggleCollapse:()=>{}}))};var p,g,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,f,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    onToggleCollapse: () => {}
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var E,v,k;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    onToggleCollapse: () => {}
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var x,S,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    footer: undefined
  }
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var C,T,L;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    height: 480
  }}>
      <SidebarPanel logo={<LogoMark />} navigation={sampleNavigation} footer={sampleFooter} onToggleCollapse={() => {}} />
      <SidebarPanel logo={<LogoMark />} navigation={sampleNavigation} footer={sampleFooter} collapsed onToggleCollapse={() => {}} />
    </div>
}`,...(L=(T=n.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const z=["Default","Collapsed","WithToggle","WithoutFooter","FullExample"];export{a as Collapsed,o as Default,n as FullExample,t as WithToggle,r as WithoutFooter,z as __namedExportsOrder,j as default};
