import {Routes} from '@angular/router'
import { NewsComponent,TechnicalAnalysisComponent,TechnicalVisualizationComponent } from './app/routes';

export const appRoute:Routes=[
    {
        path:'',
        component:NewsComponent
    },
    
    {
        path:'news',
        component:NewsComponent
    },
    {
        path:'techVisual',
        component:TechnicalVisualizationComponent
    },
    {
        path:'techAnalysis',
        component:TechnicalAnalysisComponent
    }
]