import{R as e}from"./index-Bc2G9s8g.js";/* empty css               */import{m as p}from"./GlassPopover-Dg_qYBMk.js";const w={title:"Malix/Stepper",component:p,args:{steps:[{label:"Account",status:"completed"},{label:"Profile",status:"active"},{label:"Review",status:"pending"}]}},t={},s={args:{steps:[{label:"Account",status:"completed"},{label:"Profile",status:"completed"},{label:"Review",status:"completed"}]}},a={args:{steps:[{label:"Account",status:"pending"},{label:"Profile",status:"pending"},{label:"Review",status:"pending"}]}},n={args:{steps:[{label:"Details",status:"completed"},{label:"Address",status:"completed"},{label:"Payment",status:"active"},{label:"Confirm",status:"pending"}]}},l={render:()=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:32}},e.createElement(p,{steps:[{label:"Step 1",status:"completed"},{label:"Step 2",status:"completed"},{label:"Step 3",status:"completed"}]}),e.createElement(p,{steps:[{label:"Step 1",status:"completed"},{label:"Step 2",status:"active"},{label:"Step 3",status:"pending"}]}),e.createElement(p,{steps:[{label:"Step 1",status:"pending"},{label:"Step 2",status:"pending"},{label:"Step 3",status:"pending"}]}))};var r,o,c;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:"{}",...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var u,d,i;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Account',
      status: 'completed'
    }, {
      label: 'Profile',
      status: 'completed'
    }, {
      label: 'Review',
      status: 'completed'
    }]
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,b,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Account',
      status: 'pending'
    }, {
      label: 'Profile',
      status: 'pending'
    }, {
      label: 'Review',
      status: 'pending'
    }]
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,f,v;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    steps: [{
      label: 'Details',
      status: 'completed'
    }, {
      label: 'Address',
      status: 'completed'
    }, {
      label: 'Payment',
      status: 'active'
    }, {
      label: 'Confirm',
      status: 'pending'
    }]
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var A,P,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 32
  }}>
      <Stepper steps={[{
      label: 'Step 1',
      status: 'completed'
    }, {
      label: 'Step 2',
      status: 'completed'
    }, {
      label: 'Step 3',
      status: 'completed'
    }]} />
      <Stepper steps={[{
      label: 'Step 1',
      status: 'completed'
    }, {
      label: 'Step 2',
      status: 'active'
    }, {
      label: 'Step 3',
      status: 'pending'
    }]} />
      <Stepper steps={[{
      label: 'Step 1',
      status: 'pending'
    }, {
      label: 'Step 2',
      status: 'pending'
    }, {
      label: 'Step 3',
      status: 'pending'
    }]} />
    </div>
}`,...(x=(P=l.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const E=["Default","AllCompleted","AllPending","FourSteps","AllStatuses"];export{s as AllCompleted,a as AllPending,l as AllStatuses,t as Default,n as FourSteps,E as __namedExportsOrder,w as default};
