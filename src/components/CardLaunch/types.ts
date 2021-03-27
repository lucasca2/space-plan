type TShip = {
  name: string;
  image: string;
  type: string;
}

type TRocket = {
  rocket_name: string;
  rocket_type: string;
}

type TLaunchSite = {
  site_name: string;
  site_name_long: string;
}

export interface TCardLaunch {
  id: string;
  launch_date_utc: string;
  mission_name: string;
  details: string;
  rocket: TRocket;
  launch_site: TLaunchSite;
  ships: TShip[];
}
