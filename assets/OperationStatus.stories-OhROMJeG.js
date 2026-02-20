import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{O as a}from"./GlassPopover-C2tPgYDT.js";const L={title:"Malix/OperationStatus",component:a,args:{status:"active"}},s={args:{status:"active"}},t={args:{status:"completed"}},r={args:{status:"failed"}},o={args:{status:"pending"}},n={args:{status:"active",label:"Processing..."}},c={render:()=>e.createElement("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"}},e.createElement(a,{status:"active"}),e.createElement(a,{status:"completed"}),e.createElement(a,{status:"failed"}),e.createElement(a,{status:"pending"}))};var p,i,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'active'
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var m,d,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'completed'
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,S,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'failed'
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,O,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'pending'
  }
}`,...(x=(O=o.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var E,b,y;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: 'active',
    label: 'Processing...'
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,C,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <OperationStatus status="active" />
      <OperationStatus status="completed" />
      <OperationStatus status="failed" />
      <OperationStatus status="pending" />
    </div>
}`,...(P=(C=c.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const R=["Active","Completed","Failed","Pending","CustomLabel","AllStatuses"];export{s as Active,c as AllStatuses,t as Completed,n as CustomLabel,r as Failed,o as Pending,R as __namedExportsOrder,L as default};
