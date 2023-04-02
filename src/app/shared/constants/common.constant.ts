// Form title/lables/options
const FormTitle = "Form to Update A Address";

enum FormLabels {
  country = "Please Enter The countryName",
  state = "Please Enter The statesName",
  district = "Please Enter The districtName",
  place = "Please Enter The placeName",
}


enum DisabledOptions {
  country = "Select countryName",
  state = "Select statesName",
  district = "Select districtName",
  place = "Select placeName",
}

enum AddressType {
  country = "countries",
  state = "states",
  district = "districts",
  place = "places",
}

// Custom types
type Address = {
  id: string;
  name: string;
  parentId?: string;
}

type Country = {
  countryName: string;
  states?: State[];
}

type State = {
  stateName: string;
  districts?: District[]
}

type District = {
  districtName: string;
  places: Place[];
};

type Place = {
  placeName: string;
};

export { FormTitle, FormLabels, DisabledOptions, Address, Country, State, District, Place, AddressType };
