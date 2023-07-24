import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NotesService } from './notes.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatButtonModule, 
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, 
  MatChipsModule, MatDatepickerModule, MatDialogModule,
  MatDividerModule, MatExpansionModule, MatFormFieldModule, 
  MatGridListModule, MatIconModule, MatInputModule, 
  MatListModule, MatMenuModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule, MatSidenavModule, MatSlideToggleModule, 
  MatSliderModule, MatSnackBarModule, MatSortModule, 
  MatStepperModule, MatTableModule, MatTabsModule, 
  MatToolbarModule, MatTooltipModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent
  ],
  imports: [ 
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ],
  providers: [ NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
