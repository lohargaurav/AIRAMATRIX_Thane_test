import { Component, OnInit } from "@angular/core";
import { FormTitle, FormLabels, DisabledOptions, Country, State, District, Place, AddressType } from "./../../shared/constants/common.constant";
import { DataFormatService } from "src/app/shared/service/data-format.service";

@Component({
  selector: "app-edit-address",
  templateUrl: "./edit-address.component.html",
})
export class EditAddressComponent implements OnInit {
  public title = FormTitle;
  public labels = FormLabels;
  public disabledOptions = DisabledOptions;

  public countryData: any;
  public stateData: any;
  public districtData: any;
  public placeData: any;


  public countryKeys: string[] = [];
  public stateKeys : string[] = []; 
  public districtKeys : string[] = [];
  public placeKeys : string[] = [];

  public dropDownTypes = AddressType;

  constructor(private dataService: DataFormatService) {}

  ngOnInit() {
    this.initData();
  }

  /**
   * Method initialize data from data service
   * @returns {void}
   * @memberof EditAddressComponent
   */
  private initData(): void{
    const data = this.dataService.fetchTreeData();
    // Log tree data
    console.log({ treeData: data});
    this.countryData = data[AddressType.country];
    this.countryKeys = this.getObjectKeys(this.countryData);
  }

  /**
   * Method to filter data from object using selected Key
   * @param {*} event 
   * @param {string} type 
   * @returns {void}
   * @memberof EditAddressComponent
   */
  onChangeFetechData(event: any, type: string) : void{
    const selectedValue = event.value;
    switch(type){
      case AddressType.state:
        this.resetDistrict();
        this.districtData = this.stateData[selectedValue][AddressType.district];
        this.districtKeys = this.getObjectKeys(this.districtData);
      break;
      case AddressType.district: 
        this.resetPlaces();
        this.placeData = this.districtData[selectedValue][AddressType.place];
        this.placeKeys = this.getObjectKeys(this.placeData);
      break;
      default:
        this.resetState();
        this.stateData = this.countryData[selectedValue][AddressType.state];
        this.stateKeys = this.getObjectKeys(this.stateData);
      break;
    }
    
  }

  /**
   * Method to return Object keys
   * @param {*} object 
   * @returns {Array<string>}
   * @memberof EditAddressComponent
   */
  getObjectKeys(object: any): string[]{
    return Object.keys(object);
  }

  /**
   * Method to reset dropdown data for state, district and places
   * @returns {void}
   * @memberof EditAddressComponent
   */
  resetState(): void{
    this.stateData = undefined;
    this.stateKeys = [];
    this.resetDistrict();
  }

  
  /**
   * Method to reset dropdown data for district and places
   * @returns {void}
   * @memberof EditAddressComponent
   */
  resetDistrict(): void{
    this.districtData = undefined;
    this.districtKeys = [];
    this.resetPlaces();
  }

  
  /**
   * Method to reset dropdown data for places
   * @returns {void}
   * @memberof EditAddressComponent
   */
  resetPlaces(): void{
    this.placeData = undefined;
    this.placeKeys = [];
  }
}
