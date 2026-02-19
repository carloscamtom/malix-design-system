import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{O as a}from"./GlassPopover-Dg_qYBMk.js";const R={title:"Malix/OperationStatus",component:a,args:{status:"active"}},s={args:{status:"active"}},t={args:{status:"completed"}},r={args:{status:"failed"}},o={args:{status:"pending"}},c={args:{status:"active",label:"Processing..."}},n={render:()=>e.createElement("div",{style:{display:"flex",gap:16,flexWrap:"wrap"}},e.createElement(a,{status:"active"}),e.createElement(a,{status:"completed"}),e.createElement(a,{status:"failed"}),e.createElement(a,{status:"pending"}))};var p,i,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: 'active'
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,m,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: 'completed'
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,S,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    status: 'failed'
  }
}`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var f,O,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'pending'
  }
}`,...(x=(O=o.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var E,b,y;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: 'active',
    label: 'Processing...'
  }
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,C,P;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      <OperationStatus status="active" />
      <OperationStatus status="completed" />
      <OperationStatus status="failed" />
      <OperationStatus status="pending" />
    </div>
}`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const W=["Active","Completed","Failed","Pending","CustomLabel","AllStatuses"];export{s as Active,n as AllStatuses,t as Completed,c as CustomLabel,r as Failed,o as Pending,W as __namedExportsOrder,R as default};
