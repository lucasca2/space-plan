export type TShipLaunch = {
  name: string;
  image: string;
  type: string;
}

export type TRocketLaunch = {
  rocket_name: string;
  rocket_type: string;
}

export type TLaunchSite = {
  site_name: string;
  site_name_long: string;
}

export type TLaunch = {
  id: string;
  launch_date_utc: string;
  mission_name: string;
  details: string;
  rocket: TRocketLaunch;
  launch_site: TLaunchSite;
  ships: TShipLaunch[];
}
