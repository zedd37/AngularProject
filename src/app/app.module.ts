import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CreateCampaignComponent } from './Components/campaigns/create-campaign/create-campaign.component';
import { MyCampaignsComponent } from './Components/campaigns/my-campaigns/my-campaigns.component';
import { SavedDraftsComponent } from './Components/campaigns/saved-drafts/saved-drafts.component';
import { PaymentsComponent } from './Components/payments/payments.component';
import { InfluencersPaymentsComponent } from './Components/payments/influencers-payments/influencers-payments.component';
import { PaymentsMethodComponent } from './Components/payments/payments-method/payments-method.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { BrowseInfluencersComponent } from './Components/browse-influencers/browse-influencers.component';
import { SignupAndLoginComponent } from './Components/signup-and-login/signup-and-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    CampaignsComponent,
    CreateCampaignComponent,
    MyCampaignsComponent,
    SavedDraftsComponent,
    PaymentsComponent,
    InfluencersPaymentsComponent,
    PaymentsMethodComponent,
    ContactUsComponent,
    BrowseInfluencersComponent,
    SignupAndLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
