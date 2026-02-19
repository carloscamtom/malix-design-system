import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{i as n,h as s}from"./GlassPopover-C_jpDQQ9.js";import{H as M}from"./house-BUfkXY0v.js";import{F as P}from"./folder-DmFmzjTz.js";import{S as W}from"./settings-CNv3kTv6.js";import"./createLucideIcon-BUYvj0_X.js";function i(){return e.createElement("span",{style:{fontWeight:700,fontSize:18,color:"var(--malix-text-primary, #fff)"}},"Malix")}const c=e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:2}},e.createElement(s,{icon:e.createElement(M,{size:20}),active:!0},"Dashboard"),e.createElement(s,{icon:e.createElement(P,{size:20})},"Projects"),e.createElement(s,{icon:e.createElement(W,{size:20})},"Settings")),m=e.createElement("span",{style:{fontSize:12,opacity:.5}},"v1.0.0"),j={title:"Malix/SidebarPanel",component:n,args:{logo:e.createElement(i,null),navigation:c,footer:m},decorators:[z=>e.createElement("div",{style:{height:480}},e.createElement(z,null))]},o={},a={args:{collapsed:!0,onToggleCollapse:()=>{}}},r={args:{onToggleCollapse:()=>{}}},t={args:{footer:void 0}},l={render:()=>e.createElement("div",{style:{display:"flex",gap:24,height:480}},e.createElement(n,{logo:e.createElement(i,null),navigation:c,footer:m,onToggleCollapse:()=>{}}),e.createElement(n,{logo:e.createElement(i,null),navigation:c,footer:m,collapsed:!0,onToggleCollapse:()=>{}}))};var p,g,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,f,E;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    collapsed: true,
    onToggleCollapse: () => {}
  }
}`,...(E=(f=a.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var v,S,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    onToggleCollapse: () => {}
  }
}`,...(h=(S=r.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var x,y,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    footer: undefined
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var T,F,b;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    height: 480
  }}>
      <SidebarPanel logo={<LogoMark />} navigation={sampleNavigation} footer={sampleFooter} onToggleCollapse={() => {}} />
      <SidebarPanel logo={<LogoMark />} navigation={sampleNavigation} footer={sampleFooter} collapsed onToggleCollapse={() => {}} />
    </div>
}`,...(b=(F=l.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};const I=["Default","Collapsed","WithToggle","WithoutFooter","FullExample"];export{a as Collapsed,o as Default,l as FullExample,r as WithToggle,t as WithoutFooter,I as __namedExportsOrder,j as default};
