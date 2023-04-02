import { Injectable } from "@angular/core";
import { firstLevelArr, fourthLevelArr, secondLevelArr, thirdLevelArr } from "../model/data.model";
import { Address, AddressType } from "../constants/common.constant";

@Injectable({
  providedIn: "root",
})
export class DataFormatService {

  /**
   * Method to fetch tree data
   * @returns { any | undefined }
   * @memberof DataFormatService
   */
  fetchTreeData() : any | undefined {
     return  DataFormatService.prepareData(firstLevelArr, AddressType.country);
  }

  /**
   * Method to prepare tree data object by passed list
   * @param {Address[]} list 
   * @param {string} type 
   * @param {string} parent 
   * @returns   { any | undefined }
   * @memberof DataFormatService
   */
  static prepareData(list: Address[], type:string, parent?: string): any | undefined {
    let result = {};

    list.forEach((item: Address) => {
      const key = item.id; 
      switch(type) {
      
        case AddressType.state:
          if(item.parentId === parent){
            const districtList = DataFormatService.prepareData(thirdLevelArr, AddressType.district, key);
            Object.assign(result, { [key]: {"stateName": item.name, [AddressType.district]: districtList[AddressType.district]}});
          } 
        break;

        case AddressType.district:
          if(item.parentId === parent){
            const placeList = DataFormatService.prepareData(fourthLevelArr, AddressType.place, key);
            Object.assign(result, { [key]: {"districtName": item.name, [AddressType.place]: placeList[AddressType.place]}});
          }  
        break;

        case AddressType.place : 
        if(item.parentId === parent){
          Object.assign(result, { [key]: {"placeName": item.name}});
        }
        break;

        default: 
        
        const stateList = DataFormatService.prepareData(secondLevelArr, AddressType.state, key);
          Object.assign(result, { [key]: {"countryName": item.name, [AddressType.state]: stateList[AddressType.state]}});
          
        break;
      }

      
    });

    return Object.assign({ [type]: result});
  }
}
