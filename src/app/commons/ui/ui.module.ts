import { NgModule }       from '@angular/core';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import {TabMenuModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {DataListModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { TabViewModule } from "primeng/components/tabview/tabview";
import { TabViewComponent } from "./tab-view/tab-view.component";
import { TabViewService } from "./tab_view.service";
import { PanelComponent } from './panel/panel.component';
import { TabDetailsComponent } from "./tab-details/tab-details.component";


@NgModule({
 imports: [
    CommonModule,
    PanelModule,
    TabViewModule, 
    DialogModule, 
    ButtonModule
  ],
  declarations: [
    TabViewComponent,
    TabDetailsComponent,
    PanelComponent,
  ],
  
  exports: [
    CommonModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DataListModule,
    PanelModule,
    DialogModule,
    
    TabViewComponent,
    TabDetailsComponent,
    PanelComponent,
    ],
  
  providers: [TabViewService]
})

export class UIModule {}