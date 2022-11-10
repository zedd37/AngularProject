import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseInfluencersComponent } from './Components/browse-influencers/browse-influencers.component';
import { CampaignDetailsComponent } from './Components/campaigns/campaign-details/campaign-details.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CreateCampaignFourComponent } from './Components/campaigns/create-campaign/create-campaign-four/create-campaign-four.component';
import { CreateCampaignIgTtComponent } from './Components/campaigns/create-campaign/create-campaign-ig-tt/create-campaign-ig-tt.component';
import { CreateCampaignOneComponent } from './Components/campaigns/create-campaign/create-campaign-one/create-campaign-one.component';
import { CreateCampaignThreeComponent } from './Components/campaigns/create-campaign/create-campaign-three/create-campaign-three.component';
// import { CreateCampaignTwoThreeComponent } from './Components/campaigns/create-campaign/create-campaign-two-three/create-campaign-two-three.component';
import { CreateCampaignTwoComponent } from './Components/campaigns/create-campaign/create-campaign-two/create-campaign-two.component';
import { CreateCampaignComponent } from './Components/campaigns/create-campaign/create-campaign.component';
import { MyCampaignsComponent } from './Components/campaigns/my-campaigns/my-campaigns.component';
import { UpdateCampaignOneComponent } from './Components/campaigns/update-campaign/update-campaign-one/update-campaign-one.component';
import { UpdateCampaignThreeComponent } from './Components/campaigns/update-campaign/update-campaign-three/update-campaign-three.component';
import { UpdateCampaignTwoComponent } from './Components/campaigns/update-campaign/update-campaign-two/update-campaign-two.component';
import { UpdateCampaignComponent } from './Components/campaigns/update-campaign/update-campaign.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { HomeComponent } from './Components/home/home.component';
import { InfluencersPaymentsComponent } from './Components/payments/influencers-payments/influencers-payments.component';
import { PaymentsMethodComponent } from './Components/payments/payments-method/payments-method.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignupAndLoginComponent } from './Components/signup-and-login/signup-and-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: SignupAndLoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'browse-influencers', component: BrowseInfluencersComponent },
  { path: 'create-campaign', component: CreateCampaignOneComponent },
  {
    path: 'create-campaign/instagram/:campaignId',
    component: CreateCampaignTwoComponent,
  },
  {
    path: 'create-campaign/tiktok/:campaignId',
    component: CreateCampaignThreeComponent,
  },
  {
    path: 'create-campaign/instagram-tiktok/:campaignId',
    component: CreateCampaignIgTtComponent,
  },
  { path: 'create-campaign/payment', component: CreateCampaignFourComponent },
  { path: 'campaigns', component: MyCampaignsComponent },
  { path: 'campaigns/:campaignId', component: CampaignDetailsComponent },
  {
    path: 'update-campaign/:campaignId',
    component: UpdateCampaignOneComponent,
  },
  {
    path: 'update-campaign/Instagram/:campaignId',
    component: UpdateCampaignTwoComponent,
  },
  {
    path: 'update-campaign/tiktok/:campaignId',
    component: UpdateCampaignThreeComponent,
  },
  {
    path: 'update-campaign/instagram-tiktok/:campaignId',
    component: UpdateCampaignComponent,
  },
  { path: 'influencers-payment', component: InfluencersPaymentsComponent },
  { path: 'payment-method', component: PaymentsMethodComponent },
  { path: '**', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
