import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatCheckboxModule, MatTabsModule, MatAutocompleteModule,
    MatSlideToggleModule, MatFormFieldModule, MatInputModule, MatExpansionModule, MatChipsModule, MatCardModule,
    MatGridListModule, MatButtonToggleModule, MatIconModule, MatListModule, MatSnackBarModule, MatToolbarModule,
    MatProgressSpinnerModule, MatTooltipModule, MatSelectModule, MatDialogModule, MatOptionModule,
    MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatRadioModule, MatSortModule,
     MatTableModule, MatProgressBarModule, MatMenuModule, MatPaginatorModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatAutocompleteModule,
    MatFormFieldModule, MatSlideToggleModule, MatInputModule, MatExpansionModule, MatChipsModule, MatCardModule,
    MatGridListModule, MatButtonToggleModule, MatIconModule, MatListModule, MatSnackBarModule, MatToolbarModule,
    MatProgressSpinnerModule, MatTooltipModule, MatSelectModule, MatDialogModule, MatOptionModule,
    MatDatepickerModule, MatNativeDateModule, MatStepperModule, MatRadioModule,
    MatSortModule, MatTableModule, MatProgressBarModule, MatMenuModule, MatPaginatorModule]
})
export class MaterialModule { }
