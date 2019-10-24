(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{45:function(e,t,a){e.exports=a(89)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a.n(c),o=(a(50),a(4)),s=a(5),l=a(7),m=a(6),u=a(8),h=(a(51),a(41)),p=a(16),f=(a(52),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.location,e.temperature),a=(e.isDay,e.text),n=e.iconURL;return r.a.createElement("div",{className:"weather-now-section"},r.a.createElement("div",{className:"header"},"Now"),r.a.createElement("div",{className:"inner-container"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:n,alt:""})),r.a.createElement("div",{className:"current-weather"},t,"\xb0C")),r.a.createElement("div",{className:"footer"},a))}}]),t}(r.a.Component)),d=a(12),b=(a(53),a(44)),v=a(19),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={isSelectLocationOpen:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onToggleSelectLocation",value:function(){this.setState((function(e){return{isSelectLocationOpen:!e.isSelectLocationOpen}}))}},{key:"onLocationNameChange",value:function(e){this.setState({locationName:e.target.value})}},{key:"onSelectCity",value:function(){var e=this.state.locationName;this.props.eventEmitter.emit("updateWeather",e),this.setState({isSelectLocationOpen:!1})}},{key:"render",value:function(){var e=this,t=this.state.isSelectLocationOpen;this.props.eventEmitter;return r.a.createElement("div",{className:"select-city-container"},r.a.createElement("div",{className:"location"},r.a.createElement("span",null,r.a.createElement(b.a,null))," ",this.props.location),r.a.createElement(v.a,null,r.a.createElement(v.c,null,(function(t){var a=t.ref;return r.a.createElement("button",{className:"btn btn-select-location",ref:a,onClick:e.onToggleSelectLocation.bind(e)},"Select Another Location")})),r.a.createElement(v.b,{placement:"top"},(function(a){var n,c=a.ref,i=a.style,o=a.placement,s=a.arrowProps;return t&&r.a.createElement("div",{className:"popup-container",ref:c,style:i,"data-placement":o},r.a.createElement("div",{className:"form-container"},r.a.createElement("input",(n={id:"location-name",type:"text",placeholder:"City Name",onChange:e.onLocationNameChange.bind(e)},Object(d.a)(n,"type","text"),Object(d.a)(n,"name","name"),Object(d.a)(n,"className","question"),Object(d.a)(n,"id","nme"),Object(d.a)(n,"required",!0),Object(d.a)(n,"autoComplete","off"),n)),r.a.createElement("button",{className:"btn btn-select-location",onClick:e.onSelectCity.bind(e)},"Select")),r.a.createElement("div",{ref:s.ref,style:s.style}))}))))}}]),t}(r.a.Component),O=(a(57),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.day;return e?r.a.createElement("div",null,r.a.createElement("div",{className:"text"},e)):null}}]),t}(r.a.Component)),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.forecastDays;return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},"Tomorrow"),r.a.createElement("div",{className:"inner-container"},e&&Object.keys(e).map((function(t,a){return console.log(e[t]),r.a.createElement(O,{day:e[t].avgtemp+"\xb0C",key:a})}))))}}]),t}(r.a.Component),j=(a(58),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(d.a)({},e.target.id,e.target.value))},a.onSubmit=function(e){e.preventDefault();var t=a.state.firstName;console.log("Your first name is ".concat(t,".")),a.props.onUserSubmit({firstName:t}),a.setState({redirectToWeather:!0}),a.props.history.push("/dashboard")},a.state={firstName:"",redirectToWeather:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.firstName;return r.a.createElement("form",{className:"form-page"},r.a.createElement("input",{id:"firstName",placeholder:"What's your name?",onChange:this.handleChange,value:e,required:!0}),r.a.createElement("span",{className:"highlight"}),r.a.createElement("span",{className:"bar"}),r.a.createElement("label",{htmlFor:"",className:"email"}),r.a.createElement("input",{className:"btn btn-submit",type:"submit",onClick:this.onSubmit,value:"Submit!"}))}}]),t}(r.a.Component)),N=a(39),g=a.n(N),w=a(40),S=a.n(w),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleUserSubmit=function(e){var t=e.firstName;a.setState({firstName:t})},a.state={cityName:"Copenhagen",days:5,isLoading:!0,firstName:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"updateWeather",value:function(){var e=this,t=this.state,a=t.cityName,n=t.days,r="http://api.weatherstack.com/forecast?access_key=".concat("41007434f956d19cf5c620784be11b8e","&query=").concat(a,"&days=").concat(n);S.a.get(r).then((function(e){return e.data})).then((function(t){e.setState({isLoading:!1,temperature:t.current.temperature,isDay:t.current.is_day,text:t.current.weather_descriptions[0],iconURL:t.current.weather_icons[0],forecastDays:t.forecast})})).catch((function(e){e&&console.error("Cannot fetch weather data from API",e)}))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.eventEmitter;this.updateWeather(),t.on("updateWeather",(function(t){e.setState({cityName:t},(function(){return e.updateWeather()}))}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.cityName,c=t.temperature,i=t.isDay,o=t.text,s=t.iconURL,l=t.forecastDays;t.firstName;return r.a.createElement(h.a,{basename:"react-weather-app"},r.a.createElement("div",{className:"app-container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:function(t){return r.a.createElement(j,Object.assign({},t,{onUserSubmit:e.handleUserSubmit}))}}),r.a.createElement(p.a,{exact:!0,path:"/dashboard"},r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-greeting-time"},r.a.createElement("p",{className:"hello"},"Howdy, ",this.state.firstName?this.state.firstName:"stranger","!"),r.a.createElement("div",null,r.a.createElement("p",{className:"clock"},r.a.createElement(g.a,{format:"HH:mm:ss",ticking:!0,interval:1e3})))),r.a.createElement("div",{className:"header-motivation"},r.a.createElement("p",null,"Ready to rock the world?"))),r.a.createElement("div",{className:"weather-info-container"},r.a.createElement("div",{className:"main-container"},a&&r.a.createElement("h3",null,"Loading Weather..."),!a&&r.a.createElement("div",null,r.a.createElement("div",{className:"select-city-section"},r.a.createElement(E,{location:n,temperature:c,isDay:i,text:o,iconURL:s,eventEmitter:this.props.eventEmitter})),r.a.createElement("div",{className:"weather-sections"},r.a.createElement(f,this.state),r.a.createElement("div",{className:"weather-tomorrow-section"},r.a.createElement(y,{forecastDays:l}))))))))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(43);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).eventEmitter=new C.EventEmitter,a.state={appName:"Weather Up"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.Children.map(this.props.children,(function(t){return r.a.cloneElement(t,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(d.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.state,{eventEmitter:e.eventEmitter}))}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(D,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.32b98297.chunk.js.map