import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseInfluencersComponent } from './Components/browse-influencers/browse-influencers.component';
import { CampaignsComponent } from './Components/campaigns/campaigns.component';
import { CreateCampaignComponent } from './Components/campaigns/create-campaign/create-campaign.component';
import { MyCampaignsComponent } from './Components/campaigns/my-campaigns/my-campaigns.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { HomeComponent } from './Components/home/home.component';
import { InfluencersPaymentsComponent } from './Components/payments/influencers-payments/influencers-payments.component';
import { PaymentsMethodComponent } from './Components/payments/payments-method/payments-method.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignupAndLoginComponent } from './Components/signup-and-login/signup-and-login.component';

const routes: Routes = [

  {path:"", component:HomeComponent},
  {path:"auth", component:SignupAndLoginComponent},
  {path:"profile", component:ProfileComponent},
  {path:"browse-influencers", component:BrowseInfluencersComponent},
  {path:"create-campaign", component:CreateCampaignComponent},
  {path:"campaigns", component:MyCampaignsComponent},
  {path:"influencers-payment", component:InfluencersPaymentsComponent},
  {path:"payment-method", component:PaymentsMethodComponent},
  {path:"**", component:ErrorComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
