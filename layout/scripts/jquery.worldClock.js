// 儲存各國名稱及時區
var data=[
  {
    country:"NEW YORK",
    timeZone:"America/New_York",
  },
  {
    country:"LONDON",
    timeZone:"Europe/London"
  },
  {
    country:"BANGKOK",
    timeZone:"Asia/Bangkok"
  },
  {
    country:"TAIWAN",
    timeZone:"Asia/Taipei"
  },
  {
    country:"SYDNEY",
    timeZone:"Australia/Sydney"
  }
]

//儲存時間顯示格式
option={day:"2-digit",month:"short",year:"numeric",hour12:false,hour:"numeric",minute:"2-digit"};

//DOM
var timeTable=document.querySelector('.timeZone');


function clockMaker(){
  //清除 timeTable內所有節點
  timeTable.innerHTML='';
  //new Date
  let now=new Date();
  //將 timeZone 加入 option中
  for(let i=0;i<data.length;i++){
    option.timeZone=data[i].timeZone;
    let str=now.toLocaleString('en',option);

    //切割時間字串
    let splice=str.split(',')
    let month=splice[0].split(' ')[0];
    let day=splice[0].split(' ')[1];
    let year=splice[1];

    //將時間排成 DD/MM/YYYY
    let DMY_combine=day+' '+month+','+ ' 2113';
    let time=splice[2];
    let country=data[i].country;

    //組字串
    var tr=document.createElement('tr');
    // if(i==0 | i==4){
      tr.setAttribute('class','bg_dark');
    // }   
    tr.innerHTML=`<td>
                  <h2>${country}</h2><br><p>${DMY_combine}</p>
                  </td>
                  <td><p class="time">${time}</p>
                  `
    //新增 tr節點   
    timeTable.appendChild(tr);
    
  }
  
}
//每半分鐘更新一次
clockMaker();
setInterval(clockMaker,30000);