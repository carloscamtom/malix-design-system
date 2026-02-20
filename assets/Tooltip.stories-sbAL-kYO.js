import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{T as t,c as o}from"./GlassPopover-n6GzK0wK.js";const j={title:"Malix/Tooltip",component:t,args:{content:"Only outline icons are allowed in Malix.",placement:"top"},render:R=>e.createElement("div",{style:{padding:80,display:"flex",justifyContent:"center"}},e.createElement(t,{...R},e.createElement(o,{hierarchy:"secondary"},"Hover or focus me")))},r={args:{placement:"top"}},a={args:{placement:"bottom"}},n={args:{placement:"left"}},c={args:{placement:"right"}},s={render:()=>e.createElement("div",{style:{padding:100,display:"flex",gap:32,flexWrap:"wrap",justifyContent:"center"}},e.createElement(t,{content:"Tooltip on top",placement:"top"},e.createElement(o,{hierarchy:"secondary"},"Top")),e.createElement(t,{content:"Tooltip on bottom",placement:"bottom"},e.createElement(o,{hierarchy:"secondary"},"Bottom")),e.createElement(t,{content:"Tooltip on left",placement:"left"},e.createElement(o,{hierarchy:"secondary"},"Left")),e.createElement(t,{content:"Tooltip on right",placement:"right"},e.createElement(o,{hierarchy:"secondary"},"Right")))};var p,l,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placement: 'top'
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var i,d,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    placement: 'bottom'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,h,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    placement: 'left'
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,f,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placement: 'right'
  }
}`,...(B=(f=c.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var E,x,b;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
    justifyContent: 'center'
  }}>
      <Tooltip content="Tooltip on top" placement="top">
        <Button hierarchy="secondary">Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on bottom" placement="bottom">
        <Button hierarchy="secondary">Bottom</Button>
      </Tooltip>
      <Tooltip content="Tooltip on left" placement="left">
        <Button hierarchy="secondary">Left</Button>
      </Tooltip>
      <Tooltip content="Tooltip on right" placement="right">
        <Button hierarchy="secondary">Right</Button>
      </Tooltip>
    </div>
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const w=["Top","Bottom","Left","Right","AllPlacements"];export{s as AllPlacements,a as Bottom,n as Left,c as Right,r as Top,w as __namedExportsOrder,j as default};
