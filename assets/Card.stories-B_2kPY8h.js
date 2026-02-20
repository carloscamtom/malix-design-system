import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{C as o}from"./GlassPopover-n6GzK0wK.js";const E={title:"Malix/Card",component:o,args:{title:"Card Title",description:"Card description text with more details about this content.",level:1}},r={args:{title:"Elevation Level 1",description:"Subtle shadow for cards resting on the background surface. Default for most content cards.",level:1}},t={args:{title:"Elevation Level 2",description:"Medium shadow for elevated content panels, popovers, and interactive surfaces.",level:2}},a={args:{title:"Elevation Level 3",description:"Strong shadow for modals, flyouts, and glassmorphism overlays. Highest visual prominence.",level:3}},s={render:()=>e.createElement("div",{style:{display:"flex",gap:24,flexWrap:"wrap"}},e.createElement(o,{level:1,title:"Level 1",description:"Subtle shadow for content cards."}),e.createElement(o,{level:2,title:"Level 2",description:"Medium shadow for elevated panels."}),e.createElement(o,{level:3,title:"Level 3",description:"Strong shadow for modals and overlays."}))};var l,n,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Elevation Level 1',
    description: 'Subtle shadow for cards resting on the background surface. Default for most content cards.',
    level: 1
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var d,c,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Elevation Level 2',
    description: 'Medium shadow for elevated content panels, popovers, and interactive surfaces.',
    level: 2
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var v,m,u;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Elevation Level 3',
    description: 'Strong shadow for modals, flyouts, and glassmorphism overlays. Highest visual prominence.',
    level: 3
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <Card level={1} title="Level 1" description="Subtle shadow for content cards." />
      <Card level={2} title="Level 2" description="Medium shadow for elevated panels." />
      <Card level={3} title="Level 3" description="Strong shadow for modals and overlays." />
    </div>
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const y=["Level1","Level2","Level3","AllLevels"];export{s as AllLevels,r as Level1,t as Level2,a as Level3,y as __namedExportsOrder,E as default};
