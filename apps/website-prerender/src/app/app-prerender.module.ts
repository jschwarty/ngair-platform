import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule, AppComponent } from '@ngair-platform/website/app';

@NgModule({
  imports: [AppModule, ServerModule, ServerTransferStateModule],
  bootstrap: [AppComponent]
})
export class AppPrerenderModule {}
