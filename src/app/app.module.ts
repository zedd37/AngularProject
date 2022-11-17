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
import { PaymentsComponent } from './Components/payments/payments.component';
import { InfluencersPaymentsComponent } from './Components/payments/influencers-payments/influencers-payments.component';
import { PaymentsMethodComponent } from './Components/payments/payments-method/payments-method.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { BrowseInfluencersComponent } from './Components/browse-influencers/browse-influencers.component';
import { SignupAndLoginComponent } from './Components/signup-and-login/signup-and-login.component';
import { CreateCampaignOneComponent } from './Components/campaigns/create-campaign/create-campaign-one/create-campaign-one.component';
import { CreateCampaignTwoComponent } from './Components/campaigns/create-campaign/create-campaign-two/create-campaign-two.component';
import { CreateCampaignThreeComponent } from './Components/campaigns/create-campaign/create-campaign-three/create-campaign-three.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCampaignFourComponent } from './Components/campaigns/create-campaign/create-campaign-four/create-campaign-four.component';
import { CurrentCampaignsComponent } from './Components/campaigns/my-campaigns/current-campaigns/current-campaigns.component';
import { PendingCampaignsComponent } from './Components/campaigns/my-campaigns/pending-campaigns/pending-campaigns.component';
import { CompletedCampaignsComponent } from './Components/campaigns/my-campaigns/completed-campaigns/completed-campaigns.component';
import { DraftsComponent } from './Components/campaigns/my-campaigns/drafts/drafts.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { HomeComponent } from './Components/home/home.component';
import { CampaignDetailsComponent } from './Components/campaigns/campaign-details/campaign-details.component';
import { UpdateCampaignComponent } from './Components/campaigns/update-campaign/update-campaign.component';
import { UpdateCampaignOneComponent } from './Components/campaigns/update-campaign/update-campaign-one/update-campaign-one.component';
import { UpdateCampaignTwoComponent } from './Components/campaigns/update-campaign/update-campaign-two/update-campaign-two.component';
import { UpdateCampaignThreeComponent } from './Components/campaigns/update-campaign/update-campaign-three/update-campaign-three.component';
import { UpdateCampaignFourComponent } from './Components/campaigns/update-campaign/update-campaign-four/update-campaign-four.component';
import { CampaignsService } from './Services/campaigns.service';
import { CreateCampaignIgTtComponent } from './Components/campaigns/create-campaign/create-campaign-ig-tt/create-campaign-ig-tt.component';
import { UpdateCampaignIgTtComponent } from './Components/campaigns/update-campaign/update-campaign-ig-tt/update-campaign-ig-tt.component';
import { SignupAndLoginService } from './Components/Services/signup-and-login.service';
import { BrandService } from './brand.service';
import { BrandAdminHeaderComponent } from './Components/brand-admin-header/brand-admin-header.component';
// import { BrandAdminHeaderComponent } from './Components/header/brand-admin-header/brand-admin-header.component';
// import { InfluencerHeaderComponent } from './Components/header/influencer-header/influencer-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    CampaignsComponent,
    CreateCampaignComponent,
    MyCampaignsComponent,
    PaymentsComponent,
    InfluencersPaymentsComponent,
    PaymentsMethodComponent,
    ContactUsComponent,
    BrowseInfluencersComponent,
    SignupAndLoginComponent,
    CreateCampaignOneComponent,
    CreateCampaignTwoComponent,
    CreateCampaignThreeComponent,
    CreateCampaignFourComponent,
    CurrentCampaignsComponent,
    PendingCampaignsComponent,
    CompletedCampaignsComponent,
    DraftsComponent,
    ErrorComponentComponent,
    HomeComponent,
    CampaignDetailsComponent,
    UpdateCampaignComponent,
    UpdateCampaignOneComponent,
    UpdateCampaignTwoComponent,
    UpdateCampaignThreeComponent,
    UpdateCampaignFourComponent,
    CreateCampaignIgTtComponent,
    UpdateCampaignIgTtComponent,
    BrandAdminHeaderComponent,
    // InfluencerHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [BrandService, CampaignsService, SignupAndLoginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
