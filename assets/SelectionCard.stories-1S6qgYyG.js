import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{o as s}from"./GlassPopover-ABZWYFm7.js";import{F as O}from"./file-text-Cn5ml8ct.js";import{c as U}from"./createLucideIcon-BUYvj0_X.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],w=U("image",b);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],I=U("upload",z),L={title:"Malix/SelectionCard",component:s,args:{title:"Option A",description:"A brief description of this selection option.",icon:e.createElement(O,{size:24})}},t={},i={args:{title:"Selected Option",description:"This card is in its active/selected state.",active:!0}},r={args:{title:"Simple Option",description:void 0}},o={args:{title:"Text Only",description:"A selection card without an icon.",icon:void 0}},a={args:{title:"Clickable Card",description:"Click this card to select it.",onClick:()=>{}}},c={render:()=>e.createElement("div",{style:{display:"flex",gap:16,flexWrap:"wrap"}},e.createElement(s,{icon:e.createElement(O,{size:24}),title:"Document",description:"Upload a document for processing.",onClick:()=>{}}),e.createElement(s,{icon:e.createElement(w,{size:24}),title:"Image",description:"Upload an image for analysis.",active:!0,onClick:()=>{}}),e.createElement(s,{icon:e.createElement(I,{size:24}),title:"Upload",description:"Drag and drop or browse files.",onClick:()=>{}}))};var n,l,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Selected Option',
    description: 'This card is in its active/selected state.',
    active: true
  }
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,f,C;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Simple Option',
    description: undefined
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var h,k,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Text Only',
    description: 'A selection card without an icon.',
    icon: undefined
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var S,v,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: 'Clickable Card',
    description: 'Click this card to select it.',
    onClick: () => {}
  }
}`,...(x=(v=a.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var E,A,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <SelectionCard icon={<FileText size={24} />} title="Document" description="Upload a document for processing." onClick={() => {}} />
      <SelectionCard icon={<Image size={24} />} title="Image" description="Upload an image for analysis." active onClick={() => {}} />
      <SelectionCard icon={<Upload size={24} />} title="Upload" description="Drag and drop or browse files." onClick={() => {}} />
    </div>
}`,...(D=(A=c.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const N=["Default","Active","WithoutDescription","WithoutIcon","Clickable","AllStates"];export{i as Active,c as AllStates,a as Clickable,t as Default,r as WithoutDescription,o as WithoutIcon,N as __namedExportsOrder,L as default};
