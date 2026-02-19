import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{V as o}from"./GlassPopover-C_jpDQQ9.js";const D={title:"Malix/ValidationAlert",component:o,args:{title:"Validation error",message:"Please correct the highlighted fields before submitting.",variant:"error"}},a={},r={args:{title:"Error",message:"Something went wrong. Please try again later.",variant:"error"}},t={args:{title:"Warning",message:"Your session will expire in 5 minutes.",variant:"warning"}},s={args:{title:"Information",message:"Your changes have been saved automatically.",variant:"info"}},n={args:{title:"Dismissible alert",message:"Click the close button to dismiss this alert.",variant:"warning",onClose:()=>{}}},i={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:480}},e.createElement(o,{variant:"error",title:"Error",message:"Something went wrong. Please try again later."}),e.createElement(o,{variant:"warning",title:"Warning",message:"Your session will expire in 5 minutes.",onClose:()=>{}}),e.createElement(o,{variant:"info",title:"Information",message:"Your changes have been saved automatically."}))};var l,m,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var g,d,u;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Error',
    message: 'Something went wrong. Please try again later.',
    variant: 'error'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,v,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Warning',
    message: 'Your session will expire in 5 minutes.',
    variant: 'warning'
  }
}`,...(h=(v=t.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,w,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Information',
    message: 'Your changes have been saved automatically.',
    variant: 'info'
  }
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var y,E,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible alert',
    message: 'Click the close button to dismiss this alert.',
    variant: 'warning',
    onClose: () => {}
  }
}`,...(b=(E=n.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var S,W,V;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 480
  }}>
      <ValidationAlert variant="error" title="Error" message="Something went wrong. Please try again later." />
      <ValidationAlert variant="warning" title="Warning" message="Your session will expire in 5 minutes." onClose={() => {}} />
      <ValidationAlert variant="info" title="Information" message="Your changes have been saved automatically." />
    </div>
}`,...(V=(W=i.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};const I=["Default","Error","Warning","Info","WithClose","AllVariants"];export{i as AllVariants,a as Default,r as Error,s as Info,t as Warning,n as WithClose,I as __namedExportsOrder,D as default};
