import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { MatCardModule} from '@angular/material';
import { NewsComponent } from './routes/news/news.component';
import { TechnicalAnalysisComponent } from './routes/technical-analysis/technical-analysis.component';
import { TechnicalVisualizationComponent } from './routes/technical-visualization/technical-visualization.component';
import { RouterModule } from '@angular/router';
import { appRoute } from 'src/routerConfig';
import { HttpClientModule } from '@angular/common/http';
import { MarkofitService } from './services/markofit-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NewsComponent,
    TechnicalAnalysisComponent,
    TechnicalVisualizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [MarkofitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
