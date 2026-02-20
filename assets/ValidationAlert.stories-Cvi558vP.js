import{R as a}from"./index-Bc2G9s8g.js";/* empty css               */import{V as i}from"./GlassPopover-n6GzK0wK.js";const D={title:"Malix/ValidationAlert",component:i,args:{title:"Error de validacion",message:'El campo "nombre" es obligatorio y no puede estar vacio.',variant:"error"}},e={},r={args:{title:"Error de validacion",message:'El campo "nombre" es obligatorio y no puede estar vacio.',variant:"error"}},o={args:{title:"Advertencia",message:"Tu sesion expirara en 5 minutos. Guarda tus cambios.",variant:"warning"}},s={args:{title:"Informacion",message:"Los cambios se han guardado automaticamente.",variant:"info"}},t={args:{title:"Alerta descartable",message:"Haz clic en el boton de cerrar para descartar esta alerta.",variant:"warning",onClose:()=>{}}},n={render:()=>a.createElement("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:480}},a.createElement(i,{variant:"error",title:"Error de validacion",message:"El campo 'nombre' es obligatorio y no puede estar vacio."}),a.createElement(i,{variant:"warning",title:"Advertencia",message:"Tu sesion expirara en 5 minutos. Guarda tus cambios.",onClose:()=>{}}),a.createElement(i,{variant:"info",title:"Informacion",message:"Los cambios se han guardado automaticamente."}))};var c,m,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Error de validacion',
    message: 'El campo "nombre" es obligatorio y no puede estar vacio.',
    variant: 'error'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Advertencia',
    message: 'Tu sesion expirara en 5 minutos. Guarda tus cambios.',
    variant: 'warning'
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,E,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Informacion',
    message: 'Los cambios se han guardado automaticamente.',
    variant: 'info'
  }
}`,...(x=(E=s.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var A,y,h;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: 'Alerta descartable',
    message: 'Haz clic en el boton de cerrar para descartar esta alerta.',
    variant: 'warning',
    onClose: () => {}
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var V,w,C;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 480
  }}>
      <ValidationAlert variant="error" title="Error de validacion" message="El campo 'nombre' es obligatorio y no puede estar vacio." />
      <ValidationAlert variant="warning" title="Advertencia" message="Tu sesion expirara en 5 minutos. Guarda tus cambios." onClose={() => {}} />
      <ValidationAlert variant="info" title="Informacion" message="Los cambios se han guardado automaticamente." />
    </div>
}`,...(C=(w=n.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const G=["Default","Error","Warning","Info","WithClose","AllVariants"];export{n as AllVariants,e as Default,r as Error,s as Info,o as Warning,t as WithClose,G as __namedExportsOrder,D as default};
