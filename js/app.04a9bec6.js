(function(){"use strict";var e={2788:function(e,t,o){var i=o(9242),n=o(3396);const a={id:"app"},r=(0,n._)("header",null,[(0,n._)("h1",null,"Automobile Dataset Dashboard")],-1),s={class:"grid-container"},l={class:"grid-item"},u=(0,n._)("div",{class:"grid-item"},[(0,n._)("p",null,"I have meticulously crafted a Bar Chart component that empowers users to explore and analyse their data effortlessly. This versatile component offers users the ability to select a categorical column, a numerical column, and an aggregation method. This powerful combination opens up exciting possibilities for gaining profound insights into the distribution of prices across various categorical variables within your dataset. Whether you're investigating the influence of car make, fuel type, or any other categorical attribute on pricing trends, this component provides a dynamic and interactive visual representation of your data.")],-1),c=(0,n._)("div",{class:"grid-item"},[(0,n._)("p",null,"Introducing the Pie Chart component—a vital tool in dissecting and comprehending the intricate composition of categorical variables within your dataset. With this component, you can swiftly uncover valuable insights such as data imbalances and the relative proportions of different categories. Whether you're delving into the distribution of car body styles, engine types, or any other categorical factor, this component offers a visually compelling representation of your data. Harness the power of pie charts to gain a deeper understanding of your dataset's categorical intricacies and make data-driven decisions with confidence.")],-1),p={class:"grid-item"},d={class:"grid-item"},h=(0,n._)("div",{class:"grid-item"},[(0,n._)("p",null,"Behold the Scatterplot Component—a sophisticated asset for unraveling intricate relationships between numerical variables within your dataset. This component provides a comprehensive platform to explore the correlations, trends, and patterns that lie beneath your data's surface. By selecting two numerical columns, one for the x-axis and another for the y-axis, users can generate insightful scatterplots that highlight connections between diverse data points. Whether you're investigating the interplay between engine size and horsepower or exploring the influence of vehicle length on fuel efficiency, this component equips you with the tools to unearth valuable insights, guiding your decision-making process with data-backed precision.")],-1);function g(e,t,o,i,g,v){const m=(0,n.up)("PriceCharts"),y=(0,n.up)("PieCharts"),f=(0,n.up)("PriceScatter");return(0,n.wg)(),(0,n.iD)("div",a,[r,(0,n._)("main",null,[(0,n._)("div",s,[(0,n._)("div",l,[(0,n.Wm)(m)]),u,c,(0,n._)("div",p,[(0,n.Wm)(y)]),(0,n._)("div",d,[(0,n.Wm)(f)]),h])])])}const v=(0,n._)("label",{for:"column-select"},"Select a column:",-1),m=(0,n.uE)('<option value="Make">Make</option><option value="Fuel-Type">Fuel Type</option><option value="Aspiration">Aspiration</option><option value="Number-Doors">Number of Doors</option><option value="Body-Style">Body Style</option><option value="Drive-Wheels">Drive Wheels</option><option value="Engine-Location">Engine Location</option><option value="Engine-Type">Engine Type</option><option value="Number-Cylinders">Number of Cylinders</option><option value="Fuel-System">Fuel System</option>',10),y=[m],f=(0,n._)("label",{for:"y-axis-select"},"Select a column for the y-axis:",-1),b=(0,n.uE)('<option value="Wheel-Base">Wheel Base</option><option value="Length">Length</option><option value="Width">Width</option><option value="Height">Height</option><option value="Curb-Weight">Curb Weight</option><option value="Engine-Size">Engine Size</option><option value="Bore">Bore</option><option value="Stroke">Stroke</option><option value="Compression-Ratio">Compression Ratio</option><option value="Horsepower">Horsepower</option><option value="Peak-RPM">Peak RPM</option><option value="City-MPG">City MPG</option><option value="Highway-MPG">Highway MPG</option><option value="Price">Price</option>',14),C=[b],P=(0,n._)("label",{for:"aggregation-select"},"Select an aggregation type:",-1),w=(0,n.uE)('<option value="Average">Average</option><option value="Minimum">Minimum</option><option value="Maximum">Maximum</option><option value="Median">Median</option><option value="Mode">Mode</option>',5),x=[w],M=(0,n._)("canvas",{id:"chart"},null,-1);function S(e,t,o,a,r,s){return(0,n.wg)(),(0,n.iD)("div",null,[v,(0,n.wy)((0,n._)("select",{id:"column-select","onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedColumn=e),onChange:t[1]||(t[1]=(...e)=>s.generateChart&&s.generateChart(...e))},y,544),[[i.bM,r.selectedColumn]]),f,(0,n.wy)((0,n._)("select",{id:"y-axis-select","onUpdate:modelValue":t[2]||(t[2]=e=>r.selectedYAxis=e),onChange:t[3]||(t[3]=(...e)=>s.generateChart&&s.generateChart(...e))},C,544),[[i.bM,r.selectedYAxis]]),P,(0,n.wy)((0,n._)("select",{id:"aggregation-select","onUpdate:modelValue":t[4]||(t[4]=e=>r.selectedAggregation=e),onChange:t[5]||(t[5]=(...e)=>s.generateChart&&s.generateChart(...e))},x,544),[[i.bM,r.selectedAggregation]]),M])}o(7658);var _=o(6026),k=o.n(_),A=o(1632),W={data(){return{data:[],selectedColumn:"Make",selectedAggregation:"Average",selectedYAxis:"Price",myChart:null,yAxisOptions:[]}},mounted(){this.fetchDataset()},methods:{fetchDataset(){k().parse("Automobile_data.csv",{header:!0,download:!0,dynamicTyping:!0,complete:e=>{this.data=e.data;const t=Object.keys(this.data[0]);this.yAxisOptions=t.filter((e=>e!==this.selectedColumn)),this.generateChart()}})},getColumnType(e){const t=this.data[0][e];return"string"===typeof t?"categorical":"number"===typeof t?"numerical":"unknown"},generateChart(){const e=this.selectedColumn,t=this.getColumnType(e),o=this.selectedAggregation,i=this.selectedYAxis;if("categorical"===t){const t={};this.data.forEach((o=>{const n=o[e],a=parseFloat(o[i]);isNaN(a)||(t[n]||(t[n]=[]),t[n].push(a))}));const n=Object.keys(t),a=n.map((e=>{const i=t[e];if("Average"===o)return i.reduce(((e,t)=>e+t),0)/i.length;if("Minimum"===o)return Math.min(...i);if("Maximum"===o)return Math.max(...i);if("Median"===o){i.sort(((e,t)=>e-t));const e=Math.floor(i.length/2);return i.length%2!==0?i[e]:(i[e-1]+i[e])/2}if("Mode"===o){const e={};i.forEach((t=>{e[t]=(e[t]||0)+1}));let t=null,o=0;for(const i in e)e[i]>o&&(t=parseFloat(i),o=e[i]);return t}})),r=document.getElementById("chart").getContext("2d");this.myChart&&this.myChart.destroy(),this.myChart=new A.ZP(r,{type:"bar",data:{labels:n,datasets:[{label:`${o} ${i}`,data:a,backgroundColor:"rgba(75, 192, 192, 0.6)"}]},options:{scales:{y:{beginAtZero:!0}}}})}}}},E=o(89);const B=(0,E.Z)(W,[["render",S]]);var D=B;const H=(0,n._)("label",{for:"column-select"},"Select a column:",-1),T=(0,n.uE)('<option value="Make">Make</option><option value="Fuel-Type">Fuel Type</option><option value="Aspiration">Aspiration</option><option value="Number-Doors">Number of Doors</option><option value="Body-Style">Body Style</option><option value="Drive-Wheels">Drive Wheels</option><option value="Engine-Location">Engine Location</option><option value="Engine-Type">Engine Type</option><option value="Number-Cylinders">Number of Cylinders</option><option value="Fuel-System">Fuel System</option>',10),O=[T],R=(0,n._)("canvas",{id:"pie-chart"},null,-1);function F(e,t,o,a,r,s){return(0,n.wg)(),(0,n.iD)("div",null,[H,(0,n.wy)((0,n._)("select",{id:"column-select","onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedColumn=e),onChange:t[1]||(t[1]=(...e)=>s.generatePieChart&&s.generatePieChart(...e))},O,544),[[i.bM,r.selectedColumn]]),R])}var G={data(){return{data:[],selectedColumn:"Make",myPieChart:null}},mounted(){this.fetchDataset()},methods:{fetchDataset(){k().parse("Automobile_data.csv",{header:!0,download:!0,dynamicTyping:!0,complete:e=>{this.data=e.data,this.generatePieChart()}})},generatePieChart(){const e=this.selectedColumn,t={};this.data.forEach((o=>{const i=o[e];void 0!==i&&(t[i]||(t[i]=0),t[i]++)}));const o=Object.keys(t),i=Object.values(t);this.myPieChart&&this.myPieChart.destroy();const n=document.getElementById("pie-chart").getContext("2d");this.myPieChart=new A.ZP(n,{type:"pie",data:{labels:o,datasets:[{data:i,backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(231, 233, 237, 0.6)","rgba(166, 233, 245, 0.6)","rgba(190, 245, 166, 0.6)","rgba(245, 166, 166, 0.6)"]}]}})}}};const j=(0,E.Z)(G,[["render",F]]);var L=j;const N=(0,n._)("label",{for:"x-axis-select"},"Select a column for the X-axis:",-1),Y=(0,n.uE)('<option value="Wheel-Base">Wheel Base</option><option value="Length">Length</option><option value="Width">Width</option><option value="Height">Height</option><option value="Curb-Weight">Curb Weight</option><option value="Engine-Size">Engine Size</option><option value="Bore">Bore</option><option value="Stroke">Stroke</option><option value="Compression-Ratio">Compression Ratio</option><option value="Horsepower">Horsepower</option><option value="Peak-RPM">Peak RPM</option><option value="City-MPG">City MPG</option><option value="Highway-MPG">Highway MPG</option><option value="Price">Price</option>',14),Z=[Y],z=(0,n._)("label",{for:"y-axis-select"},"Select a column for the Y-axis:",-1),U=(0,n.uE)('<option value="Wheel-Base">Wheel Base</option><option value="Length">Length</option><option value="Width">Width</option><option value="Height">Height</option><option value="Curb-Weight">Curb Weight</option><option value="Engine-Size">Engine Size</option><option value="Bore">Bore</option><option value="Stroke">Stroke</option><option value="Compression-Ratio">Compression Ratio</option><option value="Horsepower">Horsepower</option><option value="Peak-RPM">Peak RPM</option><option value="City-MPG">City MPG</option><option value="Highway-MPG">Highway MPG</option><option value="Price">Price</option>',14),V=[U],I=(0,n._)("canvas",{id:"scatter-plot"},null,-1);function X(e,t,o,a,r,s){return(0,n.wg)(),(0,n.iD)("div",null,[N,(0,n.wy)((0,n._)("select",{id:"x-axis-select","onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedXAxis=e),onChange:t[1]||(t[1]=(...e)=>s.generateScatterPlot&&s.generateScatterPlot(...e))},Z,544),[[i.bM,r.selectedXAxis]]),z,(0,n.wy)((0,n._)("select",{id:"y-axis-select","onUpdate:modelValue":t[2]||(t[2]=e=>r.selectedYAxis=e),onChange:t[3]||(t[3]=(...e)=>s.generateScatterPlot&&s.generateScatterPlot(...e))},V,544),[[i.bM,r.selectedYAxis]]),I])}var $={data(){return{data:[],selectedXAxis:"Wheel-Base",selectedYAxis:"Price",myScatterPlot:null}},mounted(){this.fetchDataset()},methods:{fetchDataset(){k().parse("Automobile_data.csv",{header:!0,download:!0,dynamicTyping:!0,complete:e=>{this.data=e.data,this.generateScatterPlot()}})},generateScatterPlot(){const e=this.selectedXAxis,t=this.selectedYAxis,o=this.data.map((t=>parseFloat(t[e]))),i=this.data.map((e=>parseFloat(e[t])));this.myScatterPlot&&this.myScatterPlot.destroy();const n=document.getElementById("scatter-plot").getContext("2d");this.myScatterPlot=new A.ZP(n,{type:"scatter",data:{datasets:[{label:`${e} vs. ${t}`,data:o.map(((e,t)=>({x:e,y:i[t]}))),backgroundColor:"rgba(75, 192, 192, 0.6)",pointRadius:5,pointHoverRadius:8}]},options:{scales:{x:{type:"linear",position:"bottom",title:{display:!0,text:e}},y:{type:"linear",position:"left",title:{display:!0,text:t}}}}})}}};const q=(0,E.Z)($,[["render",X]]);var J=q,K={components:{PriceCharts:D,PieCharts:L,PriceScatter:J}};const Q=(0,E.Z)(K,[["render",g]]);var ee=Q;(0,i.ri)(ee).mount("#app")}},t={};function o(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,i,n,a){if(!i){var r=1/0;for(c=0;c<e.length;c++){i=e[c][0],n=e[c][1],a=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<r&&(r=a));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,r=i[0],s=i[1],l=i[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var c=l(o)}for(t&&t(i);u<r.length;u++)a=r[u],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},i=self["webpackChunkauto_dashboard"]=self["webpackChunkauto_dashboard"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(2788)}));i=o.O(i)})();
//# sourceMappingURL=app.04a9bec6.js.map