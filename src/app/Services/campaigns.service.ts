import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampaignsService {

  constructor(private CampaignClient: HttpClient) {

  }

  Campaigns_Base_URL = "http://127.0.0.1:8000/api/campaigns";

  getAllCampaigns() {
    return this.CampaignClient.get(this.Campaigns_Base_URL);
  }

  getCampaign(id: number) {
    return this.CampaignClient.get(`${this.Campaigns_Base_URL}/${id}`);
  }

  addNewCampaign(newCampaign: any) {
    return this.CampaignClient.post(this.Campaigns_Base_URL, newCampaign);
  }

  addNewIG(id: number, newIg: any) {
    return this.CampaignClient.post(`${this.Campaigns_Base_URL}/instagram/${id}`, newIg);
  }

  addNewTT(id: number, newTT: any) {
    return this.CampaignClient.post(`${this.Campaigns_Base_URL}/tiktok/${id}`, newTT);
  }

  updateCampaign(id: number, updatedCampaign: any) {
    return this.CampaignClient.put(`${this.Campaigns_Base_URL}/${id}`, updatedCampaign);
  }

  updateIG(id:number, updatedIg:any){
    return this.CampaignClient.put(`${this.Campaigns_Base_URL}/instagram/${id}`, updatedIg);
  }

  updateTT(id:number, updatedTT:any){
    return this.CampaignClient.put(`${this.Campaigns_Base_URL}/tiktok/${id}`, updatedTT);
  }

  deleteCampaign(id:number){
    return this.CampaignClient.delete(`${this.Campaigns_Base_URL}/${id}`);
  }
  
  getPending() {
    return this.CampaignClient.get("http://127.0.0.1:8000/api/pending")
  }

  getCompleted() {
    return this.CampaignClient.get("http://127.0.0.1:8000/api/completed")
  }

  getDrafts() {
    return this.CampaignClient.get("http://127.0.0.1:8000/api/drafts")
  }
}
