import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HomeComponent, PageHomeModule } from '@ngair-platform/website/page-home';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'ngair-website'
    }),
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'page-episode', loadChildren: '@ngair-platform/website/page-episode#PageEpisodeModule' }
      ],
      { initialNavigation: 'enabled' }
    ),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    PageHomeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
