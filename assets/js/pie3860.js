/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.createFromConfig(
  {
    hiddenState:{
      opacity:0
    },
   angle: 45
  },
  "chartdiv", 
  am4charts.PieChart3D);
  
if(chart.logo){
    chart.logo.disabled = true;
}
// chart.hiddenState.properties.opacity = 0;
// this creates initial fade-in

// chart.legend = new am4charts.Legend();

chart.innerRadius = am4core.percent(40)
chart.outerRadius = am4core.percent(100)

chart.data = [
  {
    country: "PRIVATE SALE",
    litres: 8
  },
  {
    country: "CEX LISTING",
    litres: 20
  },
  {
    country: "RESERVE/DEVELOPMENT",
    litres: 30
  },
  {
    country: "PUBLIC SALE/PANCAKESWAP",
    litres: 25
  },
  {
    country: "BUYBACK/BURN",
    litres: 10
  },
  {
    country: "STAKING",
    litres: 7
  }
];

var series = chart.series.push(new am4charts.PieSeries3D());
series.dataFields.value = "litres";
series.dataFields.category = "country";

// series.slices.template.stroke = am4core.color("#4a2abb");
// series.slices.template.strokeWidth = 2;
// series.slices.template.strokeOpacity = 1;

// Disabling labels and ticks on inner circle
// series.labels.template.disabled = false;
series.labels.template.fill = 'blue';

// series.ticks.template.disabled = false;
series.ticks.template.stroke = 'red';

// Disable sliding out of slices
series.slices.template.states.getKey("hover").properties.shiftRadius = 0;
series.slices.template.states.getKey("hover").properties.scale = 1.1;

const max = chart.data.length - 1;
console.log(chart.data)
let activeIdx = 0;

setInterval(()=>{
  disableSlice();
},1000)

function disableSlice() {
  const prevIdx = activeIdx === 0 ? max : activeIdx - 1;
  const nextIdx = activeIdx === max ? 0 : activeIdx + 1;
  console.log(prevIdx,activeIdx,nextIdx);
  series.slices.getIndex(prevIdx).setState('default');
  series.slices.getIndex(activeIdx).setState('active');
  activeIdx = nextIdx;
}


