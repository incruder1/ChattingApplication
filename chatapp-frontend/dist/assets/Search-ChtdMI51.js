import{d as h,aT as f,u as x,r as o,j as s,S,aU as j,Y as I}from"./index-D5nzqchR.js";import{u as g}from"./index-BzEcBDfL.js";import{b as F}from"./Menu-B9BPi3QO.js";import{U as T}from"./UserItem-DXt-HfdY.js";import{D as U,a as v}from"./DialogTitle-Br3zGrkv.js";import{T as q}from"./TextField-BCeHNm3V.js";import{I as y}from"./InputAdornment-BWmaRWn_.js";import{S as A}from"./AppLayout-BBFOwibl.js";import{c as D}from"./Menu-B5zeCvBD.js";import"./Modal-B4RS4siC.js";import"./Typography-1nQW5jSD.js";import"./ListItem-CB97lBsq.js";import"./isMuiElement-DRgL1YLt.js";import"./Avatar-DtbMtKou.js";import"./IconButton-D_lXahTx.js";import"./Delete-BB0zrGuG.js";import"./ExitToApp-Rk2cIgt6.js";import"./AvatarCard-AXJhVlul.js";import"./Toolbar-BFbQ0eqz.js";import"./Notifications-DDcM0N0H.js";import"./Tooltip-BQ13i9eB.js";const W=()=>{const{isSearch:a}=h(e=>e.misc),[i]=f(),[n,m]=F(j),c=x(),t=g(""),[d,u]=o.useState([]),l=async e=>{await n("Sending friend request...",{userId:e})},p=()=>c(I(!1));return o.useEffect(()=>{const e=setTimeout(()=>{i(t.value).then(({data:r})=>u(r.users)).catch(r=>console.log(r))},1e3);return()=>{clearTimeout(e)}},[t.value]),s.jsx(U,{open:a,onClose:p,children:s.jsxs(S,{p:"2rem",direction:"column",width:"25rem",children:[s.jsx(v,{textAlign:"center",children:"Find People"}),s.jsx(q,{label:"",value:t.value,onChange:t.changeHandler,variant:"outlined",size:"small",InputProps:{startAdornment:s.jsx(y,{position:"start",children:s.jsx(A,{})})}}),s.jsx(D,{children:d.map(e=>s.jsx(T,{user:e,handler:l,handlerIsLoading:m},e._id))})]})})};export{W as default};
