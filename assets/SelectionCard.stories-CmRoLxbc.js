import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{j as c}from"./GlassPopover-Dg_qYBMk.js";function W(){return e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"}),e.createElement("path",{d:"M14 2v6h6"}),e.createElement("path",{d:"M16 13H8"}),e.createElement("path",{d:"M16 17H8"}),e.createElement("path",{d:"M10 9H8"}))}const O={title:"Malix/SelectionCard",component:c,args:{title:"Option A",description:"A brief description of this selection option.",icon:e.createElement(W,null)}},t={},r={args:{title:"Selected Option",description:"This card is in its active/selected state.",active:!0}},o={args:{title:"Simple Option",description:void 0}},i={args:{title:"Text Only",description:"A selection card without an icon.",icon:void 0}},n={args:{title:"Clickable Card",description:"Click this card to select it.",onClick:()=>{}}},a={render:()=>e.createElement("div",{style:{display:"flex",gap:16,flexWrap:"wrap"}},e.createElement(c,{icon:e.createElement(W,null),title:"Document",description:"Upload a document for processing.",onClick:()=>{}}),e.createElement(c,{icon:e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),e.createElement("circle",{cx:"9",cy:"9",r:"2"}),e.createElement("path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"})),title:"Image",description:"Upload an image for analysis.",active:!0,onClick:()=>{}}),e.createElement(c,{icon:e.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),e.createElement("polyline",{points:"17 8 12 3 7 8"}),e.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"})),title:"Upload",description:"Drag and drop or browse files.",onClick:()=>{}}))};var s,l,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Selected Option',
    description: 'This card is in its active/selected state.',
    active: true
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,g,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Simple Option',
    description: undefined
  }
}`,...(k=(g=o.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var v,C,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: 'Text Only',
    description: 'A selection card without an icon.',
    icon: undefined
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var x,E,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Clickable Card',
    description: 'Click this card to select it.',
    onClick: () => {}
  }
}`,...(y=(E=n.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var w,S,L;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <SelectionCard icon={<DocumentIcon />} title="Document" description="Upload a document for processing." onClick={() => {}} />
      <SelectionCard icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>} title="Image" description="Upload an image for analysis." active onClick={() => {}} />
      <SelectionCard icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>} title="Upload" description="Drag and drop or browse files." onClick={() => {}} />
    </div>
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const b=["Default","Active","WithoutDescription","WithoutIcon","Clickable","AllStates"];export{r as Active,a as AllStates,n as Clickable,t as Default,o as WithoutDescription,i as WithoutIcon,b as __namedExportsOrder,O as default};
