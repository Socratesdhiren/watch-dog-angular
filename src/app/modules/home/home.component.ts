import {Component, OnInit, ViewChild} from '@angular/core';
import { CpuinfosService } from '../../services/cpuinfos.service';
import { DhirenService } from '../../services/dhiren.service';
import {SwapdetailService} from '../../services/swapdetail.service';
import {NetworkService} from '../../services/network.service';
import { CarService } from '../../services/car.service';
import {TableModule} from 'primeng/table';
import { element } from 'protractor';
import { LoadAvgService } from '../../services/loadavg.service';
import {OsinfosService}  from '../../services/osinfo.service';
import { CpuActiveService }  from '../../services/cpuactive.service';
import {IpAddService}  from '../../services/ipadd.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  timeSpan = [];
  raminfo:any;
  swapinfo:any;
  processInfo: any;
  data :any;
  dataswap :any;
  datapercent:any;
  datanetwork:any;
  cpuinfo:any;
  cpuactive:any;
  networkinfo:any;
  xx:number[] = [];
  loadavg :any;
  osinf:any;
  ipinfo :any;

 
  constructor(
     private dhirenService:DhirenService,
     private carService:CarService,
     private cpuinfoService:CpuinfosService,
     private swapdetailService:SwapdetailService ,
     private networkService :NetworkService,
     private loadService :LoadAvgService ,
     private osinfoService :OsinfosService,
     private cpuactiveService :CpuActiveService,
     private ipaddService :IpAddService,
    ) 
    { 

      
}
    


  ngOnInit() {
   setInterval(()=> this.getprocinf(),3000)
   setInterval(()=>this.getloadavgg(),3000)
   setInterval(()=>this.getdatanetwork(),3000)
   setInterval(()=>this.getipconf(),3000)
   setInterval(()=>this.getramudpct(),3000)
   setInterval(()=>this.getcpustates(),3000)
   setInterval(()=>this.getramdetail(),3000)
   setInterval(()=>this.getswappdetail(),3000)
   setInterval(()=>this.getoscpudetail(),3000  )
  } 

  getprocinf(){
    this.dhirenService.getProcessInfo()
    .subscribe(
      value => {
        var a, b;
        var dataValue =[];
        this.processInfo = value;
        this.processInfo.forEach(element => {
          b = dataValue.push(element.pid);
       });
        
    }
  )
  }

 
getloadavgg(){
  this.loadService.getloadavg()


  .subscribe(
    value=> {

     
      this.loadavg=value;
    }
  )
}

getdatanetwork(){
  this.networkService.getnetwork()
    .subscribe(   
      value=> {          
       this.datanetwork= value
   }
    )
   }
getramdetail(){
  this.carService.getramInfo()
  .subscribe(
    value=>{
       this.data = {
          labels: ['Total','Available','Used', 'Free','Buffer', 'Cached'],
          datasets: [
              {
                  data: [value.total, value.available, value.used, value.free, value.buffers, value.cached],
                  backgroundColor: [
                      "Crimson ",
                      "LawnGreen ",
                      "LightSkyBlue",
                      "yellow",
                      "pink",
                      "orange"                      
                  ],
              }]    
                }        
    }
     )}


getswappdetail(){
  this.swapdetailService.getswapInfo()
  .subscribe(
    value =>{
           this.dataswap ={
        labels: ['SwapFree','SwapIn','SwapOut','SwapTotal','Swap-Used'],
            datasets: [
                {
                    data: [value.free, value.sin, value.sout,value.total,value.used],
                    backgroundColor: [
                        "red",
                        "green",
                        "blue",
                        
                        "pink",
                        "orange"
                    ],
              }]
            }
          }
    )
}




getipconf(){
   this.ipaddService.getipInfo()
   .subscribe(
     value=> {
       console.log("value")
       this.ipinfo=value
     }
   ) 
  }

getramudpct(){
  this.carService.getramInfo()
  .subscribe(
    value=>{
 this.datapercent={
   labels:['Used Percent(%)','free'],
   datasets :[
     {
       data:[value.usedPercent,(100-value.usedPercent)],
        backgroundColor:[
          "blue",
          "red"
        ],
     }]
   
   
 } 

    })

  }


getcpustates(){

  this.cpuactiveService.getcpuinfo()
  .subscribe(
    value=>{
      this.cpuactive= {
          labels: ['User','System','Idle', 'Nice','IOwait','Irq', 'SoftIrq','Guest'],
          datasets: [
              {
                  data: [value.user  , value.system, value.idle, value.nice, value.iowait, value.irq,value.softirq,value.guest],
                  backgroundColor: [
                      "red",
                      "green",
                      "blue",
                      "yellow",
                      "pink",
                      "orange",
                      "purple",
                      "gray"
                  ],                   
              }]                     
             }  
    }
     )
}

getoscpudetail(){
  this.cpuinfoService.getcpuinfo()
  .subscribe(
    value=>{
      
      this.cpuinfo = value  ;

    }
  )
  this.osinfoService.getosinfo()
  .subscribe(
    value=>{     
      this.osinf=value;
    }
  )
  }






  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  

}
}
