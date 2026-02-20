import{r as v,R as x}from"./index-Bc2G9s8g.js";/* empty css               */import{a as b}from"./GlassPopover-C2tPgYDT.js";function E({placeholder:o,disabled:e}){const[I,n]=v.useState("");return x.createElement(b,{value:I,onChange:n,onSend:()=>n(""),placeholder:o,disabled:e})}const k={title:"Malix/ChatInput",component:E},a={},r={args:{placeholder:"Ask anything..."}},t={args:{disabled:!0,placeholder:"Chat is unavailable"}},s={render:()=>{const[o,e]=v.useState("Hello, how can I help?");return x.createElement(b,{value:o,onChange:e,onSend:()=>e("")})}};var l,c,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ask anything...'
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var i,h,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: 'Chat is unavailable'
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var C,S,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Hello, how can I help?');
    return <ChatInput value={value} onChange={setValue} onSend={() => setValue('')} />;
  }
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const w=["Default","CustomPlaceholder","Disabled","WithPrefilledText"];export{r as CustomPlaceholder,a as Default,t as Disabled,s as WithPrefilledText,w as __namedExportsOrder,k as default};
