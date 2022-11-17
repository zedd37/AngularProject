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
import { UpdateCampaignIgTtComponent } from './Components/campaigns/update-campaign/update-campaign-ig-tt/update-campaign-ig-tt.component';
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
import { AdminCampaignsComponent } from './Components/admin-campaigns/admin-campaigns.component';
import { AdminBrandsComponent } from './Components/admin-brands/admin-brands.component';
import { AdminInfluencersComponent } from './Components/admin-influencers/admin-influencers.component';
import { AuthGuard } from './Guard/auth.guard';
import { RoleGuard } from './Guard/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: SignupAndLoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'browse-influencers',
    component: BrowseInfluencersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create-campaign',
    component: CreateCampaignOneComponent,
    canActivate: [AuthGuard, RoleGuard],
  },
  {
    path: 'create-campaign/instagram/:campaignId',
    component: CreateCampaignTwoComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'create-campaign/tiktok/:campaignId',
    component: CreateCampaignThreeComponent,
    canActivate: [AuthGuard,RoleGuard],

  },
  {
    path: 'create-campaign/instagram-tiktok/:campaignId',
    component: CreateCampaignIgTtComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'create-campaign/payment',
    component: CreateCampaignFourComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'campaigns',
    component: MyCampaignsComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'campaigns/:campaignId',
    component: CampaignDetailsComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'update-campaign/:campaignId',
    component: UpdateCampaignOneComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'update-campaign/instagram/:campaignId',
    component: UpdateCampaignTwoComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'update-campaign/tiktok/:campaignId',
    component: UpdateCampaignThreeComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'update-campaign/instagram-tiktok/:campaignId',
    component: UpdateCampaignIgTtComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'influencers-payment',
    component: InfluencersPaymentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'payment-method',
    component: PaymentsMethodComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'admin-panel/campaigns',
    component: AdminCampaignsComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'admin-panel/brands',
    component: AdminBrandsComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  {
    path: 'admin-panel/influencers',
    component: AdminInfluencersComponent,
    canActivate: [AuthGuard,RoleGuard],
  },
  { path: '**', component: ErrorComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
