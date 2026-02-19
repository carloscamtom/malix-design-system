import{r as d,R as T}from"./index-Bc2G9s8g.js";/* empty css               */import{n as x}from"./GlassPopover-Dg_qYBMk.js";const S=[{label:"Overview",value:"overview"},{label:"Activity",value:"activity"},{label:"Settings",value:"settings"}];function f({items:t=S}){var r;const[p,g]=d.useState(((r=t[0])==null?void 0:r.value)??"");return T.createElement(x,{items:t,value:p,onChange:g})}const E={title:"Malix/TabBar",component:f},e={},a={args:{items:[{label:"Inbox",value:"inbox"},{label:"Sent",value:"sent"}]}},s={args:{items:[{label:"Home",value:"home"},{label:"Projects",value:"projects"},{label:"Tasks",value:"tasks"},{label:"Reports",value:"reports"},{label:"Settings",value:"settings"}]}};var l,n,o;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,u,i;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Inbox',
      value: 'inbox'
    }, {
      label: 'Sent',
      value: 'sent'
    }]
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,b,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Home',
      value: 'home'
    }, {
      label: 'Projects',
      value: 'projects'
    }, {
      label: 'Tasks',
      value: 'tasks'
    }, {
      label: 'Reports',
      value: 'reports'
    }, {
      label: 'Settings',
      value: 'settings'
    }]
  }
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const R=["Default","TwoTabs","FiveTabs"];export{e as Default,s as FiveTabs,a as TwoTabs,R as __namedExportsOrder,E as default};
