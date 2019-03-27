// import { Component, OnInit } from '@angular/core';

// import { MaxProcessService} from '../../../../services/maxprocess.service';

// import { Proces} from '../../../../models/proc';




// @Component({
//   selector: 'app-role-list',
//   templateUrl: './role-list.component.html',
//   styleUrls: ['./role-list.component.scss'],
// })


// export class RoleListComponent implements OnInit {
//   proc1 :Proces[];
// proc2 : Proces[];
// proc3 :Proces[];
// proc4 :Proces[];
// cols:any;
// processInfo:any;
    

//   constructor(private  maxprocesService: MaxProcessService) { }

//   ngOnInit() {
//     this.maxprocesService.getMaxProcess().then(process=>this.proc1=process);
//    this.maxprocesService.getMaxProcess().then(process=>this.proc2=process);
//    this.maxprocesService.getMaxProcess().then(process=>this.proc3=process);

//    this.cols=[
//      { field:'pid' ,header:'PID'},
//      { field:'cpu_percent' ,header:'CPU %'},
//      { field:'memory_percent' ,header:'Memory %'},
//      { field:'status' ,header:'Status'},
//      { field:'mem_info.rss' ,header:'RMEM'},
//      { field:'mem_info.vms' ,header:'VMEM'},
//      { field:'mem_info.swap' ,header:'Swap MEM'},
//      { field:'name' ,header:'Name'},
//    ];




//   }

//   customSort(event: SortEvent) {
//     event.data.sort((data1, data2) => {
//         let value1 = data1[event.field];
//         let value2 = data2[event.field];
//         let result = null;

//         if (value1 == null && value2 != null)
//             result = -1;
//         else if (value1 != null && value2 == null)
//             result = 1;
//         else if (value1 == null && value2 == null)
//             result = 0;
//         else if (typeof value1 === 'string' && typeof value2 === 'string')
//             result = value1.localeCompare(value2);
//         else
//             result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

//         return (event.order * result);
//     });
// }
// }

// }

  


