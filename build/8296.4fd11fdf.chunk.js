(self.webpackChunkzeina_project=self.webpackChunkzeina_project||[]).push([[8296],{1350:(_,e,t)=>{"use strict";t.d(e,{a:()=>f});var n=t(67294),a=t(92417),o=t(14293),r=t.n(o),d=t(86896),L=t(16550),E=t(75021);const c="strapi-notification-seat-limit",m="https://cloud.strapi.io/profile/billing",l="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:i}=(0,d.Z)(),{license:M,isError:u,isLoading:T}=(0,E.q)(),g=(0,a.lm)(),{pathname:O}=(0,L.TH)(),{enforcementUserCount:C,permittedSeats:I,licenseLimitStatus:s,isHostedOnStrapiCloud:P}=M;n.useEffect(()=>{if(u||T)return;const A=!r()(I)&&!window.sessionStorage.getItem(`${c}-${O}`)&&(s==="AT_LIMIT"||s==="OVER_LIMIT");let D;s==="OVER_LIMIT"?D="warning":s==="AT_LIMIT"&&(D="softWarning"),A&&g({type:D,message:i({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:s}),title:i({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:s,enforcementUserCount:C,permittedSeats:I}),link:{url:P?m:l,label:i({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:P})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${c}-${O}`,"true")}})},[g,M,O,i,T,I,s,C,P,u])}},75021:(_,e,t)=>{"use strict";t.d(e,{q:()=>r});var n=t(67294),a=t(92417),o=t(88767);function r({enabled:d}={enabled:!0}){const{get:L}=(0,a.kY)(),{data:E,isError:c,isLoading:m}=(0,o.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await L("/admin/license-limit-information");return i},{enabled:d}),l=n.useMemo(()=>E??{},[E]),f=n.useCallback(i=>(l?.features??[]).find(u=>u.name===i)?.options??{},[l?.features]);return{license:l,getFeature:f,isError:c,isLoading:m}}},66831:(_,e,t)=>{"use strict";t.r(e),t.d(e,{HomePageEE:()=>r});var n=t(67294),a=t(15494),o=t(1350);function r(){return(0,o.a)(),n.createElement(a.HomePageCE,null)}},14293:_=>{function e(t){return t==null}_.exports=e}}]);
